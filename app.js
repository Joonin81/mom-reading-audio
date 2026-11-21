const player = document.getElementById('player');
document.querySelectorAll('[data-seek]').forEach(button => {
  button.addEventListener('click', () => {
    player.currentTime = Number(button.dataset.seek);
    player.play();
  });
});
const toggle = document.getElementById('show-ko');
if (toggle) {
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-ko');
    toggle.textContent = document.body.classList.contains('show-ko') ? '뜻 숨기기' : '뜻 보기';
  });
}
document.querySelectorAll('input[type=checkbox][data-key]').forEach(box => {
  const key = 'read-' + box.dataset.key;
  box.checked = localStorage.getItem(key) === '1';
  box.addEventListener('change', () => {
    localStorage.setItem(key, box.checked ? '1' : '0');
  });
});
