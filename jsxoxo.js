const startButton = document.getElementById('start')
const sectionGame = document.getElementById('game')
const restartButton = document.getElementById('restart')
const sectionRestart = document.getElementById('end')
let gameButtons = document.getElementsByClassName('box')

// const players ['X''O']

function startGame() {
    sectionGame.style.display = 'none'
    sectionRestart.style.display = 'none'
    startButton.addEventListener('click', match)
}
startGame()

// match()
function match() {
    sectionGame.style.display = 'grid'
}
