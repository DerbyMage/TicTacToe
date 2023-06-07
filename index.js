//TicTacToe board and game
const playerFactory = (name, letter) => {
    let turn; 
    return { name, letter, turn}

}

function playGame() {
    const newName = prompt('What is your name?')
    const boardArr = []
    const rowOne = document.querySelectorAll('div.row1>.square')
    newName
    const playerOne = playerFactory(newName, 'X')
    playerOne.turn = true
    console.log(playerOne)
    const playerTwo =playerFactory('computer', 'O')
    playerTwo.turn = false
    console.log(playerTwo)
    rowOne.addEventListener('click', function(e) {
        console.log(e.target)
    })

}
