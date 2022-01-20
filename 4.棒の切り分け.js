'use strict'
//8cmの棒を3人で切り分ける
//20cmの棒を３人で切り分ける
//100cmの棒を5人で切り分ける

//21:55スタート 22:46

function cutRecursion(length = 100, scissors = 5, numberOfBars = 1, count = 0) {
  if (numberOfBars >= length) {
    console.log({ count });
    return;
  }

  if (numberOfBars < scissors) {
    cutRecursion(length, scissors, numberOfBars * 2, count + 1);
  } else {
    cutRecursion(length, scissors, numberOfBars + scissors, count + 1);
  }

}

function cutWhile() {

  const length = 100;
  const scissors = 5;
  let numberOfBars = 1;
  let count = 0;

  while (numberOfBars < length) {
    count++
    if (numberOfBars < scissors) {
      numberOfBars = numberOfBars * 2;
    } else {
      numberOfBars = numberOfBars + scissors;
    }
  }
  console.log({ count });

}




//2つにわける
////長さが1ならスルー
////剰余をつかって2つに分ける
//配列にもどす
//ソートする

//面倒臭すぎてやめた
function myOriginalFunction() {

  const bar = [[6, 5]]

  // if (bar.length > 3 ) cut(3);
  if (bar.length > 2) cut(2);
  cut(0);

  //インデックスiを切り分ける
  function cut(i) {
    if (bar[i] == 1) return;
    const first = Math.ceil(bar[i] / 2)
    const second = bar[i] - first;
    bar[i] = [first, second];
  }

  console.log(bar);

  function sortBar() {

  }

}




//整数除算　