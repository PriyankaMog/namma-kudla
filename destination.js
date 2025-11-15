// Highlight card effect
var cards = document.querySelectorAll(".place-card");
cards.forEach(function(card) {
    card.addEventListener("click", function() {
        this.style.background = "#e0f7ff";
        let temp = this;
        setTimeout(function() {
            temp.style.background = "#f5f5f5";
        }, 400);
    });
});

// Add to cart popup
var buttons = document.querySelectorAll(".add-to-cart");
var popup = document.getElementById("popup");

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        e.stopPropagation(); // Prevent card highlight
        var placeName = this.parentElement.querySelector("h2").innerText;
        popup.innerText = placeName + " added to cart!";
        popup.style.display = "block";
        setTimeout(function() {
            popup.style.display = "none";
        }, 1200);
    });
});