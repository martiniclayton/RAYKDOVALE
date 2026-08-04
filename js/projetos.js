const projetos = [
    {imgProjeto: "img/card-projetos/image.png", nomeProjeto: "Projeto 1", localProjeto: "Cidade-Estado"},
    {imgProjeto: "img/card-projetos/image.png", nomeProjeto: "Projeto 1", localProjeto: "Cidade-Estado"},
    {imgProjeto: "img/card-projetos/image.png", nomeProjeto: "Projeto 1", localProjeto: "Cidade-Estado"}
];


const containerCardsProjetos = document.getElementById("container-cards-projetos");

function atualizarTelaCardsProjetos(){
    containerCardsProjetos.innerHTML = "";

    projetos.forEach(projetos =>{
        containerCardsProjetos.innerHTML += `
            <div class="col-md-4">
                        <div class="card-projetos">
                            <div class="card-img-projetos">
                                <div class="overlay-card"></div>
                                <img src="${projetos.imgProjeto}" alt="">
                            </div>
                            <div class="desc-card-projetos">
                                <h2>${projetos.nomeProjeto}</h2>
                                <p>${projetos.localProjeto}</p>
                            </div>
                        </div>
                    </div>
        `
    })
}

atualizarTelaCardsProjetos()