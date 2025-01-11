const container = document.createElement('div');
container.classList.add('container');

const manageBlock = document.createElement('div');
manageBlock.classList.add('manage-block');

const repeatButton = document.createElement('button');
repeatButton.classList.add('repeat-btn');
repeatButton.textContent = 'Repeat the sequence';
const startButton = document.createElement('button');
startButton.classList.add('start-btn');
startButton.textContent = 'START';
const newGameButton = document.createElement('button');
newGameButton.classList.add('new-game-btn');
newGameButton.textContent = 'New game';

const levels = document.createElement('div');
levels.classList.add('levels');

const easyButton = document.createElement('button');
easyButton.classList.add('levels__light');
easyButton.textContent = 'Easy';

const mediumButton = document.createElement('button');
mediumButton.classList.add('levels__middle');
mediumButton.textContent = 'Medium';

const hardButton = document.createElement('button');
hardButton.classList.add('levels__high');
hardButton.textContent = 'Hard';

const easy = document.createElement('div');
easy.classList.add('easy');
const medium = document.createElement('div');
medium.classList.add('medium');

const rounds = document.createElement('div');
rounds.classList.add('rounds');
const roundOne = document.createElement('div');
roundOne.classList.add('round');
const roundTwo = document.createElement('div');
roundTwo.classList.add('round');
const roundThree = document.createElement('div');
roundThree.classList.add('round');
const roundFour = document.createElement('div');
roundFour.classList.add('round');
const roundFive = document.createElement('div');
roundFive.classList.add('round');

manageBlock.append(repeatButton, startButton, newGameButton);
rounds.append(roundOne, roundTwo, roundThree, roundFour, roundFive);
levels.append(easyButton, mediumButton, hardButton);

container.append(manageBlock, levels, easy, medium, rounds);
document.body.append(container);

const digitsKeyboard = document.createElement('div');
const lettersKeyboard = document.createElement('div');
digitsKeyboard.setAttribute('id', 'digitskeys');
lettersKeyboard.setAttribute('id', 'letterskeys');
easy.append(digitsKeyboard);
medium.append(lettersKeyboard);

const letters = [
  "A", "B", "C", "D", "E", "F","G", "H", "I",
  "J", "K", "L", "M", "N", "O", "P", "Q", "R",
  "S", "T", "U", "V", "W", "X", "Y", "Z",
];

const digits = [
  "0", "1", "2", "3", "4", "5","6", "7", "8", "9",
];


easyButton.addEventListener('click', () => {
  easy.style.display = 'block';
  medium.style.display = 'none';
  mediumButton.style.pointerEvents = 'none';
  hardButton.style.pointerEvents = 'none';
});

mediumButton.addEventListener('click', () => {
  medium.style.display = 'block';
  easy.style.display = 'none';
});

hardButton.addEventListener('click', () => {
  easy.style.display = 'block';
  medium.style.display = 'block';
});

function lightInit() {
  let block = '';

  for (let i = 0; i < digits.length; i++) {

    block += '<button class="key" data="' + digits[i] + '" >' + digits[i] + '</button>';
  }
  document.querySelector('#digitskeys').innerHTML = block;
}

lightInit();

function middleInit() {
  let block = '';

  for (let i = 0; i < letters.length; i++) {
    if (i == 10 || i == 20 || i == 26) {
      block += '<div class="clearfix"></div>';
    }
    block += '<button class="key" data="' + letters[i] + '" >' + letters[i] + '</button>';
  }
  document.querySelector('#letterskeys').innerHTML = block;
}

middleInit();


  let width = document.documentElement.clientWidth;
  console.log(width);

  if (width < 600) {
    function middleInit() {
      let block = '';
    
      for (let i = 0; i < letters.length; i++) {
        if (i == 5 || i == 10 || i == 15 || i == 20 || i == 25) {
          block += '<div class="clearfix"></div>';
        }
        block += '<button class="key" data="' + letters[i] + '" >' + letters[i] + '</button>';
      }
      document.querySelector('#letterskeys').innerHTML = block;
    }
    middleInit();


    function lightInit() {
      let block = '';
    
      for (let i = 0; i < digits.length; i++) {
        if (i == 5 || i == 10) {
          block += '<div class="clearfix"></div>';
        }
        block += '<button class="key" data="' + digits[i] + '" >' + digits[i] + '</button>';
      }
      document.querySelector('#digitskeys').innerHTML = block;
    }
    
    lightInit();
  }


