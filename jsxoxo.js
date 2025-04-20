const startButton = document.getElementById('start')
const sectionGame = document.getElementById('game')
const firstStep = document.getElementById('first-step')
const restartButton = document.getElementById('restart')
const sectionRestart = document.getElementById('end')
let gameButtons = document.getElementsByClassName('box')

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

    buttonX.addEventListener('click', match)
    buttonO.addEventListener('click', match)
}

function match(){
    firstStep.style.display = 'none'
    sectionGame.style.display = 'grid'
}

    // const box1 = document.getElementById('box1')
    //     box1.addEventListener('click', "X")
    // const box2 = document.getElementById('box2')
    // const box3 = document.getElementById('box3')
    // const box4 = document.getElementById('box4')
    // const box5 = document.getElementById('box5')
    // const box6 = document.getElementById('box6')
    // const box7 = document.getElementById('box7')
    // const box8 = document.getElementById('box8')
    // const box9 = document.getElementById('box9')


