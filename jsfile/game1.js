//for the game1 page
const questions = [
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'Which year did NP open their doors?',
      options: ['1963', '1967', '1961', '1965'],
      correctAnswer: '1963'
    },
    {
      question: 'How many Schools does NP have?',
      options: ['10', '6', '8', '9'],
      correctAnswer: '8'
    },
    {
      question: 'What is the capital of France?',
      options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
      correctAnswer: 'Paris'
    },
    {
      question: 'Which planet is known as the Red Planet?',
      options: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
      correctAnswer: 'Mars'
    },
    {
      question: 'What is the largest mammal in the world?',
      options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
      correctAnswer: 'Blue Whale'
    },
    {
      question: 'Which year did NP open their doors?',
      options: ['1963', '1967', '1961', '1965'],
      correctAnswer: '1963'
    },
    {
      question: 'How many Schools does NP have?',
      options: ['10', '6', '8', '9'],
      correctAnswer: '8'
    },
    
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const nextButton = document.getElementById('nextButton');

    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.className = 'option';
      button.addEventListener('click', () => {
        checkAnswer(index);
        // Enable the button after an option is selected
        nextButton.disabled = false;
      });
      optionsContainer.appendChild(button);
    });

    // Disable the button initially
    nextButton.disabled = true;
  }

  function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
      score++;
    } else {
      showResult(false);
      return;
    }

    showResult(true);
  }

  function showResult(isCorrect) {
    const resultContainer = document.getElementById('result');
    const nextButton = document.getElementById('nextButton');

    if (isCorrect && currentQuestionIndex !== questions.length - 1) {
      resultContainer.textContent = `Correct! Your current score is ${score}/${5}.`;
    } else if (isCorrect && currentQuestionIndex === questions.length - 1) {
      resultContainer.textContent = `Quiz completed! Your final score is ${score}/${questions.length}.`;
    } else {
      resultContainer.textContent = `Wrong! Your current score is ${score}/${5}.`;
    }

    // Disable the button after showing the result
    nextButton.disabled = true;
  }

  function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      loadQuestion();
    } else {
      alert('Quiz completed!');
    }
  }

  loadQuestion();


//for the game2 page
const cardsArray = [
  { type: 'image', content: 'image1.jpg' },
  { type: 'text', content: 'Text 1' },
  { type: 'image', content: 'image2.jpg' },
  { type: 'text', content: 'Text 2' },
  { type: 'image', content: 'image3.jpg' },
  { type: 'text', content: 'Text 3' },
  { type: 'image', content: 'image4.jpg' },
  { type: 'text', content: 'Text 4' },
  { type: 'image', content: 'image1.jpg' },
  { type: 'text', content: 'Text 1' },
  { type: 'image', content: 'image2.jpg' },
  { type: 'text', content: 'Text 2' },
  { type: 'image', content: 'image3.jpg' },
  { type: 'text', content: 'Text 3' },
  { type: 'image', content: 'image4.jpg' },
  { type: 'text', content: 'Text 4' }
];

let chosenType = null;
let cardsChosen = [];
let cardsChosenId = [];
let cardsWon = [];

function createBoard() {
  const grid = document.querySelector('.grid');
  grid.innerHTML = ''; // Clear existing cards
  cardsArray.sort(() => 0.5 - Math.random()); // Shuffle cards
  for (let i = 0; i < cardsArray.length; i++) {
    if (cardsArray[i].type === chosenType || chosenType === null) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('data-id', i);
      card.setAttribute('data-type', cardsArray[i].type);
      card.addEventListener('click', flipCard);
      if (cardsArray[i].type === 'image') {
        const img = document.createElement('img');
        img.src = cardsArray[i].content;
        card.appendChild(img);
      } else {
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = cardsArray[i].content;
        card.appendChild(content);
      }
      grid.appendChild(card);
    }
  }
}

function chooseType(type) {
  chosenType = type;
  createBoard();
}

function checkForMatch() {
  const cards = document.querySelectorAll('.card');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0].content === cardsChosen[1].content && cardsChosen[0].type !== cardsChosen[1].type) {
    cards[optionOneId].style.backgroundColor = '#FFF';
    cards[optionTwoId].style.backgroundColor = '#FFF';
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].classList.remove('flipped');
    cards[optionTwoId].classList.remove('flipped');
  }
  cardsChosen = [];
  cardsChosenId = [];
  if (cardsWon.length === cardsArray.length / 2) {
    alert('Congratulations! You found all matches!');
  }
}

function flipCard() {
  const cardId = this.getAttribute('data-id');
  const card = cardsArray[cardId];
  cardsChosen.push(card);
  cardsChosenId.push(cardId);
  this.classList.add('flipped');
  if (cardsChosen.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

createBoard();
