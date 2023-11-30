const day = 1;

localStorage.removeItem('aoc-data-day-' + day);

async function getInputData() {
  let inputData = localStorage.getItem('aoc-data-day-' + day);

  if (inputData) {
    console.log('inputData (cached): ', inputData);
  }

  if (!inputData) {
    try {
      let response = await fetch(
        `https://adventofcode.com/2022/day/${day}/input`
      );
      inputData = await response.json();
      localStorage.setItem('aoc-data-day-' + day, inputData);
      console.log('inputData (fresh): ', inputData);
    } catch (error) {
      inputData = `11334
      6264
      9318`;
      console.error('Could not fetch data:\n', error);
    }
  }

  console.log('inputData', inputData);

  return inputData;
}

async function runSolution() {
  let input = '';
  let solution = null;
  input = await getInputData();
  solution = solve(input);
  return solution;
}

function solve(input) {
  const elfValues = input.split('\n\n');

  const elfTotals = elfValues
    .map(s => s.split('\n').reduce((sum, value) => +value + +sum))
    .sort((a, b) => a - b)
    .slice(-3);

  const topThree = elfTotals.reduce((sum, current) => +current + +sum);

  return topThree;
}

runSolution().then(solution => console.log(solution));

export default runSolution;
