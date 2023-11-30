const day = 1;

async function getInputData() {
  let inputData = localStorage.getItem('aoc-data-day-' + day);

  if (inputData) {
    console.log('inputData (cached): ', inputData);
  }

  if (!inputData) {
    let response = await fetch(
      `https://adventofcode.com/2022/day/${day}/input`
    );
    let inputData = await response.json();
    localStorage.setItem('aoc-data-day-' + day, inputData);

    console.log('inputData (fresh): ', inputData);
  }

  return inputData;
}

async function solution() {
  //  console.log('input: ', input);

  input = await getInputData();

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
