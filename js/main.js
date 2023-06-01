const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

function checkPasswordValidity(input1, input2) {
    return (input1.value === input2.value);
}

const PasswordNotMatchingMessage = document.createElement("div");
PasswordNotMatchingMessage.textContent = "*Passwords do not match";
PasswordNotMatchingMessage.style = "color: red; font-size: 1.1rem; font-weight: 400";



confirmPasswordInput.addEventListener("input", (event) => {
    if (checkPasswordValidity(passwordInput, confirmPasswordInput)) {
        passwordInput.className = "";
        confirmPasswordInput.className = "";
        passwordInput.parentElement.removeChild(PasswordNotMatchingMessage);
    } else {
        passwordInput.className = "error";
        confirmPasswordInput.className = "error";
        passwordInput.parentElement.appendChild(PasswordNotMatchingMessage);
    }
})