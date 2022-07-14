const p1 = {
    score: 0,
    btn: document.querySelector('#p1btn'),
    display: document.querySelector('#p1dp'),
}

const p2 = {
    score: 0,
    btn: document.querySelector('#p2btn'),
    display: document.querySelector('#p2dp'),
}

const reset = document.querySelector('#reset')
const winselect = document.querySelector('#playto')
let winscore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winscore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.btn.disabled = true;
            opponent.btn.disabled = true;
        }
    }
    player.display.textContent = player.score;
}

p1.btn.addEventListener('click', function () {
    updateScores(p1, p2)
})

p2.btn.addEventListener('click', function () {
    updateScores(p2, p1)
})

winselect.addEventListener('change', function () {
    winscore = parseInt(this.value);
    resetf();
})

reset.addEventListener('click', resetf)

function resetf() {
    isGameOver = false;
    for (let p of ([p1, p2])) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.btn.disabled = false;
    }
}