//TicTacToe board and game
const playerFactory = (name, letter) => {
    let turn;
    let wins = 0; 
    return { name, letter, turn, wins}

}

function playGame() {
    const newName = prompt('What is your name?')
    const rowOne = document.querySelectorAll('.square')
    const playerOne = playerFactory(newName, 'X')
    const gameArray = document.querySelectorAll('div[data-pos]')

    console.log(gameArray[0])
    console.log(gameArray[0].dataset.pos)
    playerOne.turn = true
    console.log(playerOne)
    const playerTwo = playerFactory('computer', 'O')
    playerTwo.turn = false
    console.log(playerTwo)
    console.log(rowOne)
    rowOne.forEach(ele => {ele.addEventListener('click', function(e) {
        //console.log(e.target)
        
       if(ele.innerText === '' ) {
        ele.innerText = playerOne.turn === true ? playerOne.letter: playerTwo.letter
        playerOne.turn = !playerOne.turn
        playerTwo.turn = !playerTwo.turn 
        }
        else { alert('Space has already been taken') }

      
       })})
      
}