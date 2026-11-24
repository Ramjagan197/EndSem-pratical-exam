function signup() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (email !== "" && password !== "") {
        localStorage.setItem("signupEmail", email);
        alert("Signup successful");
    } else {
        alert("Please enter email and password");
        return;
    }
}
