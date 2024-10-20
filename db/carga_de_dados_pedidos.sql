-- Inserindo dados na tabela CATEGORIAS
INSERT INTO CATEGORIAS (nome) VALUES
('Massas'),
('Sobremesas'),
('Bebidas'),
('Entradas'),
('Pizzas'),
('Saladas');

-- Inserindo 30 pratos, com algumas sugestões do chef (sugestao_chef = TRUE)

INSERT INTO PRATOS (nome, descricao, preco, id_categoria, disponivel, sugestao_chef) VALUES
-- Categoria 1: Massas
('Spaghetti Carbonara', 'Massa tradicional italiana com bacon e molho carbonara', 25.00, 1, TRUE, TRUE),
('Lasanha de Carne', 'Camadas de massa intercaladas com carne moída e molho bolonhesa', 32.00, 1, TRUE, FALSE),
('Risotto de Cogumelos', 'Risotto cremoso com cogumelos e parmesão', 28.00, 1, TRUE, TRUE),
('Penne ao Molho Pesto', 'Massa penne com molho pesto de manjericão', 22.00, 1, TRUE, FALSE),
('Fettuccine Alfredo', 'Massa fettuccine com molho cremoso de queijo e manteiga', 26.00, 1, TRUE, TRUE),
('Gnocchi ao Sugo', 'Massa de batata servida com molho de tomate fresco', 24.00, 1, TRUE, FALSE),

-- Categoria 2: Sobremesas
('Tiramisu', 'Sobremesa italiana com camadas de mascarpone e café', 18.00, 2, TRUE, FALSE),
('Panna Cotta', 'Sobremesa italiana à base de creme de leite e frutas vermelhas', 16.00, 2, TRUE, TRUE),
('Torta de Limão', 'Torta de limão com base crocante e creme azedinho', 14.00, 2, TRUE, FALSE),
('Mousse de Chocolate', 'Mousse aerada de chocolate meio amargo', 12.00, 2, TRUE, TRUE),
('Pudim de Leite', 'Pudim clássico de leite condensado e caramelo', 10.00, 2, TRUE, FALSE),

-- Categoria 3: Bebidas
('Suco de Laranja', 'Suco de laranja natural', 8.00, 3, TRUE, FALSE),
('Coca-Cola', 'Refrigerante Coca-Cola lata', 6.00, 3, TRUE, FALSE),
('Água Mineral', 'Água mineral sem gás', 4.00, 3, TRUE, FALSE),
('Cerveja Artesanal', 'Cerveja artesanal da casa', 12.00, 3, TRUE, TRUE),
('Vinho Tinto', 'Taça de vinho tinto seco', 18.00, 3, TRUE, TRUE),

-- Categoria 4: Entradas
('Bruschetta', 'Pão italiano tostado com tomate, manjericão e azeite', 15.00, 4, TRUE, FALSE),
('Tábua de Frios', 'Seleção de queijos, presuntos e salames', 35.00, 4, TRUE, TRUE),
('Antepasto de Berinjela', 'Berinjela assada com pimentões e azeite', 12.00, 4, TRUE, FALSE),
('Caprese', 'Salada caprese com tomate, mussarela de búfala e manjericão', 18.00, 4, TRUE, TRUE),

-- Categoria 5: Pizzas
('Pizza Margherita', 'Molho de tomate, mussarela, manjericão e azeite', 28.00, 5, TRUE, TRUE),
('Pizza Calabresa', 'Molho de tomate, mussarela e calabresa', 30.00, 5, TRUE, FALSE),
('Pizza Quatro Queijos', 'Molho de tomate e mistura de quatro queijos', 35.00, 5, TRUE, TRUE),
('Pizza Portuguesa', 'Molho de tomate, mussarela, presunto, ovo e cebola', 32.00, 5, TRUE, FALSE),

-- Categoria 6: Saladas
('Salada Caesar', 'Alface, frango grelhado, croutons e molho Caesar', 20.00, 6, TRUE, FALSE),
('Salada Grega', 'Pepino, tomate, azeitonas e queijo feta', 22.00, 6, TRUE, TRUE),
('Salada de Quinoa', 'Quinoa, abacate, tomate e limão siciliano', 18.00, 6, TRUE, TRUE),
('Salada Caprese', 'Tomate, mussarela de búfala e manjericão', 18.00, 6, TRUE, FALSE),
('Salada Tropical', 'Frutas da estação, folhas verdes e molho de maracujá', 16.00, 6, TRUE, TRUE);



-- Inserindo dados na tabela CLIENTES
INSERT INTO CLIENTES (nome, telefone, email) VALUES 
('João Silva', '11999999999', 'joao.silva@email.com'),
('Maria Oliveira', '21988888888', 'maria.oliveira@email.com'),
('Carlos Pereira', '31977777777', 'carlos.pereira@email.com'),
('Ana Souza', '41966666666', 'ana.souza@email.com'),
('Lucas Fernandes', '51955555555', 'lucas.fernandes@email.com');

-- Inserindo dados na tabela PEDIDOS
INSERT INTO PEDIDOS (id_cliente, data_pedido, status_pedido, valor_total) VALUES 
(1, '2024-10-19 12:30', 'Pago', 75.50),
(2, '2024-10-19 13:00', 'Pago', 92.00),
(3, '2024-10-19 13:30', 'Pago', 130.00),
(4, '2024-10-19 14:00', 'Pago', 40.00),
(5, '2024-10-19 14:30', 'Pago', 65.00);

-- Inserindo dados na tabela ITENS_PEDIDO
INSERT INTO ITENS_PEDIDO (id_pedido, id_prato, quantidade, preco_unitario) VALUES 
-- Pedido 1
(1, 1, 1, 25.50),  -- Spaghetti Carbonara
(1, 7, 1, 5.00),   -- Refrigerante
(1, 4, 1, 18.00),  -- Tiramisu
-- Pedido 2
(2, 2, 1, 30.00),  -- Lasanha Bolonhesa
(2, 13, 1, 15.00), -- Salada Caesar
(2, 8, 1, 7.00),   -- Suco de Laranja
(2, 5, 1, 12.00),  -- Pudim de Leite
-- Pedido 3
(3, 10, 1, 50.00), -- Picanha Grelhada
(3, 3, 1, 28.00),  -- Penne ao Pesto
(3, 14, 1, 20.00), -- Salada Caprese
(3, 9, 1, 4.00),   -- Água com Gás
-- Pedido 4
(4, 16, 1, 40.00), -- Tábua de Frios
-- Pedido 5
(5, 11, 1, 35.00), -- Frango à Parmegiana
(5, 6, 1, 10.00),  -- Sorvete de Baunilha
(5, 17, 1, 22.00); -- Crostini de Cogumelos

-- Inserindo dados na tabela PAGAMENTOS
INSERT INTO PAGAMENTOS (id_pedido, data_pagamento, valor, metodo) VALUES 
(1, '2024-10-19', 75.50, 'Cartão'),
(2, '2024-10-19', 92.00, 'Pix'),
(3, '2024-10-19', 130.00, 'Dinheiro'),
(4, '2024-10-19', 40.00, 'Cartão'),
(5, '2024-10-19', 65.00, 'Cartão');
