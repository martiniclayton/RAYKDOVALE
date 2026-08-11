const obras = [
    {imagem: "img/obra01galpao.jpeg", nome: "Construção de Galpão", local: "Inajá, PE", categoria: "Construção"},
    {imagem: "img/female-engineers-working.jpg", nome: "Residência Horizonte", local: "Residencial · Alphaville, SP", categoria: "Construção"},
    {imagem: "img/female-engineers-working.jpg", nome: "Residência Horizonte", local: "Residencial · Alphaville, SP", categoria: "Construção"},
    {imagem: "img/female-engineers-working.jpg", nome: "Residência Horizonte", local: "Residencial · Alphaville, SP", categoria: "Construção"},
    {imagem: "img/female-engineers-working.jpg", nome: "Residência Horizonte", local: "Residencial · Alphaville, SP", categoria: "Construção"},
]

const container = document.getElementById("container-obras");


function atualizarTela(){
    container.innerHTML = ``;

    obras.forEach((obra, index) =>{

        let classe = "col-md-4";

        if(index === 0){
            classe = "col-md-5"
        } else if(index === 1){
            classe = "col-md-7"
        };

        container.innerHTML += `
        <div class="${classe}">
            <div class="box-obra">
                <div class="img-box-obra">
                    <span class="categoria">${obra.categoria}</span>
                    <img src="${obra.imagem}" width="100%" alt="">
                </div>
                <div class="conteudo-box-obra"><h4>${obra.nome}</h4>
                <p>${obra.local}</p></div>
            </div>
        </div>
        `
    })
}

atualizarTela();