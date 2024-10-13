const cardapio = [
    {   
        logo: "images/coracao-cheio.png",
        img: "images/Lasanha-a-bolonhesa-com-carne-moida.png",
        titulo: "Lasanha Bolonhesa",
        subtitulo: "Ingredientes de alta qualidade",
    },
    {
        logo: "images/coracao.png",
        img: "images/index/calzone.jpeg",
        titulo: "Calzone",
        subtitulo: "Assados <br> e bem recheado",
    
    },
    {   
        logo: "images/coracao.png",
        img: "images/index/pizza-italiana-tradicional-com-tomates-e-manjericao-em-alusao-a-historia-da-pizza.png",
        titulo: "Pizzas",
        subtitulo: "Assadas <br> forno a lenha",
    
    },
    {
        logo: "images/coracao-cheio.png",
        img: "images/PannaCotta.jpg",
        titulo: "Panna Cotta",
        subtitulo: "Legitma sobremesa Italiana",

    },
    {
        logo: "images/coracao.png",
        img: "images/nhoque.jpeg",
        titulo: "Nhoque",
        subtitulo: "Bolinhos de Batata <br> com um molho delicioso",
   
    },
    {   
        logo: "images/coracao.png",
        img: "images/macarronada.webp",
        titulo: "Macarronada Tutti Nostri",
        subtitulo: "Macarronada da casa <br> com um segredo especial",

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