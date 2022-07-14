const p1btn = document.querySelector('#p1btn')
const p2btn = document.querySelector('#p2btn')
const reset = document.querySelector('#reset')
const p1display = document.querySelector('#p1dp')
const p2display = document.querySelector('#p2dp')
const winselect = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let winscore = 3;
let isGameOver = false;

p1btn.addEventListener('click', function () {
    if (!isGameOver) {
        p1score += 1;
        if (p1score === winscore) {
            isGameOver = true;
            p1display.classList.add('winner');
            p2display.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    p1display.textContent = p1score;
})

p2btn.addEventListener('click', function () {
    if (!isGameOver) {
        p2score += 1;
        if (p2score === winscore) {
            isGameOver = true;
            p2display.classList.add('winner');
            p1display.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
        }
    }
    p2display.textContent = p2score;
})

winselect.addEventListener('change', function() {
    winscore = parseInt(this.value);
    resetf();
})

reset.addEventListener('click', resetf)

function resetf() {
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner', 'loser');
    p2display.classList.remove('winner', 'loser');
    p1btn.disabled = false;
    p2btn.disabled = false;
}