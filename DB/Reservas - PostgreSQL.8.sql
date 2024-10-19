CREATE TABLE Cliente 
( 
    id_cliente SERIAL PRIMARY KEY,  
    nome_completo VARCHAR(100),  
    telefone VARCHAR(15)         
); 

CREATE TABLE Reserva 
( 
    id_reserva SERIAL PRIMARY KEY,  
    data_reserva DATE,  
    horario_reserva INT,  
    numero_pessoas INT,  
    observacoes VARCHAR(255),      
    id_cliente INT,  
    FOREIGN KEY (id_cliente) REFERENCES Cliente (id_cliente)
);

ALTER TABLE Reserva ADD FOREIGN KEY(id_cliente) REFERENCES Cliente(id_cliente);