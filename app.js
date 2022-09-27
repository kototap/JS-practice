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
function sum(a, b){
  const result = a + b;
  return result;
}

const x = sum(3, 5);
alert(x);

const y = sum(10, 20);
alert(y);