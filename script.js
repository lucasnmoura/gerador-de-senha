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

    //  Atualizar o valor do slider quando o usuário arrasta o controle deslizante ( escolher o tamanho da senha)
    const slider = document.getElementById("slider");
    const valueSpan = document.getElementById("valor");
    slider.addEventListener("input", function () {
        valueSpan.textContent = this.value;
    });

    //  Gerer a senha quando o botão é clicado e exibir a senha gerada ( Gerar sua senha )
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
