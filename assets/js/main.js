(function () {
  'use strict';

  const icons = {
    chevronStart: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    chevronEnd: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    heart: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 20.5s-7.2-4.35-9.4-8.85C1.15 8.7 2.75 5.5 5.85 5.1c1.75-.22 3.35.62 4.25 2.02.9-1.4 2.5-2.24 4.25-2.02 3.1.4 4.7 3.6 3.25 6.55C19.2 16.15 12 20.5 12 20.5Z" stroke="currentColor" stroke-width="1.75" stroke-linejoin="round"/></svg>',
    infinity: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7.4 8.25c2.45 0 3.45 2.05 4.6 3.75 1.15-1.7 2.15-3.75 4.6-3.75a3.75 3.75 0 0 1 0 7.5c-2.45 0-3.45-2.05-4.6-3.75-1.15 1.7-2.15 3.75-4.6 3.75a3.75 3.75 0 0 1 0-7.5Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    home: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 11.2 12 4l8 7.2v8.3a1 1 0 0 1-1 1h-4.2v-5.6H9.2v5.6H5a1 1 0 0 1-1-1v-8.3Z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    family: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.8 20v-2.1A4.9 4.9 0 0 1 8.7 13h.6a4.9 4.9 0 0 1 4.9 4.9V20M13.3 13.55A4.8 4.8 0 0 1 16 13h.4a4.8 4.8 0 0 1 4.8 4.8V20" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    circle: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="7.5" stroke="currentColor" stroke-width="1.75"/><path d="M4.5 12h15M12 4.5c2.1 2.25 3.15 4.75 3.15 7.5S14.1 17.25 12 19.5C9.9 17.25 8.85 14.75 8.85 12S9.9 6.75 12 4.5Z" stroke="currentColor" stroke-width="1.35" stroke-linecap="round"/></svg>',
    star: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m12 3.7 2.15 5.05 5.45.48-4.13 3.6 1.23 5.34L12 15.42l-4.7 2.75 1.23-5.34-4.13-3.6 5.45-.48L12 3.7Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
    ring: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M10.2 8.6A4.9 4.9 0 1 0 17 15.4 4.9 4.9 0 0 0 10.2 8.6Z" stroke="currentColor" stroke-width="1.7"/><path d="M7 9.2a4.9 4.9 0 1 0 6.8 6.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="m11.2 5 1.25-1.6 1.25 1.6-1.25 1.35L11.2 5Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>',
    music: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 18.2a2.4 2.4 0 1 1-1.2-2.08V5.6l9-1.8v10.6a2.4 2.4 0 1 1-1.2-2.08V7.6L9 8.92v9.28Z" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    close: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    flourish: '<svg class="flourish-icon" viewBox="0 0 120 24" fill="none" aria-hidden="true"><path d="M6 12h34M80 12h34" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/><path d="M60 4c5 5 5 11 0 16-5-5-5-11 0-16Z" stroke="currentColor" stroke-width="1.2"/><path d="M49 12c4-3 8-3 11 0-3 3-7 3-11 0Zm22 0c-4-3-8-3-11 0 3 3 7 3 11 0Z" stroke="currentColor" stroke-width="1.1"/></svg>',
    candle: '<svg class="ui-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3.6c1.7 2.1 2.9 3.8 2.9 5.7A2.9 2.9 0 0 1 12 12.2a2.9 2.9 0 0 1-2.9-2.9c0-1.9 1.2-3.6 2.9-5.7Z" stroke="currentColor" stroke-width="1.55"/><path d="M8.2 20.5h7.6M9.2 12.8h5.6v7.7H9.2z" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  function svg(name) {
    return icons[name] || '';
  }

  function headerTemplate(variant, active) {
    const isMuseum = variant === 'museum';
    const isGallery = variant === 'gallery';
    const nav = isMuseum
      ? [
          ['home', '#home', 'דף הבית'],
          ['about', '#about', 'אודותיהם'],
          ['journey', '#journey', 'המסע'],
          ['memories', '#memories', 'זיכרונות'],
          ['tributes', '#tributes', 'מחוות']
        ]
      : isGallery
        ? [
            ['home', 'option-2-modern-gallery.html', 'דף הבית'],
            ['story', 'option-2-modern-gallery.html#story', 'סיפורם'],
            ['timeline', 'option-2-modern-gallery.html#timeline', 'ציר הזמן'],
            ['gallery-full', 'option-2-gallery.html', 'גלריה מלאה'],
            ['tributes', 'option-2-modern-gallery.html#tributes', 'זיכרונות']
          ]
        : [
            ['home', '#home', 'דף הבית'],
            ['story', '#story', 'סיפורם'],
            ['timeline', '#timeline', 'ציר הזמן'],
            ['gallery', '#gallery', 'גלריה'],
            ['tributes', '#tributes', 'זיכרונות'],
            ['guestbook', '#guestbook', 'ספר אורחים']
          ];

    const brand = isMuseum
      ? '<a class="brand museum-brand" href="index.html">סוניה ואמיר</a>'
      : '<a class="brand monogram" href="index.html" aria-label="חזרה לבחירת עיצוב"><span>ס</span><span>א</span></a>';

    const cta = isMuseum
      ? `<a class="candle-button" href="#guestbook">${svg('candle')}<span>הדלקת נר</span></a>`
      : isGallery
        ? '<a class="outline-button desktop-only" href="option-2-gallery.html">גלריה מלאה</a>'
        : '';

    return `
      <header class="site-header ${variant}-header">
        ${brand}
        <button class="nav-toggle" type="button" data-nav-toggle aria-label="פתיחת תפריט" aria-expanded="false">תפריט</button>
        <nav class="site-nav" data-nav aria-label="ניווט ראשי">
          ${nav.map(([key, href, label]) => `<a href="${href}" class="${key === active ? 'active' : ''}">${label}</a>`).join('')}
        </nav>
        ${cta}
      </header>
    `;
  }

  class MemorialHeader extends HTMLElement {
    connectedCallback() {
      const variant = this.getAttribute('variant') || 'classic';
      const active = this.getAttribute('active') || 'home';
      this.outerHTML = headerTemplate(variant, active);
    }
  }

  if (!customElements.get('memorial-header')) {
    customElements.define('memorial-header', MemorialHeader);
  }

  function initNavigation() {
    document.querySelectorAll('[data-nav-toggle]').forEach((navButton) => {
      const header = navButton.closest('.site-header');
      const nav = header ? header.querySelector('[data-nav]') : document.querySelector('[data-nav]');
      if (!nav) return;
      navButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('is-open');
        navButton.setAttribute('aria-expanded', String(isOpen));
      });
      nav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('is-open');
          navButton.setAttribute('aria-expanded', 'false');
        });
      });
    });
  }

  function initGalleries() {
    document.querySelectorAll('[data-gallery]').forEach((gallery) => {
      const track = gallery.querySelector('[data-gallery-track]');
      const prev = gallery.querySelector('[data-gallery-prev]');
      const next = gallery.querySelector('[data-gallery-next]');
      const windowEl = gallery.querySelector('.gallery-window');
      let index = 0;

      if (prev) prev.innerHTML = svg('chevronStart');
      if (next) next.innerHTML = svg('chevronEnd');

      function visibleCount() {
        if (!track || !track.children.length || !windowEl) return 1;
        const item = track.children[0];
        const itemWidth = item.getBoundingClientRect().width || 260;
        const trackWidth = windowEl.getBoundingClientRect().width || 1;
        return Math.max(1, Math.floor(trackWidth / itemWidth));
      }

      function update() {
        if (!track || !track.children.length) return;
        const styles = getComputedStyle(track);
        const gap = parseFloat(styles.columnGap || styles.gap || '0') || 0;
        const itemWidth = track.children[0].getBoundingClientRect().width + gap;
        const maxIndex = Math.max(0, track.children.length - visibleCount());
        index = Math.max(0, Math.min(index, maxIndex));
        track.style.transform = `translate3d(${-index * itemWidth}px, 0, 0)`;
        if (prev) prev.disabled = index === 0;
        if (next) next.disabled = index === maxIndex;
      }

      prev && prev.addEventListener('click', () => { index -= 1; update(); });
      next && next.addEventListener('click', () => { index += 1; update(); });
      window.addEventListener('resize', update, { passive: true });
      requestAnimationFrame(update);
    });
  }

  function initLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `<button type="button" aria-label="סגירת תמונה">${svg('close')}</button><img alt="" />`;
    document.body.appendChild(lightbox);
    const lightboxImage = lightbox.querySelector('img');
    const closeButton = lightbox.querySelector('button');

    document.querySelectorAll('.gallery-track img, .full-gallery-grid img, .polaroid-card img, .classic-hero-image img, .gallery-hero-photo img, .museum-hero img').forEach((image) => {
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
  }

  window.MemorialIcons = { svg };

  requestAnimationFrame(() => {
    initNavigation();
    initGalleries();
    initLightbox();
  });
})();
