function main() {
  let n = 10;

  while (isAllPalindrome(n) === false) { n++ }

  console.log(convert10to8and2(n));
}

/**
* 受け取った10進数を8進数と2進数に変換し、すべて回文になっているかどうか返す
*
* @param {Number} decimalNumber 10進数
* @return {booliean} booliean すべて回文かどうか？
*/
function isAllPalindrome(decimalNumber) {

  const numberArray = convert10to8and2(decimalNumber);
  const judgeArray = numberArray.map(value => isPalindrome(value));

  if (judgeArray.some(element => element === false)) { return false;}

  return true;
}

/**
* 受け取った受け取った10進数を8進数と2進数に変換し、配列として返す
*
* @param {Number} decimalNumber 10進数
* @return {Array} array [10進数、8進数、2進数]
*/
function convert10to8and2(decimalNumber) {

  const octalNumber = decimalNumber.toString(8);  
  const binaryNumber = decimalNumber.toString(2); 

  return [decimalNumber,octalNumber,binaryNumber];

}

/**
* 受け取った数字が回文かどうかを判定
* @param {number} number 数字
: @return {boolian} result 回文かどうか？
*/
function isPalindrome(number) {

  const splitNumberArray = number.toString().split('');
  const reversedNumberArray = splitNumberArray.concat().reverse();

  for (const [index, value] of Object.entries(splitNumberArray)) {
    if (value !== reversedNumberArray[index]) { return false }
  }
  return true;
}






