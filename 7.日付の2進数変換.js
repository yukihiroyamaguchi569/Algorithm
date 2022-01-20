/**
* 日付を8桁の整数に変換し、2進数に変換した後、回文かどうか判定し、
* 回文なら8桁の整数を返す
*
* @param {date} date 日付
* @return {number} result 8桁の整数
*/
function convertDateToNumber(date) {
  const string = Utilities.formatDate(date, 'JST', 'yyyyMMdd');
  const number8digit = Number(string);
  const binaryNumber = number8digit.toString(2);

  if (isPalindrome(binaryNumber) === true) {
    console.log(number8digit);
    return number8digit;
  }
}

function test_20220118_0835() {
  const DT = new Datetime('1964/10/10');

  while (Utilities.formatDate(DT.date, 'JST', 'yyyy/MM/dd') !== '2020/07/24') {
    DT.addDays(1);
    const number8digit = convertDateToNumber(DT.date);

    if (number8digit !== undefined) {
      console.log(DT.date);
    }
  }
}



