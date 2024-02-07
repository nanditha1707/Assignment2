//for the game1 page
const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'Paris', 'Madrid', 'Rome'],
    correctAnswer: 'Paris',
    answered: false
  },
  {
    question: 'How many full time courses does NP have',
    options: ['37', '41', '32', '45'],
    correctAnswer: 'Mars',
    answered: false
  },
  {
    question: 'What is the largest mammal in the world?',
    options: ['Elephant', 'Giraffe', 'Blue Whale', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
    answered: false
  },
  {
    question: 'Which year did NP open their doors?',
    options: ['1963', '1967', '1961', '1965'],
    correctAnswer: '1963',
    answered: false
  },
  {
    question: 'How many Schools does NP have?',
    options: ['10', '6', '8', '9'],
    correctAnswer: '8',
    answered: false
  }
<<<<<<< HEAD

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
      // Check if all questions have been answered
    if (currentQuestionIndex === questions.length - 1) {
      window.location.href = 'results.html'; // Redirect to results.html
    } else {
      alert('Quiz completed!');
    }
  }
}

  loadQuestion();

// to handle the game
// to display player's name
function displayPlayerName() {
  const playerName = localStorage.getItem('playerName');
  document.getElementById('playerName').textContent = playerName;
}

/*for the game2 page
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
=======
>>>>>>> 4d7b10cfcfe934c4590fe968e70e28d454c9be69
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
   
    button.disabled = true;
  
    nextButton.disabled = false;
  });
  optionsContainer.appendChild(button);
});


nextButton.disabled = true;
}

function checkAnswer(selectedIndex) {
const currentQuestion = questions[currentQuestionIndex];

if (currentQuestion.options[selectedIndex] === currentQuestion.correctAnswer) {
  score++;
  currentQuestion.answered = true; 
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
  resultContainer.textContent = `Correct! Your current score is ${score}/${10}.`;
} else if (isCorrect && currentQuestionIndex === questions.length - 1) {
  resultContainer.textContent = `Quiz completed! Your final score is ${score}/${questions.length}.`;
} else {
  resultContainer.textContent = `Wrong! Your current score is ${score}/${10}.`;
}

<<<<<<< HEAD
createBoard();
*/
=======

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


function initializeQuiz() {

questions.forEach(question => {
  question.answered = false;
});

currentQuestionIndex = 0;
score = 0;
loadQuestion();
}

initializeQuiz();
>>>>>>> 4d7b10cfcfe934c4590fe968e70e28d454c9be69
