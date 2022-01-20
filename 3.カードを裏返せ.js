'use strict'

function myFunction() {
  //8:20- 8:35 cardsへの代入ができなくてハマる 9:00質問する
  //カードを100枚で配列で準備
  //表が1、裏を0とする

  const cards = [];
  for (let i = 0; i < 100; i++) {
    cards.push([0]);
  }

  // n番目のときはnの倍数だけひっくり返す →剰余を使う
  //ひっくり返す作業は 1-value 

  for (let n = 2; n < 120; n++) {

    const startArray = JSON.stringify(cards);

    cards.map((card, index) => {
      if ((index + 1) % n == 0) { card[0] = 1 - card[0] }
    })
    const endArray = JSON.stringify(cards);

    console.log(n);
    // console.log(startArray);
    console.log(endArray);

    //ひっくり返せない判定をする
    if (startArray == endArray) {
      console.log(`${n}で終了しました`);
      return;
    }
  }
  // console.log(cards);
}

