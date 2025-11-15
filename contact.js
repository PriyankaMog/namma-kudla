function sendMessage() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  if (name === "" || email === "" || subject === "" || message === "") {
    alert("Please fill out all fields!");
    return;
  }

  // Show success message
  var successMsg = document.getElementById("successMessage");
  successMsg.style.display = "block";

  // Clear form
  document.getElementById("contactForm").reset();

  // Hide message after 3 seconds
  setTimeout(function() {
    successMsg.style.display = "none";
  }, 3000);
}