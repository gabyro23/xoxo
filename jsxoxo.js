const startButton = document.getElementById('start')
const sectionGame = document.getElementById('game')
const firstStep = document.getElementById('first-step')
const secondStep = document.getElementById('second-step')
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
    secondStep.style.display ='none'

    startButton.addEventListener('click', selectGameType)
}
startGame()

function selectGameType() {
    firstStep.style.display = 'inline'
    secondStep.style.display = 'none'
    startButton.style.display ='none'
    const button2players = document.getElementById('players')
    const buttonComputer = document.getElementById('computer')

    button2players.addEventListener('click', selectXO)
    buttonComputer.addEventListener('click', selectXO)
}

function selectXO() {
    firstStep.style.display = 'none'
    secondStep.style.display = 'inline'
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
    secondStep.style.display = 'none'
    sectionGame.style.display = 'grid'
    boxes.forEach(box => {
        box.addEventListener('click', showSelection)
    });
}

function showSelection(event){
    const box = event.target
    if (box.textContent !== '') return;
    box.textContent = playerSelection
    computerTurn()
}
    
// function computerTurn(){
//     const emptyBoxes = Array.from(boxes).filter(box => box.textContent ==='')
//     if (emptyBoxes.length === 0) return;
//     const randomBox = Math.floor(Math.random() * emptyBoxes.length) 
//     const selctedBox = emptyBoxes[randomBox]
//     selctedBox.textContent = computerSelection
//     competition()
// }

// function competition() {
//     if (checkWin (box1, box2, box3) ||
//         checkWin (box1, box4, box7) ||
//         checkWin (box1, box5, box9) ||
//         checkWin (box2, box5, box8) ||
//         checkWin (box3, box6, box9) ||
//         checkWin (box3, box5, box7) ||
//         checkWin (box4, box5, box6) ||
//         checkWin (box7, box8, box9) ) {
//      }
//     showOutcomeAndRestart()
// }

// function checkWin(boxA, boxB, boxC) {
//     if (boxA.textContent !== '' &&
//         boxB.textContent !== '' &&
//         boxC.textContent !== '' &&
//         boxA.textContent === boxB.textContent &&
//         boxB.textContent === boxC.textContent) {
//             if (boxA.textContent === playerSelection){
//                 outcome = 'You won bitch'
//             } else if (boxA.textContent === computerSelection){
//                 outcome = 'Fucking loser'
//             }
//         }
// }

function showOutcomeAndRestart(){
    sectionRestart.style.display = 'inline'
    spanOutcome.innerHTML = outcome
    restartButton.addEventListener('click', restart)
}

function restart() {
    location.reload()
}
