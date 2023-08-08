function showMessage() {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    setTimeout(function() {
      modal.style.display = "none";
    }, 5000); // Change 3000 to the desired delay in milliseconds (e.g., 3000 = 3 seconds)
  }