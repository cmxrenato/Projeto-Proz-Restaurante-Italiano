-- Inserindo dados na tabela RESERVAS
INSERT INTO RESERVAS (id_cliente, data_reserva, numero_pessoas, status_reserva) VALUES 
(1, '2024-10-20 19:00', 4, 'Confirmada'),
(2, '2024-10-21 20:00', 2, 'Pendente'),
(3, '2024-10-22 18:30', 6, 'Confirmada'),
(4, '2024-10-23 21:00', 3, 'Cancelada'),
(5, '2024-10-24 19:00', 5, 'Confirmada');

-- Inserindo dados na tabela PRESENTES
INSERT INTO PRESENTES (nome, descricao, preco, id_cliente) VALUES 
('Cesta de Chocolates', 'Cesta com chocolates gourmet', 50.00, 1),
('Vinho Tinto', 'Garrafa de vinho tinto reserva', 80.00, 2),
('Cupom de Desconto', 'Desconto de 10% para a próxima visita', 0.00, 3),
('Livro de Receitas', 'Livro de receitas gourmet', 30.00, 4),
('Voucher de Jantar', 'Voucher de jantar no restaurante', 100.00, 5);

-- Inserindo dados na tabela EVENTOS
INSERT INTO EVENTOS (nome, data_evento, descricao) VALUES 
('Noite Italiana', '2024-11-01', 'Evento especial com pratos italianos e música ao vivo'),
('Festival de Vinhos', '2024-11-15', 'Degustação de vinhos com pratos harmonizados'),
('Jantar de Natal', '2024-12-24', 'Jantar especial de Natal com menu exclusivo'),
('Reveillon', '2024-12-31', 'Festa de ano novo com ceia completa e música ao vivo'),
('Brunch de Domingo', '2024-11-03', 'Brunch especial de domingo com variedade de pratos e bebidas');
