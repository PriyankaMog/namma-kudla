// BACKGROUND SLIDER
var hero = document.getElementById("heroSection");

var images = [
  "https://i.ytimg.com/vi/Zb1uRfRDFW0/maxresdefault.jpg",
  "https://stylesatlife.com/wp-content/uploads/2018/02/Pilikula-Nisargadhama-Mangalore-Zoological-Park.jpg",
  "https://1.bp.blogspot.com/-6ShVUrL0zdk/UUnxKRsuqmI/AAAAAAAAANQ/DWNBiGffDXg/s1600/Kateel-Temple-2.jpg",
  "https://cdn.aroundmangalore.com/wp-content/uploads/2014/01/stmaryisland.png"
];

let index = 0;
hero.style.backgroundImage = "url('" + images[index] + "')";

setInterval(function() {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = "url('" + images[index] + "')";
}, 5000);

// NEWSLETTER
function subscribe(){
  var email = document.getElementById("newsEmail").value;
  if(email === ""){
    alert("Please enter your email.");
  } else {
    alert("Subscribed Successfully!");
  }
}

// SCROLL TO TOP
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 200 ? "block" : "none";
});

function scrollToTop() {
  window.scrollTo({top: 0, behavior: "smooth"});
}