function openModal(img, title, desc) {
  var overlay = document.getElementById('modal-overlay');
  document.getElementById('modal-img').src = img;
  document.getElementById('modal-img').alt = title;
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-desc').textContent = desc;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  var overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function () {
  var overlay = document.getElementById('modal-overlay');
  if (!overlay) return;

  document.querySelectorAll('.piece[role="button"]').forEach(function (piece) {
    function trigger() {
      openModal(piece.dataset.img, piece.dataset.title, piece.dataset.desc);
    }
    piece.addEventListener('click', trigger);
    piece.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        trigger();
      }
    });
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
