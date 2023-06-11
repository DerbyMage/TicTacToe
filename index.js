//TicTacToe board and game
const playerFactory = (name, letter) => {
    let turn; 
    return { name, letter, turn}

}

function playGame() {
    const newName = prompt('What is your name?')
    const rowOne = document.querySelectorAll('.square')
    const playerOne = playerFactory(newName, 'X')
    playerOne.turn = true
    console.log(playerOne)
    const playerTwo =playerFactory('computer', 'O')
    playerTwo.turn = false
    console.log(playerTwo)
    console.log(rowOne)
    rowOne.forEach(ele => {ele.addEventListener('click', function(e) {
        console.log(e.target)
        
       if(ele.innerText === '' ) { ele.innerText = playerOne.turn === true ? playerOne.letter: playerTwo.letter
        playerOne.turn = !playerOne.turn
        playerTwo.turn = !playerTwo.turn} 
        else { alert('Space has already been taken') }

       
    })})

}

const gameBoard = {
 boardArr: [{position: 1}, {position: 2}, {position: 3}, {position: 4}, {position: 5}, {position: 6}, {position: 7}, {position: 8}, {position: 9}]
}
