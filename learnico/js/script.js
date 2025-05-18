const swiper = new Swiper('.swiper', {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   autoplay: true,
   breakpoints: {
      768: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   }
});

function validateEmail() {
   var emailInput = document.getElementById('email');
   var resultMessage = document.getElementById('result');

   // Регулярное выражение для проверки валидности email
   var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailRegex.test(emailInput.value)) {
      resultMessage.textContent = 'Email is valid.';
      resultMessage.style.color = 'green';
   } else {
      resultMessage.textContent = 'Please enter a valid email.';
      resultMessage.style.color = 'red';
   }
}