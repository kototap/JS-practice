const countupButton = document.querySelector(".countup");
countupButton.addEventListener('click', function(){
  const counter = document.querySelector(".counter");
  counter.textContent = parseInt(counter.textContent) + 1;
});

