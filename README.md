# Memorial Pages — Sonia & Amir

GitHub Pages-ready static package with 3 separate design directions.

## Files

- `index.html` — choose between the 3 designs
- `option-1-classic-book.html` — classic warm memorial-book design
- `option-2-modern-gallery.html` — lighter modern editorial gallery design
- `option-3-dark-museum.html` — darker museum/exhibition design
- `assets/css/styles.css` — shared styling
- `assets/js/main.js` — shared navigation, carousel, and photo lightbox
- `assets/shared/` — the shared image folder from the uploaded zip, renamed safely for GitHub Pages
- `assets/docs/` — memorial PDF documents from the uploaded zip
- `assets/shared/manifest.json` — mapping from safe filenames to original uploaded filenames

## Replacing or adding photos

Add photos into `assets/shared/`, then update the `<img src="assets/shared/photo-XX.jpg">` paths inside the option pages.

## Publish on GitHub Pages

Upload the contents of this folder to the root of your GitHub repository, then enable Pages:

Settings → Pages → Deploy from branch → `main` / `/root`

