// 硬貨は合計1000円、合計15枚まで

// 500 0,1,2
// 100 0 -9
// 50 0 - 10
// 10 0 - 10
//    min 500, 100*4 10*10

//写経
function moneyCountExpanded(totalAmount = 1000, moneyArray = [500, 100, 50, 10], totalCoin = 15) {

  const maxNumberArray = moneyArray.map(money => {
    const upperLimit = money => Math.ceil(totalAmount / money)
    const maxNumber = money => (upperLimit(money) < totalCoin) ? upperLimit(money) : totalCoin;
    return maxNumber(money);
  })

  console.log(maxNumberArray) //	[ 2, 10, 15, 15 ]

  const array = [];
  for (let i = 0; i <= maxNumberArray[1]; i++) { array.push(i); };
  console.log(array);

}


/**
* 基本形
* お札がはいると対応できない
*/
function moneyCount() {

  let count = 0
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 11; j++) {
      for (let k = 0; k < 11; k++) {
        for (let l = 0; l < 11; l++) {
          if ((i + j + k + l) > 15) { break; };
          if ((500 * i + 100 * j + 50 * k + l * 10) === 1000) {
            count = count + 1;
          }
        }
      }
    }
  }
  console.log(count);
}