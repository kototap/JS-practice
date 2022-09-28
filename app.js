/* global i */

// for文
// for ( let i = 1; i < 10; i++) {
//   alert('hello');
// }


// while文
// let number = 2;

// while (number < 100) {
//   alert(`${number}番`);
//   number = number * 2;
// }

// let number = 1;

// while (number <= 5) {
//   alert(number);
//   number++
// }


// for...of文
// const fruits = ['りんご', 'みかん', 'バナナ'];

// for ( const fruit of fruits ) {
//   alert(fruit);
// }


// break文
// for ( i = 0; i < 10; i++ ) {
//   if ( i == 3 ) {
//     break;
//   }
//   alert( `${i}回目の処理` )
// }


// 引数戻り値がない時の関数
// function hello() {
//   alert('こんにちは');
// }

// hello();
// hello();


// 引数がある時の関数
// function hello(name) {
//   alert(`こんにちは、${name}さん`);
// }

// hello('Alice');
// hello('Bob');


// 戻り値がある時の関数
// function pi() {
//   return 3.14;
// }

// const a = pi();
// alert(a);


// 引数と戻り値がある時の関数
// function double(number) {
//   // const result = number * 2;
//   // return result;

//   // return number * 2; こっちだけでもOK
// }

// const a = double(10);
// alert(a);

// const b = double(8);
// alert(b);



// 引数の応用

// 複数の引数
// function sum(a, b){
//   const result = a + b;
//   return result;
// }

// const x = sum(3, 5);
// alert(x);

// const y = sum(10, 20);
// alert(y);


// デフォルト引数
// 実引数なしで呼び出した時に引数の右辺の値、デフォルト値が呼び出される
// function hello(name = 'ゲスト') {
//   alert(`こんにちは、${name}さん`);
// }

// hello('Tom')
// hello()


// チェックテスト
// function call(name,title = 'さん') {
//   alert(`${name}${title}`);
// }

// call('May', '様')
// call('Smith')



// 関数式
// 無名関数
// const sayHello = function() {
//   alert('こんにちは');
// }

// sayHello();


// オブジェクトの書き方
// const book = { title: '吾輩は猫である', author: '夏目漱石', pages: 620 }

// console.log(book);
// console.log(typeof book);

// alert(book.title);
// alert(book['author'])
// alert(book['pages'])


//  プロパティの追加と変更
// const person = {
//   name: 'Alice',
// }

// console.log(person)

// person.name = 'Bob';
// person['age'] = 25;

// console.log(person);


// チェックテスト
// const bicycle = {
//   color: 'red',
//   inch: 25
// }

// alert(bicycle.color);

// bicycle.inch = 16;
// alert(bicycle.inch);


// メソッド
// const person = {
//   name: 'Alice',
//   greet: function(){
//     alert(`こんにちは、私は${this.name}です`);
//   }
// }

// person.greet();
// // alert(person.name);

// person.name = 'Bob'
// person.greet()


// Mathオブジェクト
// 円周率
// alert(Math.PI);
// // 絶対値
// alert(Math.abs(-10));
// // 四捨五入
// alert(Math.round(1.4));
// alert(Math.round(1.5));
// // 小数点以下切り捨て
// alert(Math.floor(10.3));
// // 小数点以下切り上げ
// alert(Math.ceil(10.3));
// // 0~1の間でランダム生成
// alert(Math.random());
// alert(Math.random());

// サイコロ
// alert(Math.floor(Math.random() * 6) + 1);


// Dateオブジェクト
// const now = new Date();
// alert(now);

// ↓月だけ+1されるので注意
// const theDay = new Date(2030, 3, 1, 5, 20, 0);
// alert(theDay);
// alert(theDay.getFullYear());
// alert(theDay.getMonth());
// alert(theDay.getDate());

// const today = new Date().toLocaleDateString('ja-JP', {
//   dateStyle: 'long'
// });

// alert(today);



// windowオブジェクト

// 確認ダイアログ
// alert('windowを省略しても表示可能')
// confirm('本当に削除してもよろしいですか？')
// const result = confirm('本当に削除してもいいですか？')
// if (result) {
//   alert('削除しました。');
// } else {
//   alert('キャンセルしました。');
// }


// 指定した数秒後に実行
function delayTask(){
  alert('1秒ごとに実行する');
}

// const timerId = setTimeout(delayTask, 5000);
// clearTimeout(timerId);

　const timerId = setInterval(delayTask, 1000);
　clearInterval(timerId)
