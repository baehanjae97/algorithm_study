/*
백준 24723 문제

문제 : 
녹색거탑은 위 그림과 같이 규칙적으로 쌓여있다.

그림의 시야에 보이지 않는 블록은 없다.
그림의 시야에 보이는 블록의 윗면만 이용해 녹색거탑을 내려올 수 있다. 녹색거탑이 
$N$층이면, 총 
$N$개의 블록을 이용한 최단 경로로만 내려온다.
녹색거탑을 내려올 때는 정상에서 시작해 노란색 바닥까지, 항상 인접한 아래층의 블록으로만 내려온다.
녹색거탑을 정복하고 DEVIEW에 참여하자.

리뷰 : 
처음에는 장황한 네이버 소개글에 당황했지만 찬찬히 인풋 하나씩 확인해보니 쉽게 결과가 나왔다.
*/

const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().split("\n")[0]
);

const answer = (input) => {
  // 2의 N승이다.
  return console.log(2 ** input);
};

return answer(input);
