//for the Xplore page

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
    }
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