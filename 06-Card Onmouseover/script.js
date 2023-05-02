const principalImg = document.getElementById('principalImg');
const imgs = document.querySelectorAll('.thum img');

imgs.forEach((img) => {
   img.addEventListener('mouseover', (e) => {
      principalImg.src = e.target.src;
   });
});