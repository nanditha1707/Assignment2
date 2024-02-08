document.addEventListener("DOMContentLoaded", function() {
    // Include your API key in the headers
    const apiKey = '65c35861c34784038c187758'; // Replace 'YOUR_API_KEY_HERE' with your actual API key
    const headers = {
        'Content-Type': 'application/json',
        'x-apikey': apiKey
    };

    // Fetch results from the RESTful API with the headers including the API key
    fetch('https://assignment2-3f92.restdb.io/rest/gameapi', {
        headers: headers
    })
    .then(response => response.json())
    .then(data => {
        // Process the retrieved data and populate the table with results
        const resultsBody = document.getElementById('results-body');
        data.forEach(user => {
            const { name, email, score } = user;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${score}</td>
            `;
            resultsBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error fetching results from the API:', error));
});

