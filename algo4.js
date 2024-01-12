/*
백준 11050 문제

문제 : 
자연수 (N\)과 정수 (K\)가 주어졌을 때 이항 계수 

({N}
{K})

를 구하는 프로그램을 작성하시오.



리뷰 : 지난번 팩토리얼을 그대로 잘 사용한 문제, 조합의 경우에 대해서 더 자세하게 알게되었다.
*/

const inputString = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")[0];
const splitedInputString = inputString.split(" ");
const n = Number(splitedInputString[0]);
const k = Number(splitedInputString[1]);

/**
 *
 ** 재귀로 팩토리얼 구현한 함수
 *
 * @param input
 * @returns output
 */
const factorial = (input) => {
  if (input === 0 || input === 1) return 1;
  if (input > 1) return input * factorial(input - 1);
};

/**
 *
 ** 조합 구하는 함수
 *
 * @param  n
 * @param  k
 *
 */
const answer = (n, k) => {
  return console.log(factorial(n) / (factorial(n - k) * factorial(k)));
};

return answer(n, k);