const openModal = () => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  const modalMain = document.createElement('div');
  modalMain.classList.add('modal__main');
  const modalText = document.createElement('p');
  modalText.innerHTML = 'Congratulation !'
  const modalClose = document.createElement("button");
  modalClose.classList.add('modal__close');
  modalClose.innerHTML = `
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.7831 6L11.3887 1.39444C11.4797 1.28816 11.5272 1.15145 11.5218 1.01163C11.5164 0.871815 11.4585 0.739182 11.3595 0.640241C11.2606 0.541299 11.128 0.483337 10.9881 0.477936C10.8483 0.472535 10.7116 0.520094 10.6053 0.611109L5.99977 5.21666L1.39421 0.605553C1.2896 0.50094 1.14771 0.442169 0.999768 0.442169C0.851823 0.442169 0.709937 0.50094 0.605324 0.605553C0.50071 0.710167 0.441939 0.852053 0.441939 0.999998C0.441939 1.14794 0.50071 1.28983 0.605324 1.39444L5.21643 6L0.605324 10.6056C0.547167 10.6554 0.499934 10.7166 0.466587 10.7856C0.433241 10.8545 0.414502 10.9296 0.411547 11.0061C0.408592 11.0826 0.421483 11.1589 0.449414 11.2302C0.477344 11.3015 0.51971 11.3662 0.573851 11.4204C0.627993 11.4745 0.692741 11.5169 0.764033 11.5448C0.835325 11.5727 0.91162 11.5856 0.988131 11.5827C1.06464 11.5797 1.13972 11.561 1.20864 11.5276C1.27757 11.4943 1.33885 11.447 1.38866 11.3889L5.99977 6.78333L10.6053 11.3889C10.7116 11.4799 10.8483 11.5275 10.9881 11.5221C11.128 11.5167 11.2606 11.4587 11.3595 11.3598C11.4585 11.2608 11.5164 11.1282 11.5218 10.9884C11.5272 10.8485 11.4797 10.7118 11.3887 10.6056L6.7831 6Z" fill="#CCCCCC"/>
  </svg>
  `
  modalMain.append(modalClose, modalText);
  modal.append(modalMain);
  document.body.append(modal);

  modal.addEventListener("click", ({ target }) => {
    if (target === modal || target.closest(".modal__close")) {
      modal.remove();
      resetGame();
    }
  })
}



let currentRound = 1;
let sequence = [];

function generateSequence(length) {
    const digits = [ "0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
    const newSequence = [];
    for (let i = 0; i < length; i++) {
        newSequence.push(digits[Math.floor(Math.random() * digits.length)]);
    }
    console.log(newSequence);
    return newSequence;
}


function startRound() {
    sequence = generateSequence(currentRound * 2); // Generate sequence for current round
    highlightSequence(sequence);
}

function highlightSequence(sequence) {
    let i = 0;
    const highlightInterval = setInterval(() => {
        if (i < sequence.length) {
            const digitButton = document.querySelector(`.key[data="${sequence[i]}"]`);
            digitButton.classList.add('highlight');
            setTimeout(() => {
                digitButton.classList.remove('highlight');
            }, 1000); // Adjust highlight duration as needed
            i++;
        } else {
            clearInterval(highlightInterval);
            getPlayerInput();
        }
    }, 1000); // Adjust interval between highlights
}


function getPlayerInput() {
  let playerInput = [];
  const keyButtons = document.querySelectorAll('.key');

  // Function to handle button clicks
  function handleClick(event) {
      playerInput.push(event.target.getAttribute('data'));
      if (playerInput.length === sequence.length) {
          // Remove event listeners after input is complete
          keyButtons.forEach(button => {
              button.removeEventListener('click', handleClick);
          });
          checkAnswer(playerInput);
      }
  }

  // Add event listeners
  keyButtons.forEach(button => {
      button.addEventListener('click', handleClick);
  });
}

function checkAnswer(playerInput) {
    const roundDiv = rounds.children[currentRound - 1];

    if (playerInput.join('') === sequence.join('')) {
        roundDiv.style.backgroundColor = 'green';
        currentRound++;
        if (currentRound <= 5) {
            startRound();
        } else {
          openModal();
        }
    } else {
        roundDiv.style.backgroundColor = 'red';
        repeatButton.addEventListener('click', () => {
          startRound(); // Restart the current round
        })
    }
}

startButton.addEventListener('click', () => {
    startRound();
    easy.style.display = '1';
    medium.style.display = '0';
    startButton.style.display = 'none';
    repeatButton.style.display = 'block';
    newGameButton.style.display = 'block';
});



function resetGame() {
  currentRound = 1;
  sequence = [];

  // Reset round backgrounds
  for (let i = 0; i < rounds.children.length; i++) {
      rounds.children[i].style.backgroundColor = ''; // Or set to your default color
  }

      // Clear player input (if stored globally)
      //playerInput = [];

      // Optionally: Hide the game elements and show the start button again
      // startButton.style.display = 'block';
      // easy.style.display = 'none';
      // medium.style.display = 'none';
      // ... other game elements
}

newGameButton.addEventListener('click', () => {
  resetGame();
  startButton.style.display = 'block';
  repeatButton.style.display = 'none';
  newGameButton.style.display = 'none';
});