-- Inserindo dados na tabela CATEGORIAS
INSERT INTO CATEGORIAS (nome) VALUES 
('Massas'),
('Sobremesas'),
('Bebidas'),
('Carnes'),
('Saladas'),
('Entradas');

-- Inserindo dados na tabela PRATOS
INSERT INTO PRATOS (nome, descricao, preco, id_categoria, disponivel) VALUES 
('Spaghetti Carbonara', 'Tradicional massa italiana com bacon e molho carbonara', 25.50, 1, TRUE),
('Lasanha Bolonhesa', 'Lasanha com molho bolonhesa e queijo gratinado', 30.00, 1, TRUE),
('Penne ao Pesto', 'Massa com molho pesto de manjericão', 28.00, 1, TRUE),
('Tiramisu', 'Sobremesa italiana com café, mascarpone e cacau', 18.00, 2, TRUE),
('Pudim de Leite', 'Pudim tradicional de leite condensado', 12.00, 2, TRUE),
('Sorvete de Baunilha', 'Sorvete caseiro de baunilha', 10.00, 2, TRUE),
('Refrigerante', 'Bebida gaseificada', 5.00, 3, TRUE),
('Suco de Laranja', 'Suco natural de laranja', 7.00, 3, TRUE),
('Água com Gás', 'Água mineral com gás', 4.00, 3, TRUE),
('Picanha Grelhada', 'Picanha grelhada com acompanhamentos', 50.00, 4, TRUE),
('Frango à Parmegiana', 'Frango empanado com queijo e molho', 35.00, 4, TRUE),
('Filé Mignon', 'Filé mignon ao ponto com batatas', 60.00, 4, TRUE),
('Salada Caesar', 'Salada com alface, croutons e molho Caesar', 15.00, 5, TRUE),
('Salada Caprese', 'Salada com tomate, mussarela e manjericão', 20.00, 5, TRUE),
('Salada de Frutas', 'Salada com frutas da estação', 12.00, 5, TRUE),
('Bruschetta', 'Pão tostado com tomate e manjericão', 18.00, 6, TRUE),
('Tábua de Frios', 'Seleção de queijos e embutidos', 40.00, 6, TRUE),
('Crostini de Cogumelos', 'Pão tostado com cogumelos', 22.00, 6, TRUE);

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
