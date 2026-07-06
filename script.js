// Show welcome message when page loads
window.onload = function () {
    alert("🌿 Welcome to Green India! Together we can make India greener.");
};

// Join button click
const joinBtn = document.querySelector(".btn");

if (joinBtn) {
    joinBtn.addEventListener("click", function (event) {
        event.preventDefault();
        alert("✅ Thank you for joining the Green India Campaign!");
    });
}

// Card hover effect
const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("mouseenter", function () {
        this.style.boxShadow = "0 10px 20px rgba(0,0,0,0.3)";
    });

    card.addEventListener("mouseleave", function () {
        this.style.boxShadow = "0 5px 10px rgba(0,0,0,0.15)";
    });
});

// Display current year in footer (if an element with id="year" exists)
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Thank volunteer button (if present)
const volunteerBtn = document.getElementById("volunteerBtn");

if (volunteerBtn) {
    volunteerBtn.addEventListener("click", function () {
        alert("🌱 Thank you for volunteering! Together we will build a greener India.");
    });
}