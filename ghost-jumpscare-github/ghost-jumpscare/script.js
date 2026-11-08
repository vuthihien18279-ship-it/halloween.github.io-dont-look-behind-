const stage = document.getElementById('stage');
const intro = document.getElementById('intro');
const start = document.getElementById('start');

start.addEventListener('click', () => {
  intro.style.display = 'none';
  stage.classList.add('scaring');

  // Hiệu ứng ma lao tới kéo dài đúng 1 giây.
  window.setTimeout(() => {
    stage.classList.remove('scaring');
    stage.classList.add('finished');
  }, 1000);
});
