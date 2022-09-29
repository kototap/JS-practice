const div = document.querySelector('div');
div.addEventListener('mousemove', function(event){
  console.log(`Move: x = ${event.offsetX}, y = ${event.offsetY}`);
});
div.addEventListener('mousedown', function(event){
  console.log(`Down: x = ${event.offsetX}, y = ${event.offsetY}`);
});
div.addEventListener('mouseup', function(event){
  console.log(`Up: x = ${event.offsetX}, y = ${event.offsetY}`);
});