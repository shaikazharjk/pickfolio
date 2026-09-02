document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, alt) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('is-open');
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('is-open');
    lightboxImg.src = '';
  }

  if (lightbox) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // Single static photo + lightbox (no slider)
  document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openLightbox(btn.getAttribute('data-lightbox'), btn.getAttribute('data-alt'));
    });
  });

  // Auto-advancing photo sliders inside .pick-card
  document.querySelectorAll('.pick-slides').forEach(function (slidesEl) {
    var slides = Array.prototype.slice.call(slidesEl.querySelectorAll('.pick-slide'));
    var dotsWrap = document.querySelector('.pick-dots[data-slider="' + slidesEl.id + '"]');
    var dots = dotsWrap ? Array.prototype.slice.call(dotsWrap.querySelectorAll('.pick-dot')) : [];
    var current = 0;
    var timer;

    function show(i) {
      current = (i + slides.length) % slides.length;
      slides.forEach(function (s, idx) { s.classList.toggle('is-active', idx === current); });
      dots.forEach(function (d, idx) { d.classList.toggle('is-active', idx === current); });
    }

    function restart() {
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 3000);
    }

    dots.forEach(function (d) {
      d.addEventListener('click', function () {
        show(parseInt(d.getAttribute('data-slide'), 10));
        restart();
      });
    });

    if (slides.length > 1) restart();

    var expandBtn = document.querySelector('[data-lightbox-current="' + slidesEl.id + '"]');
    if (expandBtn) {
      expandBtn.addEventListener('click', function () {
        var active = slides[current];
        openLightbox(active.getAttribute('data-full'), active.getAttribute('data-alt'));
      });
    }
  });
});
