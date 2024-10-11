document.addEventListener('DOMContentLoaded', function() {
    const cartoesContainer = document.getElementById('cartoes');
  
    cartoesContainer.innerHTML = '';
  
    const cartoesData = [
      {
        imgSrc: 'images/valorflexivel.png',
        title: 'Valor flexível',
        description: 'Presenteie com liberdade de escolha. Válido para qualquer refeição',
      },
      {
        imgSrc: 'images/menudegustacao.png',
        title: 'Menu Degustação',
        description: 'Proporcione uma experiência gastronômica com o nosso menu degustação',
      },
      {
        imgSrc: 'images/jantarromantico.png',
        title: 'Jantar Romântico',
        description: 'Celebre o amor com um jantar completo para duas pessoas, numa noite repleta de sabores',
      },
      {
        imgSrc: 'images/experiencia.png',
        title: 'Experiência Gourmet',
        description: 'Ofereça uma refeição gourmet de três ou quatro pratos harmonizados',
      },
      {
        imgSrc: 'images/brunch.png',
        title: 'Brunch Especial',
        description: 'Presenteie com um brunch delicioso para duas pessoas, tornando o dia mais especial e agradável.',
      },
      {
        imgSrc: 'images/aniversario.png',
        title: 'Aniversário',
        description: 'Surpreenda alguém especial no aniversário com uma refeição inesquecível',
      },
    ];
  
   
    cartoesData.forEach(cartao => {
      const divCartao = document.createElement('div');
      divCartao.className = 'cartao';
  
      divCartao.innerHTML = `
        <img src="${cartao.imgSrc}" alt="${cartao.title}" class="cartao-imagem">
        <h3>${cartao.title}</h3>
        <p>${cartao.description}</p>
        <a href="#" class="explorar">Explorar &rarr;</a>
      `;
  
      cartoesContainer.appendChild(divCartao);
    });
  });
  