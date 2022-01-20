/**　コラッツの予想
* 自然数 n について 
*   nが偶数の場合、nを2で割る
*   nが奇数の場合、nに3をかけて1を足す
* 初期値によらず必ず1に到達する
*/


/**　（改造版）コラッツの予想
* 自然数 n について 
*   nが偶数の場合、初回のみnに3をかけて1を足す。次からはnを2で割る
*   nが奇数の場合、nに3をかけて1を足す
* 10000以下の偶数で最初に戻る数はいくつあるか？
*/
function revizedCollatzProblem(startNumber) {
  let n = startNumber;
  if (n % 2 === 0) { n = n * 3 + 1 };

  while (n !== 1 && n !== startNumber) {
    if (n % 2 === 0) {
      n = n / 2
    } else {
      n = n * 3 + 1
    }
  }
  return n;
}

function test_20220118_0809() {
  let count = 0;
  for (let i = 2; i < 100000; i = i + 2) {
    const n = revizedCollatzProblem(i);
    if (n !== 1) {
      count = count + 1;
      console.log({ n }, { i });
    }
  }
  console.log({ count })

}


