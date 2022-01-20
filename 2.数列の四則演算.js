//　351→3×51＝153
// 621→6×21＝126
// 886→8×86＝688

function answer2() {
  // const op = ['+', '-', '*', '/', '']; //10秒
  const op = ['*', ''];   //0.9秒

  for (i = 1000; i < 10000; i++) {
    const c = String(i);
    for (j = 0; j < op.length; j++) {
      for (k = 0; k < op.length; k++) {
        for (l = 0; l < op.length; l++) {
          val = c.charAt(3) + op[j] +
            c.charAt(2) + op[k] +
            c.charAt(1) + op[l] +
            c.charAt(0);
          if (val.length > 4) {
            if (i == eval(val)) {
              console.log(val + '=' + i);
            }
          }
        }
      }
    }
  }
}

    function main() {
      let n = 663;

      while (judge(n) === false) { n++ };

      console.log(n);

    }

    function judge(n = 350) {

      const splitStirng = n.toString().split('')

      const product1 = splitStirng[0] * [splitStirng[1], splitStirng[2]].join('');
      const product2 = splitStirng[2] * [splitStirng[0], splitStirng[1]].join('');

      console.log(product1, product2, reverseNumber(n));

      if (product1.toString() === reverseNumber(n) || product2.toString() === reverseNumber(n)) {
        console.log(true);
        return true
      };

      console.log(false);
      return false

    }


    /**
    * 受け取った整数をひっくり返した整数を返す
    *
    * @param {Number} number 整数
    * @return {Number} result ひっくり返した整数
    */
    function reverseNumber(number) {
      const result = number.toString().split('').reverse().join('');
      return result;
    }

