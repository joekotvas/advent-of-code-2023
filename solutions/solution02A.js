//import data from '../data/data02.js';
import data from '../data/data02.js';

function solution(input = data) {
  const shapeTable = {
    A: 'rock',
    X: 'rock',
    B: 'paper',
    Y: 'paper',
    C: 'sissors',
    Z: 'sissors',
  };

  const rounds = input.split('\n').map(s => {
    return {
      elfPlay: shapeTable[s[0]],
      myPlay: shapeTable[s[2]],
    };
  });
  //  console.log('input: ', input);

  const shapeScore = round =>
    round.myPlay === 'rock' ? 1 : round.myPlay === 'paper' ? 2 : 3;

  const outcomeScore = round =>
    round.myPlay === round.elfPlay
      ? 3
      : (round.myPlay === 'rock' && round.elfPlay === 'sissors') ||
        (round.myPlay === 'paper' && round.elfPlay === 'rock') ||
        (round.myPlay === 'sissors' && round.elfPlay === 'paper')
      ? 6
      : 0;

  // Calculate sum of shape score and outcome score for each round
  const roundScores = rounds.map(
    round => shapeScore(round) + outcomeScore(round)
  );

  const answer = roundScores.reduce((s, c) => s + c);

  console.log('answer: ', answer);
  return answer;
}

solution();

export default solution;
