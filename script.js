function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

function login() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    if (user === "admin" && pass === "admin123") {
        document.getElementById("journal-section").classList.remove("hidden");
        document.getElementById("login-section").classList.add("hidden");
    } else {
        alert("Invalid credentials.");
    }
}

window.onload = function () {
    setTimeout(() => {
        document.getElementById("popup").style.display = "block";
    }, 1500);
};

function closePopup() {
    document.getElementById("popup").style.display = "none";
}