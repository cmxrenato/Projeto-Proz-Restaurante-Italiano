const cardapio = [
    {
        img: "/image/Pizza.png",
        titulo: "Prato 1",
        subtitulo: "Descrição do Prato 1",
        preco: "R$ 30,00",
        estrelas: "⭐⭐⭐⭐"
    },
    {
        img: "/image/Tiramisu.jpg",
        titulo: "Prato 2",
        subtitulo: "Descrição do Prato 2",
        preco: "R$ 45,00",
        estrelas: "⭐⭐⭐⭐⭐"
    },
    {
        img: "/image/Negroni.jpg",
        titulo: "Prato 3",
        subtitulo: "Descrição do Prato 3",
        preco: "R$ 50,00",
        estrelas: "⭐⭐⭐"
    },
    {
        img: "/image/Pizza.png",
        titulo: "Prato 1",
        subtitulo: "Descrição do Prato 1",
        preco: "R$ 30,00",
        estrelas: "⭐⭐⭐⭐"
    },
    {
        img: "/image/Tiramisu.jpg",
        titulo: "Prato 2",
        subtitulo: "Descrição do Prato 2",
        preco: "R$ 45,00",
        estrelas: "⭐⭐⭐⭐⭐"
    },
    {
        img: "/image/Negroni.jpg",
        titulo: "Prato 3",
        subtitulo: "Descrição do Prato 3",
        preco: "R$ 50,00",
        estrelas: "⭐⭐⭐"
    }
];

for (let i = 0; i < cardapio.length; i++) {
    let div = document.createElement('div');
    let section = document.querySelector('.pratos-cardapio');
    div.id = "card-prato";
    div.innerHTML = `
        <span id="coracao"><img src="/image/coracao.png" ></span>
        <div id="imagem">
            <img src="${cardapio[i].img}" id="pratos" alt="Imagem de ${cardapio[i].titulo}">
        </div>
        <div>    
            <p class = "titulo-prato">${cardapio[i].titulo}</p>
            <p class = "subtitulo-prato">${cardapio[i].subtitulo}</p>
        </div>
        <div id="preco-estrela">
            <p>${cardapio[i].preco}</p>
            <p>${cardapio[i].estrelas}</p>
        </div>
    `;
    section.appendChild(div);
}


