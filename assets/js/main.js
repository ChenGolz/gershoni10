(function () {
  const navButton = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  if (navButton && nav) {
    navButton.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });
    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const track = gallery.querySelector('[data-gallery-track]');
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    const windowEl = gallery.querySelector('.gallery-window');
    let index = 0;

    function visibleCount() {
      if (!track || !track.children.length || !windowEl) return 1;
      const item = track.children[0];
      const itemWidth = item.getBoundingClientRect().width || 260;
      const trackWidth = windowEl.getBoundingClientRect().width || 1;
      return Math.max(1, Math.floor(trackWidth / itemWidth));
    }

    function update() {
      if (!track || !track.children.length) return;
      const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || '0') || 0;
      const itemWidth = track.children[0].getBoundingClientRect().width + gap;
      const maxIndex = Math.max(0, track.children.length - visibleCount());
      index = Math.max(0, Math.min(index, maxIndex));
      track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    prev && prev.addEventListener('click', () => { index -= 1; update(); });
    next && next.addEventListener('click', () => { index += 1; update(); });
    window.addEventListener('resize', update, { passive: true });
    requestAnimationFrame(update);
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = '<button type="button" aria-label="סגירת תמונה">×</button><img alt="" />';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('button');

  document.querySelectorAll('.gallery-track img, .full-gallery-grid img, .polaroid-card img, .classic-hero-image img, .gallery-hero-photo img').forEach((image) => {
    image.addEventListener('click', () => {
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt || 'תמונה מוגדלת';
      lightbox.classList.add('is-open');
    });
  });

  function closeLightbox() {
    lightbox.classList.remove('is-open');
    lightboxImage.removeAttribute('src');
  }

  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeLightbox();
  });
})();
