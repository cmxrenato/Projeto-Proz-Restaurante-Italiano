-- Criação das tabelas

-- Tabela CATEGORIAS (Gislene)
CREATE TABLE CATEGORIAS (
    id_categoria SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL
);

-- Tabela PRATOS (Renato)
CREATE TABLE PRATOS (
    id_prato SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2) NOT NULL,
    id_categoria INT REFERENCES CATEGORIAS(id_categoria),
    disponivel BOOLEAN DEFAULT TRUE
);

-- Tabela CLIENTES (Renato)
CREATE TABLE CLIENTES (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    telefone VARCHAR(20),
    email VARCHAR(100)
);

-- Tabela RESERVAS (Michael)
CREATE TABLE RESERVAS (
    id_reserva SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES CLIENTES(id_cliente),
    data_reserva TIMESTAMP NOT NULL,
    numero_pessoas INT NOT NULL,
    status_reserva VARCHAR(50)
);

-- Tabela EVENTOS (Jão)
CREATE TABLE EVENTOS (
    id_evento SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    data_evento TIMESTAMP NOT NULL,
    descricao TEXT
);

-- Tabela PRESENTES (Poliana)
CREATE TABLE PRESENTES (
    id_presente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    preco DECIMAL(10, 2),
    id_cliente INT REFERENCES CLIENTES(id_cliente)
);

-- Tabela PEDIDOS (Janei)
CREATE TABLE PEDIDOS (
    id_pedido SERIAL PRIMARY KEY,
    id_cliente INT REFERENCES CLIENTES(id_cliente),
    data_pedido TIMESTAMP NOT NULL,
    status_pedido VARCHAR(50),
    valor_total DECIMAL(10, 2)
);

-- Tabela ITENS_PEDIDO (Janei)
CREATE TABLE ITENS_PEDIDO (
    id_item SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES PEDIDOS(id_pedido),
    id_prato INT REFERENCES PRATOS(id_prato),
    quantidade INT NOT NULL,
    preco_unitario DECIMAL(10, 2) NOT NULL
);

-- Tabela PAGAMENTOS (Janei)
CREATE TABLE PAGAMENTOS (
    id_pagamento SERIAL PRIMARY KEY,
    id_pedido INT REFERENCES PEDIDOS(id_pedido),
    data_pagamento TIMESTAMP NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    metodo VARCHAR(50)
);

