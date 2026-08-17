const projetos = [
    {
        imgProjeto: "assets/imagens/obras-andamento/iniciocasasamigosdobem.jpeg", 
        nomeProjeto: "Residências Sociais", 
        descricao: "Execução de fundação, alvenaria e infraestrutura para novas moradias sociais em parceria com a ONG Amigos do Bem.", 
        prazo: "Em andamento", 
        localProjeto: "Inajá, PE",
        categoria: "Residencial",
        icone: "house",
        status: "Em andamento"
    },
    {
        imgProjeto: "assets/imagens/obras-andamento/obra01galpao.jpeg", 
        nomeProjeto: "Construção de Galpão", 
        descricao: "Execução da fundação e estrutura inicial de um novo galpão, com foco em segurança, resistência e qualidade em cada etapa da obra.", 
        prazo: "Em andamento", 
        localProjeto: "Inajá, PE",
        categoria: "Comercial",
        icone: "building",
        status: "Em andamento"
    },
    {
        imgProjeto: "assets/imagens/obras-andamento/OBRABRADESCO.png", 
        nomeProjeto: "Reforma da Agência Bradesco", 
        descricao: "Execução da troca do forro de gesso e impermeabilização completa do telhado.", 
        prazo: "Em andamento", 
        localProjeto: "Buíque, PE",
        categoria: "Comercial",
        icone: "building",
        status: "Entregue"
    },
];

const projetosIndex = projetos.slice(0, 3);


const containerCardsProjetos = document.getElementById("container-cards-projetos");

function atualizarTelaCardsProjetos(){
    containerCardsProjetos.innerHTML = "";
    

    projetosIndex.forEach(projetos =>{
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

    // containerCardsProjetos.innerHTML += `
    //                     <div class="card-projetos" style="background-image: url(img/instagramBG2.png);">
    //                         <div class="conteudo-card">
    //                             <div class="header-card">
    //                                 <div>
    //                                     <i class="fa-brands fa-instagram fa-beat-fade"></i>
    //                                     <button class="btn-tipo-obra">@RAYKDOVALE</button>
    //                                 </div>
    //                                 <div>
    //                                     <span class="status">Siga-nos</span>
    //                                 </div>
    //                             </div>
    //                             <div class="tituloDescCard">
    //                                 <h1>Acompanhe Mais Obras no Instragram</h1>
    //                                 <p>Conheça outras obras, reformas e projetos executados pela Rayk do Vale Construtora em nosso Instagram.</p>
    //                             </div>
    //                             <div class="demaisDescs">
    //                                 <p><i class="fa-solid fa-calendar"></i>No prazo</p>
    //                                 <p><i class="fa-solid fa-location-dot"></i>Projetos em diversas regiões</p>
    //                                 <button>Ver perfil</button>
    //                             </div>
    //                         </div>
    //                     </div>
    //     `
}

atualizarTelaCardsProjetos()
