const cardapio = [
    {   
        logo: "images/coracao-cheio.png",
        img: "images/Pizza.png",
        titulo: "Pizza Margherita",
        subtitulo: "Assada em forno de lenha.<br>O nosso forno mais antigo",
        preco: "<span>R$</span> 69,99",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "images/coracao.png",
        img: "images/Arancino.png",
        titulo: "Arancino",
        subtitulo: "Bolinhos de arroz <br>recheados e empanados",
        preco: "<span>R$</span> 49,99",
        estrelas: "⭐",
        nota: "4.9"
    },
    {   
        logo: "images/coracao.png",
        img: "images/ravioli.jpeg",
        titulo: "Ravioli",
        subtitulo: "Massa recheada <br> com diversos sabores",
        preco: "<span>R$</span> 39,99",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "images/coracao-cheio.png",
        img: "images/lasanha.webp",
        titulo: "Lasanha",
        subtitulo: "Preparada à moda italiana, <br> com molho artesanal",
        preco: "<span>R$</span> 79,99",
        estrelas: "⭐",
        nota: "5.0"
    },
    {
        logo: "images/coracao.png",
        img: "images/nhoque.jpeg",
        titulo: "Nhoque",
        subtitulo: "Bolinhos de Batata <br> com um molho delicioso",
        preco: "<span>R$</span> 59,99",
        estrelas: "⭐",
        nota: "4.9"
    },
    {   
        logo: "images/coracao.png",
        img: "images/macarronada.webp",
        titulo: "Macarronada Tutti Nostri",
        subtitulo: "Macarronada da casa <br> com um segredo especial",
        preco: "<span>R$</span> 39,90",
        estrelas: "⭐",
        nota: "4.9"
    }
];

// Variáveis de controle para a página e número de pratos por página
let currentPage = 1;
const pratosPerPage = 3;
const totalPages = Math.ceil(cardapio.length / pratosPerPage);

// Função para exibir os pratos da página atual
function showPratos(page) {
    const section = document.querySelector('.pratos-cardapio');
    section.innerHTML = ''; // Limpa o conteúdo da seção
    const startIndex = (page - 1) * pratosPerPage;
    const endIndex = startIndex + pratosPerPage;
    const currentPratos = cardapio.slice(startIndex, endIndex);

    currentPratos.forEach(prato => {
        let div = document.createElement('div');
        div.className = "card-prato";
        div.innerHTML = `
            <div id="coracao"><img src="${prato.logo}" alt="Logo"></div>
            <div id="imagem">
                <img src="${prato.img}" id="pratos" alt="Imagem de ${prato.titulo}">
            </div>
            <div class="prato-e-descricao">    
                <p class="titulo-prato">${prato.titulo}</p>
                <p class="subtitulo-prato">${prato.subtitulo}</p>
            </div>
            <div id="preco-estrela">
                <p>${prato.preco}</p>
                <div>
                    <p id="nota">${prato.estrelas}&nbsp;${prato.nota}</p>
                </div>
            </div>
        `;
        section.appendChild(div);
    });
}

// Função para atualizar a navegação
function updatePagination() {
    document.querySelector('.prev').disabled = currentPage === 1;
    document.querySelector('.next').disabled = currentPage === totalPages;
}

// Adiciona eventos aos botões de navegação
document.querySelector('.prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPratos(currentPage);
        updatePagination();
    }
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showPratos(currentPage);
        updatePagination();
    }
});

// Exibe a primeira página de pratos ao carregar a página
showPratos(currentPage);
updatePagination();