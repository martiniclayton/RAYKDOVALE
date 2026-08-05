const projetos = [
    {
        imgProjeto: "img/female-engineers-working.jpg", 
        nomeProjeto: "Galpão Logístico", 
        descricao: "Adaptação de estrutura metálica, piso industrial e pátio de manobra.", 
        prazo: "6 meses", 
        localProjeto: "Catimbau — Buíque, PE",
        status: "Andamento"
    },
    {
        imgProjeto: "img/heavy-excavator-digging-day-light.jpg", 
        nomeProjeto: "Base ETE e Abrigo", 
        descricao: "Escavação, armação e concretagem de base em concreto armado para ETE.", 
        prazo: "45 dias", 
        localProjeto: "Guanumbi — Buíque, PE", 
        status: "Entregue"
    },
    {
        imgProjeto: "img/scene-construction-site-with-equipment.jpg", 
        nomeProjeto: "Residência Unifamiliar", 
        descricao: "Obra completa desde a fundação ao acabamento fino em porcelanato.", 
        prazo: "10 meses", 
        localProjeto: "Arcoverde, PE", 
        status: "Entregue"
    },
];


const containerCardsProjetos = document.getElementById("container-cards-projetos");

function atualizarTelaCardsProjetos(){
    containerCardsProjetos.innerHTML = "";

    projetos.forEach(projetos =>{
        containerCardsProjetos.innerHTML += `
                        <div class="card-projetos">
                            <div class="card-img-projetos">
                                <div class="overlay-card"></div>
                                <div id="status-obra">${projetos.status}</div>
                                <img src="${projetos.imgProjeto}" alt="">
                            </div>
                            <div class="desc-card-projetos">
                                <div class="tituloDescricao">
                                    <h2>${projetos.nomeProjeto}</h2>
                                    <p><strong>Descrição: </strong>${projetos.descricao}</p>
                                </div>
                                <div class="demaisdesc">
                                    <p><strong>Prazo: </strong>${projetos.prazo}</p>
                                    <p><strong>Local: </strong>${projetos.localProjeto}</p>
                                </div>
                            </div>
                        </div>
        `
    })
}

atualizarTelaCardsProjetos()