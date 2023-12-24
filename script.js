const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const questionEl = document.getElementById('question');
const scoreEl = document.getElementById('score');

let score = localStorage.getItem('score', JSON.parse(localStorage.getItem('score')));
if (!score) {
    score = 0;
}
questionEl.innerHTML = `what is ${num1} multiplies ${num2}`;
scoreEl.innerHTML = `score ${score}`;
const correctAns = num1 * num2;

formEl.addEventListener('submit', () => {
    const userAns = +inputEl.value;//to convert string to number
    if (userAns === correctAns) {
        score++;
        updateLocalstorage();
    } else {
        score--;
        updateLocalstorage();
    }
});

function updateLocalstorage() {
    localStorage.setItem("score", JSON.stringify(score));
}