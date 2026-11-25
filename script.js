// Filter menu cards by category
function filterMenu(category, clickedButton) {
  var cards = document.querySelectorAll(".menu-card");
  var buttons = document.querySelectorAll(".filter-btn");

  // Update active button style
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  clickedButton.classList.add("active");

  // Show or hide menu items
  for (var j = 0; j < cards.length; j++) {
    var itemCategory = cards[j].getAttribute("data-category");
    if (category === "all" || itemCategory === category) {
      cards[j].style.display = "block";
    } else {
      cards[j].style.display = "none";
    }
  }
}

// Show a random baker's note when the button is clicked
var bakerNotes = [
  "Today's Baker Note: Ask at the counter for warm cinnamon rolls after 9 AM!",
  "Baker Tip: Our country sourdough stays fresh for 3 days in a paper bag.",
  "Weekend Special: Buy 3 cupcakes and get 1 honey milk bun free!",
  "Fresh Brew: Pair any pastry with a hot cup of jasmine green tea."
];

var noteIndex = 0;

function showRandomTip() {
  noteIndex = (noteIndex + 1) % bakerNotes.length;
  document.getElementById("special-text").textContent = bakerNotes[noteIndex];
}

// Handle contact form submission without reloading the page
var contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value.trim();
  var statusText = document.getElementById("formMessage");

  if (name === "") {
    statusText.style.color = "#b85266";
    statusText.textContent = "Please enter your name before sending.";
    return;
  }

  statusText.style.color = "#2e7d32";
  statusText.textContent = "Thank you, " + name + "! We received your message and will reply soon.";
  contactForm.reset();
});
