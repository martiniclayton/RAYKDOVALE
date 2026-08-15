document.addEventListener("DOMContentLoaded", function () {
    function LoadComponent(id, file) {
        const elemento = document.getElementById(id);

        if (elemento) {
            fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro ao carregar ${file}: ${response.status} (${response.statusText})`);
                    }
                    return response.text();
                })
                .then(data => {
                    elemento.innerHTML = data;
                    console.log(`Componente ${file} carregado com sucesso!`);
                    inicializarHeader();
                })
                .catch(error => console.error("Falha no fetch:", error));
        } else {
            console.warn(`Elemento com ID "${id}" não foi encontrado na página.`);
        }
    }

    LoadComponent("header-container", "assets/components/header.html");
    LoadComponent("footer-container", "assets/components/footer.html");
});
