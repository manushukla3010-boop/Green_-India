// Welcome message
window.addEventListener("load", () => {
    console.log("Welcome to Green India!");
});

// 🌳 Tree Counter
let treeCount = 0;

const treeCountDisplay = document.getElementById("treeCount");
const plantTreeBtn = document.getElementById("plantTreeBtn");

if (plantTreeBtn && treeCountDisplay) {
    plantTreeBtn.addEventListener("click", () => {
        treeCount++;
        treeCountDisplay.textContent = treeCount;
        alert("🌱 Thank you! You planted a virtual tree.");
    });
}

// 🌙 Dark Mode
const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

// 📝 Volunteer Form Validation
const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
    volunteerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();

        if (name === "" || email === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert(`Thank you, ${name}! You have successfully registered as a volunteer.`);
        volunteerForm.reset();
    });
}

// 📅 Footer Year
const year = document.getElementById("year");
if (year) {
    year.textContent = new Date().getFullYear();
}

{
    function joinNow() {
    alert("🌱 Thank you for joining the Green India Campaign!");

    // Redirect to registration page (optional)
    // window.location.href = "register.html";
}
}
