// 変数numに整数を代入
let num = 51;

if(num % 3 == 0 && num % 5 != 0) {
  console.log('3の倍数です');
}
else if (num % 3 != 0 && num % 5 == 0) {
  console.log('5の倍数です');
}
else if(num % 3 == 0 && num % 5 == 0) {
  console.log('3と5の倍数です');
}
else {
  console.log(num);
}