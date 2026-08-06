const projetos = [
    {
        imgProjeto: "img/modern-city-construction-site.jpg", 
        nomeProjeto: "Galpão Logístico", 
        descricao: "Adaptação de estrutura metálica, piso industrial e pátio de manobra.", 
        prazo: "6 meses", 
        localProjeto: "Catimbau — Buíque, PE",
        categoria: "Comercial",
        icone: "building",
        status: "Em andamento"
    },
    {
        imgProjeto: "img/heavy-excavator-digging-day-light.jpg", 
        nomeProjeto: "Base ETE e Abrigo", 
        descricao: "Escavação, armação e concretagem de base em concreto armado para ETE.", 
        prazo: "45 dias", 
        localProjeto: "Guanumbi — Buíque, PE", 
        categoria: "Comercial",
        icone: "building",
        status: "Entregue"
    },
    {
        imgProjeto: "img/scene-construction-site-with-equipment.jpg", 
        nomeProjeto: "Residência Unifamiliar", 
        descricao: "Obra completa desde a fundação ao acabamento fino em porcelanato.", 
        prazo: "10 meses", 
        localProjeto: "Arcoverde, PE", 
        categoria: "Residencial",
        icone: "house",
        status: "Entregue"
    },
];


const containerCardsProjetos = document.getElementById("container-cards-projetos");

function atualizarTelaCardsProjetos(){
    containerCardsProjetos.innerHTML = "";

    projetos.forEach(projetos =>{
        containerCardsProjetos.innerHTML += `
                        <div class="card-projetos" style="background-image: url(${projetos.imgProjeto});">
                            <div class="conteudo-card">
                                <div class="header-card">
                                    <div>
                                        <i class="fa-solid fa-${projetos.icone}"></i>
                                        <button class="btn-tipo-obra">${projetos.categoria}</button>
                                    </div>
                                    <div>
                                        <span class="status">${projetos.status}</span>
                                    </div>
                                </div>
                                <div class="tituloDescCard">
                                    <h1>${projetos.nomeProjeto}</h1>
                                    <p><strong>Descricao: </strong> ${projetos.descricao}</p>
                                </div>
                                <div class="demaisDescs">
                                    <p><i class="fa-solid fa-calendar"></i>${projetos.prazo}</p>
                                    <p><i class="fa-solid fa-location-dot"></i>${projetos.localProjeto}</p>
                                    <button>Veja detalhes</button>
                                </div>
                            </div>
                        </div>
        `
    })
}

atualizarTelaCardsProjetos()
