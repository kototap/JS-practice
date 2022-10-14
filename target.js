const button = document.querySelector('button');
button.addEventListener('click', function(event){
  console.log(event.target);
  console.log(event.currentTarget);
});