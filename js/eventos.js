document.querySelector('#filtro-dia').addEventListener('change', function() {
    const diaSelecionado = this.value;
    const eventosFiltrados = eventosData.filter(evento => diaSelecionado === 'todos' || evento.dia === diaSelecionado);

    renderizarEventos(eventosFiltrados);
});

function atualizarContagemRegressiva(dataEvento) {
    const agora = new Date();
    const tempoRestante = dataEvento - agora;

    if (tempoRestante > 0) {
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        document.getElementById('contador').innerText = `Próximo evento em: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
        document.getElementById('contador').innerText = 'O próximo evento já começou!';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const eventosContainer = document.querySelector('.bloco-eventos');
    const filtroDia = document.querySelector('#filtro-dia');
    const contadorEventos = document.querySelector('#contador-eventos');

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

    // Função para renderizar eventos
    function renderizarEventos(filtro = 'todos') {
        eventosContainer.innerHTML = ''; // Limpa o container
    
        let eventosFiltrados = eventosData; // Por padrão, mostra todos os eventos
    
        // Aplica filtro se não for "todos"
        if (filtro !== 'todos') {
            eventosFiltrados = eventosData.filter(evento => evento.dia === filtro);
        }
    
        // Renderiza os eventos filtrados
        eventosFiltrados.forEach(evento => {
            const divEvento = document.createElement('div');
            divEvento.className = 'evento';
            divEvento.innerHTML = `
                <h3 class="dia">${evento.dia}</h3>
                <img src="${evento.imagem}" alt="${evento.titulo}" class="imagem-evento">
                <h4 class="titulo-evento">${evento.titulo}</h4>
                <p class="descricao-evento">${evento.descricao}</p>
            `;
            eventosContainer.appendChild(divEvento);
    
            const linhaDecorativa = document.createElement('img');
            linhaDecorativa.src = 'images/linha1.svg'; 
            linhaDecorativa.alt = 'Linha decorativa';
            linhaDecorativa.className = 'linha-decorativa';
            eventosContainer.appendChild(linhaDecorativa);
        });
    }

    // Evento de mudança no filtro
    filtroDia.addEventListener('change', function() {
        renderizarEventos(filtroDia.value);
    });

    // Renderiza todos os eventos ao carregar a página
    renderizarEventos();
});

// Contagem regressiva
function atualizarContagemRegressiva(dataEvento) {
    const agora = new Date();
    const tempoRestante = dataEvento - agora;

    if (tempoRestante > 0) {
        const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

        document.getElementById('contador').innerText = `Próximo evento em: ${dias}d ${horas}h ${minutos}m ${segundos}s`;
    } else {
        document.getElementById('contador').innerText = 'O próximo evento já começou!';
    }
}

const proximoEventoData = new Date('2024-10-18T19:00:00'); // Exemplo de data para o próximo evento
setInterval(() => atualizarContagemRegressiva(proximoEventoData), 1000);