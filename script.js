document.addEventListener("DOMContentLoaded", function () {
    // Function to generate a random password
    function generatePassword(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    }

    // Update password length display when slider value changes
    const slider = document.getElementById("slider");
    const valueSpan = document.getElementById("valor");
    slider.addEventListener("input", function () {
        valueSpan.textContent = this.value;
    });

    // Generate and display password when the button is clicked
    const generateButton = document.getElementById("button");
    const passwordContainer = document.getElementById("conteiner-password");
    const passwordSpan = document.getElementById("password");
    const tooltip = document.getElementById("tooltip");

    generateButton.addEventListener("click", function () {
        const passwordLength = slider.value;
        const generatedPassword = generatePassword(passwordLength);
        passwordSpan.textContent = generatedPassword;
        passwordContainer.classList.remove("hide");
    });

    // Copy password to clipboard when password is clicked
    passwordSpan.addEventListener("click", function () {
        const textArea = document.createElement("textarea");
        textArea.value = passwordSpan.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
        tooltip.textContent = "Senha copiada!";
        setTimeout(function () {
            tooltip.textContent = "Clique na sua senha gerada para copiar.";
        }, 2000);
    });
});
