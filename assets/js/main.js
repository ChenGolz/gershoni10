(function () {
  const headers = document.querySelectorAll('.site-header');

  headers.forEach((header) => {
    const toggle = header.querySelector('[data-nav-toggle]');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
      header.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', header.classList.contains('is-open') ? 'true' : 'false');
    });

    header.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => header.classList.remove('is-open'));
    });
  });

  document.querySelectorAll('[data-gallery]').forEach((gallery) => {
    const track = gallery.querySelector('[data-gallery-track]');
    const prev = gallery.querySelector('[data-gallery-prev]');
    const next = gallery.querySelector('[data-gallery-next]');
    if (!track || !prev || !next) return;

    let index = 0;

    function getVisibleCount() {
      const width = window.innerWidth;
      if (width < 620) return 1;
      if (width < 980) return 2;
      return 5;
    }

    function updateGallery() {
      const items = Array.from(track.children);
      const visible = getVisibleCount();
      const maxIndex = Math.max(0, items.length - visible);
      index = Math.min(Math.max(index, 0), maxIndex);
      const itemWidth = items[0] ? items[0].getBoundingClientRect().width : 0;
      const gap = parseFloat(getComputedStyle(track).gap || 0);
      track.style.transform = `translateX(-${index * (itemWidth + gap)}px)`;
      prev.disabled = index === 0;
      next.disabled = index === maxIndex;
      prev.style.opacity = prev.disabled ? '0.28' : '1';
      next.style.opacity = next.disabled ? '0.28' : '1';
    }

    prev.addEventListener('click', () => {
      index -= 1;
      updateGallery();
    });

    next.addEventListener('click', () => {
      index += 1;
      updateGallery();
    });

    window.addEventListener('resize', updateGallery);
    updateGallery();
  });

  // Shared asset photo lightbox. Works on GitHub Pages with no libraries.
  const clickableSelectors = [
    '.gallery-track img',
    '.curated-grid img',
    '.fragment-wall img',
    '.polaroid-card img',
    '.gallery-hero-photo img',
    '.classic-hero-image img'
  ].join(',');

  const photoLinks = document.querySelectorAll(clickableSelectors);
  if (photoLinks.length) {
    const lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = '<button type="button" aria-label="Close image">×</button><img alt="Expanded memorial photo" />';
    document.body.appendChild(lightbox);
    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('button');

    function closeLightbox() {
      lightbox.classList.remove('is-visible');
      lightboxImg.removeAttribute('src');
    }

    photoLinks.forEach((img) => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.currentSrc || img.src;
        lightboxImg.alt = img.alt || 'Expanded memorial photo';
        lightbox.classList.add('is-visible');
      });
    });

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeLightbox();
    });
  }

})();
