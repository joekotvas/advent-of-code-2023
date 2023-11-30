import data from '../data/data01.js';

function solution(input = data) {
  //  console.log('input: ', input);
  const elfValues = input.split('\n\n');

  const elfTotals = elfValues
    .map(s => s.split('\n').reduce((sum, value) => +value + +sum))
    .sort((a, b) => a - b)
    .slice(-3);

  const topThree = elfTotals.reduce((sum, current) => +current + +sum);

  console.log('topThree: ', topThree);

  return topThree;
}

solution();

export default solution;
