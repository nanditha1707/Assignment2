function toggleDropdown() {
    var dropdown = document.getElementById("myDropdown");
    dropdown.style.display = (dropdown.style.display === "none" || dropdown.style.display === "") ? "block" : "none";
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
      var dropdown = document.getElementById("myDropdown");
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
      }
    }
  }
  