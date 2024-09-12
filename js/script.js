const cardapio = [
    {   
        logo: "/image/coracao-cheio.png",
        img: "/image/Pizza.png",
        titulo: "Prato 1",
        subtitulo: "Descrição do Prato 1",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "4.9"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Tiramisu.jpg",
        titulo: "Prato 2",
        subtitulo: "Descrição do Prato 2",
        preco: "<span>R$</span> 45,00",
        estrelas: "⭐",
        nota: "4.6"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Negroni.jpg",
        titulo: "Prato 3",
        subtitulo: "Descrição do Prato 3",
        preco: "<span>R$</span> 50,00",
        estrelas: "⭐",
        nota: "4.5"
    },
    {   
        logo: "/image/coracao-cheio.png",
        img: "/image/Pizza.png",
        titulo: "Prato 1",
        subtitulo: "Descrição do Prato 1",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "4.9"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Tiramisu.jpg",
        titulo: "Prato 2",
        subtitulo: "Descrição do Prato 2",
        preco: "<span>R$</span> 45,00",
        estrelas: "⭐",
        nota: "4.6"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Negroni.jpg",
        titulo: "Prato 3",
        subtitulo: "Descrição do Prato 3",
        preco: "<span>R$</span> 50,00",
        estrelas: "⭐",
        nota: "4.5"
    },
    {   
        logo: "/image/coracao-cheio.png",
        img: "/image/Pizza.png",
        titulo: "Prato 1",
        subtitulo: "Descrição do Prato 1",
        preco: "<span>R$</span> 30,00",
        estrelas: "⭐",
        nota: "4.9"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Tiramisu.jpg",
        titulo: "Prato 2",
        subtitulo: "Descrição do Prato 2",
        preco: "<span>R$</span> 45,00",
        estrelas: "⭐",
        nota: "4.6"
    },
    {
        logo: "/image/coracao.png",
        img: "/image/Negroni.jpg",
        titulo: "Prato 3",
        subtitulo: "Descrição do Prato 3",
        preco: "<span>R$</span> 50,00",
        estrelas: "⭐",
        nota: "4.5"
    }
];

for (let i = 0; i < cardapio.length; i++) {
    let div = document.createElement('div');
    let section = document.querySelector('.pratos-cardapio');
    div.className = "card-prato";
    div.innerHTML = `
        <span id="coracao"><img src="${cardapio[i].logo}"></span>
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


