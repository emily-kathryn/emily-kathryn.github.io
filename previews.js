const previews = document.querySelectorAll('[data-motion]');
const toggle = document.querySelector('.motion-toggle');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const visible = new Set();
let paused = reducedMotion.matches;

function updatePreviews() {
  toggle.textContent = paused ? 'Play previews' : 'Pause motion';

  for (const preview of previews) {
    const playing = !paused && !document.hidden && visible.has(preview);
    preview.classList.toggle('is-moving', playing);

    const animatedImage = preview.querySelector('img[data-animation]');
    if (animatedImage) {
      animatedImage.dataset.still ??= animatedImage.getAttribute('src');
      const source = playing ? animatedImage.dataset.animation : animatedImage.dataset.still;
      if (animatedImage.getAttribute('src') !== source) animatedImage.src = source;
    }

    if (!(preview instanceof HTMLVideoElement)) continue;
    if (playing) {
      if (!preview.hasAttribute('src')) preview.src = preview.dataset.src;
      preview.play().catch(() => {});
    } else {
      preview.pause();
    }
  }
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) visible.add(entry.target);
      else visible.delete(entry.target);
    }
    updatePreviews();
  }, { threshold: 0.25 });

  for (const preview of previews) observer.observe(preview);
  toggle.addEventListener('click', () => {
    paused = !paused;
    updatePreviews();
  });
  reducedMotion.addEventListener('change', () => {
    paused = reducedMotion.matches;
    updatePreviews();
  });
  document.addEventListener('visibilitychange', updatePreviews);
  updatePreviews();
  toggle.hidden = false;
}

const mapperVideo = document.querySelector('.mapper-animation');
const mapperToggle = document.querySelector('.tda-toggle');
let mapperInView = false;
let mapperPaused = reducedMotion.matches;

function updateMapper() {
  mapperToggle.textContent = mapperPaused ? 'Play PCA Mapper animation' : 'Pause PCA Mapper animation';
  if (!mapperPaused && mapperInView && !document.hidden) {
    mapperVideo.play().catch(error => {
      if (error.name === 'AbortError') return;
      mapperPaused = true;
      updateMapper();
    });
  } else {
    mapperVideo.pause();
  }
}

if ('IntersectionObserver' in window) {
  const mapperObserver = new IntersectionObserver(([entry]) => {
    mapperInView = entry.isIntersecting;
    updateMapper();
  });
  mapperObserver.observe(mapperVideo.closest('.mapper-preview'));

  mapperVideo.addEventListener('playing', () => {
    mapperVideo.classList.add('is-visible');
  });
  mapperToggle.addEventListener('click', () => {
    mapperPaused = !mapperPaused;
    updateMapper();
  });
  reducedMotion.addEventListener('change', () => {
    mapperPaused = reducedMotion.matches;
    if (mapperPaused) {
      mapperVideo.classList.remove('is-visible');
      mapperVideo.currentTime = 0;
    }
    updateMapper();
  });
  document.addEventListener('visibilitychange', updateMapper);
  updateMapper();
  mapperToggle.hidden = false;
}
