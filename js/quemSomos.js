const cards = [
    {numero: "30+", descrição: "Anos de experiência"},
    {numero: 52, descrição: "Projetos entregues"},
    {numero: "15.000 m²", descrição: "Área Construída"},
    {numero: "100%", descrição: "Prazos Cumpridos"}
]

const container = document.getElementById("container-cards-quemSomos");

function atualizarCardsQuemSomos(){
    container.innerHTML = "";

    const html = 

    cards.map(card =>
        `
        <div class="card-quem-somos">
            <h3>${card.numero}</h3>
            <p>${card.descrição}</p>
        </div>
        `
    ).join("");

    container.innerHTML = html;
}

atualizarCardsQuemSomos()