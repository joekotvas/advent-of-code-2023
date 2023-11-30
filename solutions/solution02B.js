import data from '../data/data02.js';
//import data from '../data/data02Sample.js';

function solution(input = data) {
  const shapes = ['rock', 'paper', 'sissors'];

  const shapeTable = {
    A: 'rock',
    B: 'paper',
    C: 'sissors',
  };

  const playDecrypter = code => {
    const outcomeTable = {
      X: 'lose',
      Y: 'draw',
      Z: 'win',
    };

    const elfShape = shapeTable[code[0]];
    const outcome = outcomeTable[code[2]];

    if (outcome === 'draw') return elfShape;

    if (outcome === 'lose') {
      return shapes[(shapes.indexOf(elfShape) - 1) % 3];
    }

    return shapes[(shapes.indexOf(elfShape) + 1) % 3];
  };

  const rounds = input.split('\n').map(s => {
    return {
      elfPlay: shapeTable[s[0]],
      myPlay: playDecrypter(s),
    };
  });
  //  console.log('input: ', input);

  const shapeScore = round =>
    round.myPlay === 'rock' ? 1 : round.myPlay === 'paper' ? 2 : 3;

  const outcomeScore = round => {
    if (round.myPlay === round.elfPlay) return 3;
    if (
      (shapes.indexOf(round.elfPlay) + 1) % 3 ===
      shapes.indexOf(round.myPlay)
    )
      return 6;
    return 0;
  };

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
