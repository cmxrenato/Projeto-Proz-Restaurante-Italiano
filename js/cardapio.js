const cardapio = [
    {   
        logo: "../images/coracao-cheio.png",
        img: "../images/Pizza.png",
        titulo: "Pizza Margherita",
        subtitulo: "Assada em forno de lenha.",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "../images/coracao.png",
        img: "../images/Arancino.png",
        titulo: "Arancino",
        subtitulo: "Bolinhos de arroz <br>recheados e empanados",
        preco: "<span>R$</span> 45,00",
        estrelas: "⭐",
        nota: "4.9"
    },
    
    {   
        logo: "../images/coracao-cheio.png",
        img: "../images/Raviolli.png",
        titulo: "Ravioli",
        subtitulo: "Massa recheada <br> com diversos sabores",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "../images/coracao.png",
        img: "../images/lasanha.webp",
        titulo: "Lasanha",
        subtitulo: "Como é feita na Itália",
        preco: "<span>R$</span> 45,00",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "../images/coracao.png",
        img: "../images/nhoque.jpeg",
        titulo: "Nhoque",
        subtitulo: "Bolinhos de Batata <br> com um molho delicioso",
        preco: "<span>R$</span> 50,00",
        estrelas: "⭐",
        nota: "4.9"
    },
    {   
        logo: "../images/coracao-cheio.png",
        img: "../images/macarronada.webp",
        titulo: "Macarronada Tutti Nostri",
        subtitulo: "Macarronada da casa <br> com um segredo especial",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "4.9"
    }
   
];

for (let i = 0; i < cardapio.length; i++) {
    let div = document.createElement('div');
    let section = document.querySelector('.pratos-cardapio');
    div.className = "card-prato";
    div.innerHTML = `
        <div id="coracao"><img src="${cardapio[i].logo}"></div>
        <div id="imagem">
            <img src="${cardapio[i].img}" id="pratos" alt="Imagem de ${cardapio[i].titulo}">
        </div>
        <div class = "prato-e-descricao">    
            <p class = "titulo-prato">${cardapio[i].titulo}</p>
            <p class = "subtitulo-prato">${cardapio[i].subtitulo}</p>
        </div>
        <div id="preco-estrela">
            <p>${cardapio[i].preco}</p>
            <div>
                <p id="nota">${cardapio[i].estrelas}&nbsp;${cardapio[i].nota}</p>
            </div>
        </div>
    `;
    section.appendChild(div);
}