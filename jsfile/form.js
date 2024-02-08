var modal = document.getElementById("myModal");

// When the user clicks on "Play Game 1", open the modal
document.querySelector('.game-page-container').addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default behavior of the link
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
    const APIKEY = "65c35861c34784038c187758";
    // Form submission
    var gameForm = document.getElementById('gameForm');
    if (gameForm) {
        gameForm.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default form submission

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;

            let data = {
                name: name,
                email: email
            };

            let settings = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-apikey": "65c35861c34784038c187758", 
                    "Cache-Control": "no-cache"
                },
                body: JSON.stringify(data)
            };

            fetch("https://assignment2-3f92.restdb.io/rest/gameapi", settings)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.json();
                })
                .then(data => {
                    // If the POST request is successful, proceed to game1.html
                    window.location.href = "game1.html";
                })
                .catch(error => {
                    console.error('Form submission error:', error);
                    alert('Form submission error: ' + error.message);
                });
        });
    } else {
        console.log('Form not found');
    }
});
