const display = document.getElementById('display')
const buttons = document.querySelectorAll('button');
const togglerBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('toggler-icon');

let isDark = true;

buttons.forEach((button) => {

   button.addEventListener('click', () => {
      if (button.id === 'clear') {
         display.innerText = '';

      } else if (button.id === 'delete') {
         let data = display.innerText;
         display.innerText = data.substring(0, data.length - 1);

      } else if (display.innerText !== '' && button.id === 'equals') {
         display.innerText = eval(display.innerText)

      } else if (display.innerText === '' && button.id === 'equals') {
         display.innerText = 'Null';
         setTimeout(() => {
            display.innerText = '';
         }, 2000);
      }
      else {
         display.innerText += button.innerText;
      }

   });
});

togglerBtn.addEventListener('click', () => {
   calculator.classList.toggle('dark');
   togglerBtn.classList.toggle('active');
   isDark = !isDark;
});


