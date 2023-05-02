const toggleBtn = document.querySelector('.toggleBtn');
const container = document.querySelector('.container');

toggleBtn.addEventListener('click', () => {
   container.classList.toggle('active');
});