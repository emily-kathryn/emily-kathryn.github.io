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
