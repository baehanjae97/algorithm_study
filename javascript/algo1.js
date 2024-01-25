/*
백준 15439 문제

문제 : 
베라는 상의 N 벌과 하의 N 벌이 있다. i 번째 상의와 i 번째 하의는 모두 색상 i를 가진다. N 개의 색상은 모두 서로 다르다.
상의와 하의가 서로 다른 색상인 조합은 총 몇 가지일까?

리뷰 : 
오랜만에 백준을 다시 풀어본다. nodejs 로 풀어본 것은 또 처음이여서 간단한 경우의 수 문제부터 풀어보았다. 
*/

const input = Number(
  require("fs").readFileSync("/dev/stdin").toString().split("\n")[0]
);

const answer = (input) => {
  return console.log(input * input - input);
};

return answer(input);
