
document.querySelector('#red').addEventListener('click', partyRed)
document.querySelector('#orange').addEventListener('click',partyOrange)
document.querySelector('#yellow').addEventListener('click',partyYellow)
document.querySelector('#green').addEventListener('click',partyGreen)
document.querySelector('#blue').addEventListener('click',partyBlue)
document.querySelector('#indigo').addEventListener('click',partyIndigo)
document.querySelector('#resetBackground').addEventListener('click', defaultBackground)

function partyRed(){
  document.querySelector('body').style.background = 'red'
  document.querySelector('body').style.color= 'white'

}

function partyOrange(){
  document.querySelector('body').style.background = 'orange'
  document.querySelector('body').style.color= 'white'

}

function partyYellow() {
  document.querySelector('body').style.background = 'yellow'
  document.querySelector('body').style.color = 'white'

}

function partyGreen() {
  document.querySelector('body').style.background = 'green'
  document.querySelector('body').style.color = 'white'

}

function partyBlue() {
  document.querySelector('body').style.background = 'blue'
  document.querySelector('body').style.color = 'white'

}

function partyIndigo() {
  document.querySelector('body').style.background = 'indigo'
  document.querySelector('body').style.color = 'white'

}


function defaultBackground(){
  document.querySelector('body').style.background = 'white'
  document.querySelector('body').style.color= 'black'

}