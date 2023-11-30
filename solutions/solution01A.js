import data from '../data/data01.js';

function solution(input = data) {
  const elfValues = input.split('\n\n');

  const elfTotals = elfValues.map(s =>
    s.split('\n').reduce((sum, value) => +value + +sum)
  );

  const highestTotal = elfTotals.reduce((max, current) =>
    current > max ? current : max
  );

  return highestTotal;
}

export default solution;
