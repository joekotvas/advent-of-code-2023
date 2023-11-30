import data from '../data/data01.js';

const day = 1;

async function getData() {
  const localData = localStorage.getItem('aoc-data-day-' + day);
  console.log('localData: ', localData);

  if (!localData) {
    let response = await fetch(
      `https://adventofcode.com/2022/day/${day}/input`
    );
    let input = await response.json();
    localStorage.setItem('aoc-data-day-' + day);
  }

  console.log('localData: ', localStorage.getItem('aoc-data-day-' + day));
}

async function solution() {
  //  console.log('input: ', input);

  input = await getData();

  const elfValues = input.split('\n\n');

  const elfTotals = elfValues
    .map(s => s.split('\n').reduce((sum, value) => +value + +sum))
    .sort((a, b) => a - b)
    .slice(-3);

  const topThree = elfTotals.reduce((sum, current) => +current + +sum);

  return input;
}

solution().then(input => console.log(input));

export default solution;
