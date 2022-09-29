const input = document.querySelector('input');
input.addEventListener('input', function(event) {
  const value = event.currentTarget.value;
  console.log(`入力内容: ${value}`);
});