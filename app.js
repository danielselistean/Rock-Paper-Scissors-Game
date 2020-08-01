let userScore = 0;
let computerScore = 0;
let draws = 0;
let userScore_span = document.getElementById('userScore');
let computerScore_span = document.getElementById('computerScore');
let choiceText_p = document.getElementById('choice');
let winnerText_p = document.getElementById('winOrLose');
let tieCount = document.getElementById('ties');
let rock_btn = document.getElementById('rock');
let paper_btn = document.getElementById('paper');
let scisors_btn = document.getElementById('scissors');
let restart_btn = document.getElementById('restart');

function win(choice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    choiceText_p.innerHTML = `<b>You</b> chose ${choice} and the <b>computer</b> chose ${computerChoice} !`;
    winnerText_p.innerHTML = `<b>${choice}</b> beats <b>${computerChoice}</b> , <i>YOU WIN !</i>`;
}

function lose(choice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    choiceText_p.innerHTML = `<b>You</b> chose ${choice} and the <b>computer</b> chose ${computerChoice} !`;
    winnerText_p.innerHTML = `<b>${computerChoice}</b> beats <b>${choice}</b> , <i>YOU LOSE !</i>`;
}

function draw(choice, computerChoice) {
    draws++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    tieCount.innerHTML = draws;
    choiceText_p.innerHTML = `<b>You</b> chose ${choice} and the <b>computer</b> chose ${computerChoice} !`;
    winnerText_p.innerHTML = `<b>${choice}</b>  and  <b>${computerChoice}</b> are the same , <i>IT'S A DRAW !</i>`;
}

function compChoice() {
    var choices = ["rock", "paper", "scisors"];
    var randNum = Math.floor(Math.random() * 3);
    return choices[randNum]
}
function game(choice) {
    var computerChoice = compChoice();
    switch (choice + computerChoice) {
        case "rockscisors":
        case "paperrock":
        case "scisorspaper":
            win(choice, computerChoice)
            break;
        case "scisorsrock":
        case "rockpaper":
        case "paperscisors":
            lose(choice, computerChoice)
            break;
        case "scisorsscisors":
        case "rockrock":
        case "paperpaper":
            draw(choice, computerChoice)
            break;
    }

}

function restart() {
    window.location.reload();
}

function main() {
    rock_btn.addEventListener('click', function () {
        game('rock');
    })
    paper_btn.addEventListener('click', function () {
        game('paper');
    })
    scisors_btn.addEventListener('click', function () {
        game('scisors');
    })
    restart_btn.addEventListener('click', function () {
        restart();
    })
}

main();