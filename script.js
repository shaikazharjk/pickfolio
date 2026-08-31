document.addEventListener('DOMContentLoaded', function () {
  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var img = document.getElementById('lightboxImg');
  var closeBtn = document.getElementById('lightboxClose');

  function open(src, alt) {
    img.src = src;
    img.alt = alt || '';
    lightbox.classList.add('is-open');
  }

  function close() {
    lightbox.classList.remove('is-open');
    img.src = '';
  }

  document.querySelectorAll('[data-lightbox]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      open(btn.getAttribute('data-lightbox'), btn.getAttribute('data-alt'));
    });
  });

  closeBtn.addEventListener('click', close);
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
});
