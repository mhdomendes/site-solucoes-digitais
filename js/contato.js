document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    let isValid = true;

    let nameInput = document.getElementById("inputName");
    let emailInput = document.getElementById("inputEmail");
    let phoneInput = document.getElementById("inputTel");
    let serviceSelect = document.getElementById("selectTipo");

    if (nameInput.value.trim().length < 3) {
        showError(nameInput, "O nome deve ter pelo menos 3 caracteres.");
        isValid = false;
    } else {
        clearError(nameInput);
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        showError(emailInput, "Digite um email válido.");
        isValid = false;
    } else {
        clearError(emailInput);
    }

    if (serviceSelect.value === "") {
        showError(serviceSelect, "Escolha uma opção.");
        isValid = false;
    } else {
        clearError(serviceSelect);
    }

    let phonePattern = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    if (!phonePattern.test(phoneInput.value)) {
        showError(phoneInput, "Digite um número válido no formato (99) 99999-9999.");
        isValid = false;
    } else {
        clearError(phoneInput);
    }

    if (isValid) {
        document.getElementById("successAlert").style.display = "block";
        this.reset();
        
        // Oculta o alerta após 6 segundos
        setTimeout(function() {
            document.getElementById("successAlert").style.display = "none";
        }, 6000);
    }
    
});

function showError(input, message) {
    clearError(input); // Limpa mensagens antigas

    let error = document.createElement("div");
    error.className = "text-danger small mt-1";
    error.innerText = message;
    input.classList.add("is-invalid");
    input.parentNode.appendChild(error);
}

function clearError(input) {
    input.classList.remove("is-invalid");
    let errorMessages = input.parentNode.querySelectorAll(".text-danger");
    errorMessages.forEach(msg => msg.remove());
}

document.getElementById("inputTel").addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, ""); // Remove tudo que não for número
    if (value.length > 10) {
        value = `(${value.slice(0,2)}) ${value.slice(2,7)}-${value.slice(7,11)}`;
    } else if (value.length > 6) {
        value = `(${value.slice(0,2)}) ${value.slice(2,6)}-${value.slice(6,10)}`;
    } else if (value.length > 2) {
        value = `(${value.slice(0,2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
        value = `(${value}`;
    }
    e.target.value = value;
});