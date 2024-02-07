//for the game2 page
const cardsArray = ['BA', 'DE', 'SOE', 'FMS', 'HS', 'HMS', 'ICT', 'LSCT','BA', 'DE', 'SOE', 'FMS', 'HS', 'HMS', 'ICT', 'LSCT' ];
 const colors = ['#c54d51', '#7c9857', '#65a7ca', '#943887', '#4e824f', '#e2a856', '#613386', '#d4754f',];

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let colorIndex = 0;

    // Map to hold custom messages for each card
    const cardMessages = {
      'BA': 'You matched A!',
      'DE': 'Wooow! You are B!',
      'SOE': 'Great job! You found C!',
      'FMS': 'Awesome! D is matched!',
      'HS': 'E is yours! Great match!',
      'HMS': 'F match! Fantastic!',
      'ICT': 'G is found! Good work!',
      'LSCT': 'You got H! Well done!'
    };

    function createBoard() {
      const grid = document.querySelector('.grid');
      cardsArray.sort(() => 0.5 - Math.random()); // Shuffle cards
      for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        grid.appendChild(card);
      }
    }

    function checkForMatch() {
      const cards = document.querySelectorAll('.card');
      const optionOneId = cardsChosenId[0];
      const optionTwoId = cardsChosenId[1];
      const cardOne = cardsChosen[0];
      const cardTwo = cardsChosen[1];
      
      if (cardOne === cardTwo) {
        cards[optionOneId].style.backgroundColor = colors[colorIndex];
        cards[optionTwoId].style.backgroundColor = colors[colorIndex];
        cardsWon.push(cardOne); // Update to push only one of the matched cards
        
        // Display custom message based on the card matched
        const message = cardMessages[cardOne];
        showMessage(message);
        colorIndex++; // Move to the next color
      } else {
        cards[optionOneId].textContent = '';
        cards[optionTwoId].textContent = '';
      }
      cardsChosen = [];
      cardsChosenId = [];
      if (cardsWon.length === cardsArray.length / 2) {
        showMessage('Congratulations! You found all matches!');
      }
    }

    function flipCard() {
      const cardId = this.getAttribute('data-id');
      cardsChosen.push(cardsArray[cardId]);
      cardsChosenId.push(cardId);
      this.textContent = cardsArray[cardId];
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }

    // Function to display message on the page
    function showMessage(message) {
      const messageContainer = document.getElementById('message');
      messageContainer.textContent = message;
      messageContainer.classList.add('show-message'); // Show the message
      // Hide the message after a short delay
      setTimeout(() => {
        messageContainer.classList.remove('show-message');
      }, 2000); // 2000 milliseconds = 2 seconds
    }

    createBoard();