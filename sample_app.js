const countupButton = document.querySelector(".countup");
countupButton.addEventListener('click', function(){
  const counter = document.querySelector(".counter");
  counter.textContent = parseInt(counter.textContent) + 1;
});


const countDownButton = document.querySelector('.countdowm');
countDownButton.addEventListener('click', function(){
  const counterDown = document.querySelector('.counterDown');
  counterDown.textContent = parseInt(counterDown.textContent) - 1;
});