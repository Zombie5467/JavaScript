// 11e with functions -----------------------------------------------------------

function countDown(n) {
  for (i = n; i >= 0; i--) {
    console.log(i);
  }
}

countDown(20);

// 11e with arrays -----------------------------------------------------------

let countDownArr = [];

for (let i = 20; i >= 0; i--) {
  countDownArr.push(i);
}

console.log(countDownArr);
