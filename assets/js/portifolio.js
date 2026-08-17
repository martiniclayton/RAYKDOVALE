const obras = [
    {imagem: "assets/imagens/portifolio copy/obraCasasInajá/WhatsApp Image 2026-08-12 at 20.19.45.jpeg", nome: "Residencias Sociais", local: "Inajá, PE", categoria: "Construção"},
    {imagem: "assets/imagens/portifolio copy/casaCatimbau/construcao.JPG", nome: "Casa", local: "Catimbau, PE", categoria: "Construção"},
    {imagem: "assets/imagens/portifolio copy/ReformaBancoBradesco/imgCardBradesco.png", nome: "Reforma Banco Bradesco", local: " Buique, PE", categoria: "Reforma"},
]

function filtrar(categoria){

    if(categoria === "Todos"){
        atualizarTela(obras);
        return;
    }
    const filtrado = obras.filter(cat => cat.categoria === categoria);

    atualizarTela(filtrado);
    return filtrado;
}

function filtragem(botao){

    const btns = document.querySelectorAll(".btn-fiiltro")

    btns.forEach(btn =>{
        btn.classList.remove("clicado")
    })
    botao.classList.add("clicado");

    filtrar(botao.value);
}



const containerPortifolio = document.getElementById("container-obras");


function atualizarTela(arrayObras){
    containerPortifolio.innerHTML = ``;

    if(arrayObras.length === 0){
        containerPortifolio.innerHTML = `
            <h2> Não possui obras dessa categoria.</h2>
        `
    }

    arrayObras.forEach((obra, index) =>{

        let classe = "col-md-4";

        if(index === 0){
            classe = "col-md-5"
        } else if(index === 1){
            classe = "col-md-7"
        };

        containerPortifolio.innerHTML += `
        <div class="${classe}">
            <div class="box-obra">
                <div class="img-box-obra">
                    <span class="categoria">${obra.categoria}</span>
                    <img src="${obra.imagem}" width="100%" alt="Obra realizada pela Rayk do Vale Construtora">
                </div>
                <div class="conteudo-box-obra"><h4>${obra.nome}</h4>
                <p>${obra.local}</p></div>
            </div>
        </div>
        `
    })
}

atualizarTela(obras);