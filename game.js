// Lógica del juego

function computerTurn(){
    const emptyBoxes = Array.from(boxes).filter(box => box.textContent ==='')
    if (emptyBoxes.length === 0) return;
    const randomBox = Math.floor(Math.random() * emptyBoxes.length) 
    const selctedBox = emptyBoxes[randomBox]
    selctedBox.textContent = computerSelection
    competition()
}

function competition() {
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

function checkWin(boxA, boxB, boxC) {
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