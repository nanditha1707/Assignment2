//for the game1 page
const questions = [
    {
      question: 'How many canteens are there in NP',
      options: ['2', '1', '3', '4'],
      correctAnswer: '3'
    },
    {
      question: 'How many full time courses does NP have?',
      options: ['35', '41', '39', '45'],
      correctAnswer: '41'
    },
    {
      question: 'Out of the 5 Polytechnics which order place was NP built',
      options: ['1st', '2nd', '3rd', '4th'],
      correctAnswer: '2nd'
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
  // Check if all questions have been answered
  if (currentQuestionIndex === questions.length - 1) {
    window.location.href = 'results.html'; // Redirect to results.html
  } else {
    alert('Quiz completed!');
  }
}
}    

 loadQuestion();



