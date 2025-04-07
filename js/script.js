function incluirHTML(id, arquivo) {
    fetch(arquivo)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar ' + arquivo, error));
}

window.onload = function() {
    incluirHTML("header", "header.html");
    incluirHTML("navbar", "navbar.html");
    incluirHTML("footer", "footer.html");

    // Aguarde um pequeno tempo para evitar piscadas
    setTimeout(() => {
        document.body.style.display = "block";
    }, 200);
};