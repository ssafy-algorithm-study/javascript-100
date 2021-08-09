function solution(blocks, rule) {
  let answer = [];

  for (let block of blocks) {
    answer.push(ruleCheck(block, rule));
  }

  return answer;
}

function ruleCheck(block, rule) {
  let temp = rule.indexOf(rule[0]);

  for (let c of block) {
    if (rule.includes(c)) {
      if (temp > rule.indexOf(c)) {
        return "불가능";
      }
      temp = rule.indexOf(c);
    }
  }
  return "가능";
}

const blocks = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

console.log(solution(blocks, rule));
