/*
백준 1010 문제

문제 : 
재원이는 한 도시의 시장이 되었다. 이 도시에는 도시를 동쪽과 서쪽으로 나누는 큰 일직선 모양의 강이 흐르고 있다. 하지만 재원이는 다리가 없어서 시민들이 강을 건너는데 큰 불편을 겪고 있음을 알고 다리를 짓기로 결심하였다. 강 주변에서 다리를 짓기에 적합한 곳을 사이트라고 한다. 재원이는 강 주변을 면밀히 조사해 본 결과 강의 서쪽에는 N개의 사이트가 있고 동쪽에는 M개의 사이트가 있다는 것을 알았다. (N ≤ M)

재원이는 서쪽의 사이트와 동쪽의 사이트를 다리로 연결하려고 한다. (이때 한 사이트에는 최대 한 개의 다리만 연결될 수 있다.) 재원이는 다리를 최대한 많이 지으려고 하기 때문에 서쪽의 사이트 개수만큼 (N개) 다리를 지으려고 한다. 다리끼리는 서로 겹쳐질 수 없다고 할 때 다리를 지을 수 있는 경우의 수를 구하는 프로그램을 작성하라.

리뷰 : 어려웠다... 이런 문제를 어떻게 빨리 푸나 싶다.

풀이과정 중 에러사항 : 타입에러가 있었다. 문자열과 숫자를 혼용하게 되는 문제가 있었던 것 같다.
*/

const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let inputArr = [];
for (let i = 1; i < input.length; i++) {
  inputArr.push(input[i].split(" "));
}

const answer = (array) => {
  array.map((numberArray) => {
    const n = +numberArray[0];
    const m = +numberArray[1];

    dpFunc(n, m);
  });
};

var dpFunc = (n, m) => {
  const dp = Array.from(Array(30), () => Array(30).fill(0));
  for (let i = 1; i <= n; i++) {
    const indexI = i - 1;
    for (let j = 1; j <= m; j++) {
      const indexJ = j - 1;

      if (i > j) {
        dp[indexI][indexJ] = 0;
      }

      if (i === j) dp[indexI][indexJ] = 1;

      if (i < j) {
        // i 가 1이면
        if (i === 1) dp[indexI][indexJ] = j;
        if (i !== 1) {
          dp[indexI][indexJ] =
            dp[indexI][indexJ - 1] + dp[indexI - 1][indexJ - 1];
        }
      }

      if (i === n && j === m) {
        return console.log(dp[indexI][indexJ]);
      }
    }
  }
};

answer(inputArr);
