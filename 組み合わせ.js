function combination(balls = [1, 2, 3, 4, 5, 6], numberOfPick = 2) {
  let i, j, callback, parts;
  let result = [];

  if (balls.length < numberOfPick) return;

  if (numberOfPick == 1) {
    for (i = 0; i < balls.length; i++) {
      result[i] = [balls[i]];
    }
  }
  if (numberOfPick > 1) {
    for (i = 0; i < balls.length; i++) {
      parts = balls.slice(0);
      parts.splice(i, 1)[0];
      callback = combination(parts, numberOfPick - 1);
      for (j = 0; j < callback.length; j++) {
        result.push([balls[i]].concat(callback[j]));
      }
    }
  }
  console.log({ numberOfPick }, { result })
  return result;
}


// function combination2(array = [1, 2, 3, 4, 5, 6], number = 2, result = []) {

//   if (array.length == 0) { return result; };

//   if (number === 1) {
//     for (let i = 0; i < array.length; i++) {
//       result[i] = [array[i]];
//     }
//   }
//   for (let i = 0; i < array.length; i++) {
//     const parts = array.slice();
//     parts.splice(i, 1);
//     const callback = combination(parts, number - 1);
//     for (let j = 0; j < callback.length; j++) {
//       result.push(array[i].concat(callback[j]));
//     }
//   }
//   return result;
// }

function repeatedCombination(moneys = [1, 2, 3, 4], numberOfPick = 2, result = []) {
  let parts;
  if (numberOfPick === 0) return console.log('end', result);

  if (numberOfPick === 2) {
    moneys.forEach(value => result.push([value]));
  } else {
    result.forEach(value => {     //[1] →  [11],[12],[13],[14]
      moneys.forEach(money => {
        console.log({money});
        value= value.push(money)
      console.log({value})})
    })

  }
  console.log({ numberOfPick }, { result });
  repeatedCombination(moneys, numberOfPick - 1, result);
}



function test_20220116_1015() {
  console.log(combinationHandcopy([1, 2, 3, 4, 5, 6]));
}



