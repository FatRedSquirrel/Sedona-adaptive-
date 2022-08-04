const burger = document.querySelector('.burger'),
  menu = document.querySelector('.header-nav'),
  overlay = document.querySelector('.overlay');

burger.addEventListener('click', () => {
  menu.classList.add('open');
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', () => {
  menu.classList.remove('open');
  overlay.style.display = 'none';
  document.body.style.overflow = 'auto';
});