const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');

menuToggle.addEventListener('click', () => {
   navigation.classList.toggle('open');
});

const list = document.querySelectorAll('.list');

const activeLink = (item) => {
   list.forEach((item) => {
      item.classList.remove('active');
   });
   item.classList.add('active');
}

list.forEach((item) => {
   item.addEventListener('click', () => activeLink(item));
});
