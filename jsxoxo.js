const startButton = document.getElementById('start')
const sectionGame = document.getElementById('game')
const firstStep = document.getElementById('first-step')
const restartButton = document.getElementById('restart')
const sectionRestart = document.getElementById('end')
const boxes = document.querySelectorAll('.box')
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const box5 = document.getElementById('box5')
const box6 = document.getElementById('box6')
const box7 = document.getElementById('box7')
const box8 = document.getElementById('box8')
const box9 = document.getElementById('box9')
const spanOutcome = document.getElementById('outcome')
let outcome = ""

let computerSelection
let playerSelection
// const players ['X''O']

function startGame() {
    sectionGame.style.display = 'none'
    sectionRestart.style.display = 'none'
    firstStep.style.display = 'none'

    startButton.addEventListener('click', selectXO)
}
startGame()

function selectXO() {
    firstStep.style.display = 'inline'
    startButton.style.display ='none'
    const buttonX = document.getElementById('buttonX')
    const buttonO = document.getElementById('buttonO')
    
    buttonX.addEventListener('click', selectionX)
    buttonO.addEventListener('click', selectionO)

}
function selectionX(){
    alert('You chose X')
    playerSelection = 'X'
    computerSelection ='O'
    match()
}

function selectionO(){
    alert('You chose O')
    playerSelection = 'O'
    computerSelection ='X'
    match()
}

function match(){
    firstStep.style.display = 'none'
    sectionGame.style.display = 'grid'
    boxes.forEach(box => {
        box.addEventListener('click', showSelection)
    });
}

function showSelection(event){
    const box = event.target
    if (box.textContent !== '') return;
    box.textContent = playerSelection
    competition()
}
// function random(min, max){
//     return Math.floor(Math.random()*(max - min + 1) + min)
// }

// function computerTurn(){
//     let randomPlay = random
// }

function competition(){
    if (box1.textContent !== '' &&
        box2.textContent !== '' &&
        box3.textContent !== '' &&
        box1.textContent === box2.textContent &&
        box2.textContent === box3.textContent){
        outcome = 'You won bitch'
    } else if (box1.textContent !== '' &&
    box4.textContent !== '' &&
    box7.textContent !== '' &&
    box1.textContent === box4.textContent &&
    box4.textContent === box7.textContent){
    outcome = 'You won bitch'
    } else if (box1.textContent !== '' &&
    box5.textContent !== '' &&
    box9.textContent !== '' &&
    box1.textContent === box5.textContent &&
    box5.textContent === box9.textContent){
    outcome = 'You won bitch'
    } else if (box2.textContent !== '' &&
    box5.textContent !== '' &&
    box8.textContent !== '' &&
    box2.textContent === box5.textContent &&
    box5.textContent === box8.textContent){
    outcome = 'You won bitch'
    } else if (box3.textContent !== '' &&
    box6.textContent !== '' &&
    box9.textContent !== '' &&
    box3.textContent === box6.textContent &&
    box6.textContent === box9.textContent){
    outcome = 'You won bitch'
    } else if (box3.textContent !== '' &&
    box5.textContent !== '' &&
    box7.textContent !== '' &&
    box3.textContent === box5.textContent &&
    box5.textContent === box7.textContent){
    outcome = 'You won bitch'
    } else if (box4.textContent !== '' &&
    box5.textContent !== '' &&
    box6.textContent !== '' &&
    box4.textContent === box5.textContent &&
    box5.textContent === box6.textContent){
    outcome = 'You won bitch'
    } else if (box7.textContent !== '' &&
    box8.textContent !== '' &&
    box9.textContent !== '' &&
    box7.textContent === box8.textContent &&
    box8.textContent === box9.textContent){
    outcome = 'You won bitch'
    // } else {
    //     outcome = 'Fucking loser'
    }
    if (outcome !== ''){
        alert(outcome);
        showOutcomeAndRestart()
    }
}

function showOutcomeAndRestart(){
    sectionRestart.style.display = 'inline'
    spanOutcome.innerHTML = outcome
    restartButton.addEventListener('click', restart)
}

function restart() {
    location.reload()
}
