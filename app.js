document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const result = document.querySelector('#result')
  const displayCurrentPlayer = document.querySelector('#current-player')
  let currentPlayer = 1

  for (var i = 0, len = squares.length; i < len; i++)

  (function(index){
    //add an onlick to each square in grid
    squares[i].onclick = function(){
      //if the square below current square is taken - player can take square above
    if(squares[index + 7].classList.contains('taken')) {
      if(currentPlayer === 1) {
        squares[index].classList.add('taken')
        squares[index].classList.add('player-one')
      }
    }
    }
  })

})
