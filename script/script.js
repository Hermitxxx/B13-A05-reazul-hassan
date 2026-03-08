const singInBtn = document.getElementById("btn-signIn")
const username = "admin"
const password = "admin123"
// input fields
const userInput = document.getElementById("username");
const passInput = document.getElementById("password")

singInBtn.addEventListener("click", function () {
    if (userInput.value === username && passInput.value === password) {
        window.location.assign('./home.html')
    }
    else {
        alert("Wrong Username or Password")
    }
})