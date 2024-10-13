document.addEventListener('DOMContentLoaded', function() {
    const eventosContainer = document.querySelector('.bloco-eventos');

    // Array de eventos
    const eventosData = [
        {
            dia: 'Sexta',
            imagem: 'images/Arancino.png',
            titulo: "Sagra dell'Arancino",
            descricao: "Venha se deliciar na famosa Festa do Arancino e saborear o prato que sem dúvidas está no coração italiano."
        },
        {
            dia: 'Sábado',
            imagem: 'images/Pizza.png',
            titulo: 'Serata delle pizze',
            descricao: 'Na Noite da Pizza, prepare-se para uma experiência inesquecível! Delicie-se com uma seleção de sabores únicos.'
        },
        {
            dia: 'Domingo',
            imagem: 'images/Raviolli.png',
            titulo: 'Cena speciale a base di ravioli',
            descricao: 'O Jantar Especial de Ravioli promete qualidade junto com a excelência italiana, proporcionando prazer gastronômico.'
        }
    ];

    // Limpa o contêiner
    eventosContainer.innerHTML = '';

    // Renderização
    eventosData.forEach(evento => {
        const divEvento = document.createElement('div');
        divEvento.className = 'evento';

        divEvento.innerHTML = `
            <h3 class="dia">${evento.dia}</h3>
            <img src="${evento.imagem}" alt="${evento.titulo}" class="imagem-evento">
            <h4 class="titulo-evento">${evento.titulo}</h4>
            <p class="descricao-evento">${evento.descricao}</p>
        `;

        eventosContainer.appendChild(divEvento);

        // linha decorativa
        const linhaDecorativa = document.createElement('img');
        linhaDecorativa.src = 'images/linha1.svg'; 
        linhaDecorativa.alt = 'Linha decorativa';
        linhaDecorativa.className = 'linha-decorativa';
        eventosContainer.appendChild(linhaDecorativa);
    });
});
