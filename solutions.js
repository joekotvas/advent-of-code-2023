import solutions from './solutions/index.js';

window.showModal = function (event) {
  event.preventDefault();
  const id = event.target.dataset.key
    ? event.target.dataset.key
    : event.target.parentNode.dataset.key;
  document.querySelector(`.solution-${id} dialog`).showModal();
};

const progress = 2;

const solutionTemplate = key => {
  if (key > progress) return 'Coming soon!';
  return `
    <h3>
    <a href="https://adventofcode.com/2022/day/${key}">
        <span class="day-label">Day </span>${key}
    </a>
    </h3>
    <div class="solution-links">
    <div class="solution-${key}-a">
    <a class="show" data-key="${key}-a" onclick="showModal(event)" href="#">
        1
    </a>
    <dialog>
        <button class="close" onclick="document.querySelector('.solution-${key}-a dialog').close();">
        x
        </button>
        <div>
            <h3>Answer:</h4>
            <span class="answer">${solutions[key].A()}</span>
            <h3>Solution Code:</h4>
            <pre><code>${solutions[key].A}</code></pre>
        </div>
    </dialog>
    </div>
    <div class="solution-${key}-b">
    <a class="show" data-key="${key}-b" onclick="showModal(event)" href="#">
        2
    </a>
    <dialog>
        <button class="close" onclick="document.querySelector('.solution-${key}-b dialog').close();">
        x
        </button>
        <div>
            <h3>Answer:</h4>
            <span class="answer">${solutions[key].B()}</span>
            <h3>Solution Code:</h4>
            <pre><code>${solutions[key].B}</code></pre>
        </div>
    </dialog>
    </div></div>`;
};

const output = Object.keys(solutions).map(key => {
  return `
    <div class="present-container">
        <div class="present">
            <div class="wrapping face">
                ${key}
            </div>
            <div class="contents face">
                ${solutionTemplate(key, solutions[key])}
            </div>
        </div>
        </div>
    `;
});

const calendar = `
  <div class="solutions">
    ${output.join('')}
  </table>
`;

document.getElementById('output').innerHTML = calendar;
hljs.highlightAll();
