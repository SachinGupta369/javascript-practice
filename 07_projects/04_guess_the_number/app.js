let randomValue = parseInt(Math.random()*100+1)

const submit = document.querySelector('#submit')
const previousguess = document.querySelector('#previousguess')
const guessremaining = document.querySelector('#guessremaining')
const userInput = document.querySelector('#userinput')
const lowOrHigh = document.querySelector('#lowOrHigh')
const lastSection = document.querySelector('.last')

let p = document.createElement('p')

let previousArr = []
let numRemain = 1
let playGame = true

if(playGame){
    submit.style.cursor = 'pointer'
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const value =  parseInt(userInput.value)
        console.log(value);
        validation(value);
    })
}

function validation(v){
    if(v === ''){
        alert('Plz enter the Number')
        // p.textContent = `Please enter valid Number`
    }else if(isNaN(v)){
        alert('enter the valid number, NaN')
    }else if(v > 100){
        alert('enter the valid number, Number is greater than 100')
    }else if(v <= 0){
        alert('enter the valid number, number is less than 0')
    }else {
        previousArr.push(v)     
        console.log(previousArr);
        userInput.value = ''
        
        if(numRemain >4) {
            displayGuess(v)
            displayMessage(`Gamer over, Random number is ${v}`)
            endGame()
        }else{
            displayGuess(v)
            checkGuess(v)
        }
    }
}

function checkGuess(num){
    if(num === randomValue){
        displayMessage('You got right number')
    }else if(num < randomValue){
        displayMessage('You got tooo Low Number',`${num}`)
    }else if (num > randomValue){
        displayMessage('You got too High Number',`${num}`)
    }
}

function displayGuess(num){
    userInput.value = ''
    previousguess.innerHTML += `${num}, `
    numRemain++
    guessremaining.innerHTML = `${11-numRemain}`
    // if(num === 0){
    //     endGame()
    // }
}

function displayMessage(msg){
    lowOrHigh.innerHTML = `<h2>${msg}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','');
    p.classList.add('button')
    p.innerHTML = `<h2 id='newGamess'>Start Game</h2>`;
    p.style.margin = '0 auto';
    p.style.cursor = 'pointer';
    p.style.width = '130px';
    p.style.borderRadius = '15px';
    p.style.background = 'orange';
    lastSection.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGamesButton = document.querySelector('#newGamess')
    newGamesButton.addEventListener('click', function(e){
        randomValue = parseInt(Math.random()*100+1)
        previousArr = []
        numRemain = 1
        previousguess.innerHTML = ''
        guessremaining.innerHTML = `${11-numRemain}`;
        userInput.removeAttribute('disabled')

        if(lastSection.contains(p)){
            lastSection.removeChild(p)
        }
       
        playGame=true
    
    })
}