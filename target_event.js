const button = document.querySelector('button');
button.addEventListener('click', function(event) {
  const button = event.currentTarget;
  // button.textContent = '変更します。';
  console.log(event.currentTarget);
  console.log(event.target)
});


function confirmLink(event){
  if (confirm('ページ遷移しますか？')){
    console.log('実行しました。');
  } else {
    event.preventDefault();
    console.log('キャンセルしました。');
  }
}

const link = document.querySelector('a');
link.addEventListener('click', confirmLink);