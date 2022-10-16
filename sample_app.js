const countupButton = document.querySelector(".countup");
countupButton.addEventListener('click', function(){
  const counter = document.querySelector(".counter");
  if (counter.textContent > 9){
    alert("これ以上はカウントアップできません");
  } else {
    counter.textContent = parseInt(counter.textContent) + 1;
  }
});


const countDownButton = document.querySelector('.countdowm');
countDownButton.addEventListener('click', function(){
  const counterDown = document.querySelector('.counterDown');
  counterDown.textContent = parseInt(counterDown.textContent) - 1;
});