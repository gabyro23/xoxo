const startButton = document.getElementById('start')
const sectionGame = document.getElementById('game')
const firstStep = document.getElementById('first-step')
const secondStep = document.getElementById('second-step')
const computerMatch = document.getElementById('computer-match')
const playersMatch = document.getElementById('players-match')

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
const spanPlayerSelection = document.getElementById('player-selection')
const spanComputerSelection = document.getElementById('computer-selection')
const spanPlayerASelection = document.getElementById('player-A-selection')
const spanPlayerBSelection = document.getElementById('player-B-selection')

let computerSelection
let playerSelection

function startGame() {
    sectionGame.style.display = 'none'
    sectionRestart.style.display = 'none'
    firstStep.style.display = 'none'
    secondStep.style.display ='none'
    computerMatch.style.display = 'none'
    playersMatch.style.display = 'none'

    startButton.addEventListener('click', selectGameType)
}
startGame()

function selectGameType() {
    firstStep.style.display = 'inline'
    secondStep.style.display = 'none'
    startButton.style.display ='none'
    computerMatch.style.display = 'none'
    playersMatch.style.display = 'none'

    const button2players = document.getElementById('players')
    const buttonComputer = document.getElementById('computer')

    button2players.addEventListener('click', selectXOPlayer)
    buttonComputer.addEventListener('click', selectXOComputer)
}

// Computer Play
function selectXOComputer() {
    firstStep.style.display = 'none'
    secondStep.style.display = 'inline'
    startButton.style.display ='none'
    computerMatch.style.display = 'none'
    playersMatch.style.display = 'none'

    const buttonX = document.getElementById('buttonX')
    const buttonO = document.getElementById('buttonO')
    
    buttonX.addEventListener('click', selectionX)
    buttonO.addEventListener('click', selectionO)

}

function selectionX(){
    alert('You chose X')
    playerSelection = 'X'
    computerSelection ='O'
    computerMatch.style.display = 'flex'
    spanPlayerSelection.innerHTML = playerSelection
    spanComputerSelection.innerHTML = computerSelection
    match()
}

function selectionO(){
    alert('You chose O')
    playerSelection = 'O'
    computerSelection ='X'
    computerMatch.style.display = 'flex'
    spanPlayerSelection.innerHTML = playerSelection
    spanComputerSelection.innerHTML = computerSelection
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
    
export function computerTurn(){
    const emptyBoxes = Array.from(boxes).filter(box => box.textContent ==='')
    if (emptyBoxes.length === 0) return;
    const randomBox = Math.floor(Math.random() * emptyBoxes.length) 
    const selctedBox = emptyBoxes[randomBox]
    selctedBox.textContent = computerSelection
    competition()
}

export function competition() {
    if (checkWin (box1, box2, box3) ||
        checkWin (box1, box4, box7) ||
        checkWin (box1, box5, box9) ||
        checkWin (box2, box5, box8) ||
        checkWin (box3, box6, box9) ||
        checkWin (box3, box5, box7) ||
        checkWin (box4, box5, box6) ||
        checkWin (box7, box8, box9) ) {
     }
    showOutcomeAndRestart()
}

export function checkWin(boxA, boxB, boxC) {
    if (boxA.textContent !== '' &&
        boxB.textContent !== '' &&
        boxC.textContent !== '' &&
        boxA.textContent === boxB.textContent &&
        boxB.textContent === boxC.textContent) {
            if (boxA.textContent === playerSelection){
                outcome = 'You won bitch'
            } else if (boxA.textContent === computerSelection){
                outcome = 'Fucking loser'
            }
        }
}

// Player Game
function selectXOPlayer() {
    firstStep.style.display = 'none'
    secondStep.style.display = 'inline'
    startButton.style.display ='none'
    const buttonX = document.getElementById('buttonX')
    const buttonO = document.getElementById('buttonO')
    
    buttonX.addEventListener('click', selectionXPlayer)
    buttonO.addEventListener('click', selectionOPlayer)

}

function selectionXPlayer(){
    alert('Player A is X and Player B is O')
    playerA = 'X'
    playerB ='O'
    spanPlayerASelection.innerHTML = playerA
    match()
}

function selectionOPlayer(){
    alert('Player A is O and Player B is X')
    playerA = 'O'
    playerB ='X'
    match()
}




function showOutcomeAndRestart(){
    sectionRestart.style.display = 'inline'
    spanOutcome.innerHTML = outcome
    restartButton.addEventListener('click', restart)
}

function restart() {
    location.reload()
}
