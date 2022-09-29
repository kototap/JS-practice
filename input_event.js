const input = document.querySelector('input');
input.addEventListener('input', function(event) {
  const value = event.currentTarget.value;
  console.log(`入力内容: ${value}`);
});

const radios = document.querySelectorAll('.radio');
for (let radio of radios) {
  radio.addEventListener('input', function(event){
    const value = event.currentTarget.value;
    console.log(`${value}がチェックされました。`);
  });
}

const checkboxes = document.querySelectorAll('.checkbox');
for (let checkbox of checkboxes) {
  checkbox.addEventListener('input', function(event) {
    const value = event.currentTarget.value;
    console.log(`${value}がチェックされました。`);
  });
}

const select = document.querySelector('.select');
select.addEventListener('input', function(event) {
  const value = event.currentTarget.value;
  console.log(`${value}が選択されました`)
})