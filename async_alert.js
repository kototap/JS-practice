
function asyncAlert() {
  setTimeout(function(){
    alert('アラートを表示');
  }, 5000);
  console.log('ログを出力');
}
asyncAlert();

// setTimeout()は非同期処理
// 実行内容・指定秒数にかかわらず即座に後継のコードを実行。