## Proposta de Tabelas e Relacionamentos

### CATEGORIAS
- `id_categoria` (PK)
- `nome` (Nome da categoria, por exemplo: Massas, Sobremesas, Bebidas)

### PRATOS
- `id_prato` (PK)
- `nome` (Nome do prato)
- `descricao` (Descrição do prato)
- `preco` (Preço do prato)
- `id_categoria` (FK - Categoria do prato)
- `disponivel` (Booleano para saber se o prato está disponível)
- `sugestao_chef` (Booleano para marcar se o prato é uma sugestão do chef)

**Relacionamento**: Cada prato pertence a uma categoria de CATEGORIAS.
- **1:N** entre **CATEGORIAS** e **PRATOS**.

### CLIENTES
- `id_cliente` (PK)
- `nome`
- `telefone`
- `email`

### RESERVAS
- `id_reserva` (PK)
- `id_cliente` (FK - Cliente que fez a reserva)
- `data_reserva` (Data e hora da reserva)
- `numero_pessoas` (Número de pessoas na reserva)
- `status_reserva` (Confirmada, Pendente, Cancelada)

**Relacionamento**: Um cliente pode fazer várias reservas.
- **1:N** entre **CLIENTES** e **RESERVAS**.

### EVENTOS
- `id_evento` (PK)
- `nome` (Nome do evento)
- `data_evento` (Data do evento)
- `descricao` (Descrição do evento)

### PRESENTES
- `id_presente` (PK)
- `nome` (Nome do presente)
- `descricao` (Descrição do presente)
- `preco` (Preço do presente)
- `id_cliente` (FK - Cliente que recebe ou dá o presente)

**Relacionamento**: Um presente pode ser vinculado a um cliente.
- **1:N** entre **CLIENTES** e **PRESENTES**.

## Sugestões de Novas Tabelas

### PEDIDOS
- `id_pedido` (PK)
- `id_cliente` (FK - Cliente que fez o pedido)
- `data_pedido` (Data e hora do pedido)
- `status_pedido` (Ex.: Pago, Em preparação, Entregue)
- `valor_total` (Valor total do pedido)

**Relacionamento**: Um cliente pode fazer vários pedidos.
- **1:N** entre **CLIENTES** e **PEDIDOS**.

### ITENS_PEDIDO
- `id_item` (PK)
- `id_pedido` (FK - Pedido a que pertence o item)
- `id_prato` (FK - Prato que está sendo pedido)
- `quantidade` (Quantidade do prato no pedido)
- `preco_unitario` (Preço do prato no pedido)

**Relacionamento**: Um pedido pode ter vários pratos, e um prato pode estar em vários pedidos.
- **N:N** entre **PEDIDOS** e **PRATOS**, resolvido por **ITENS_PEDIDO**.

### PAGAMENTOS
- `id_pagamento` (PK)
- `id_pedido` (FK - Pedido que foi pago)
- `data_pagamento` (Data do pagamento)
- `valor` (Valor do pagamento)
- `metodo` (Método de pagamento: Cartão, Dinheiro, Pix)

**Relacionamento**: Um pedido pode ter um pagamento.
- **1:1** entre **PEDIDOS** e **PAGAMENTOS**.


## DER (Diagrama Entidade-Relacionamento)
No DER, podemos visualizar essas entidades conectadas com linhas que representam os relacionamentos. As entidades **CLIENTES**, **PRATOS**, **PEDIDOS**, etc., estarão representadas com suas chaves primárias e estrangeiras para os relacionamentos descritos.

Isso deve cobrir o funcionamento básico de um restaurante, incluindo reservas, pedidos, categorias de pratos e pagamentos.

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_full.png)


## Relacionamentos Chave Estrangeira
`PRATOS (id_categoria)` → `CATEGORIAS (id_categoria)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_pratos.png)

`PEDIDOS (id_cliente)` → `CLIENTES (id_cliente)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_pedidos.png)

`ITENS_PEDIDO (id_pedido)` → `PEDIDOS (id_pedido)`

`ITENS_PEDIDO (id_prato)` → `PRATOS (id_prato)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_itens_pedido.png)

`PAGAMENTOS (id_pedido)` → `PEDIDOS (id_pedido)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_pagamentos.png)



`RESERVAS (id_cliente)` → `CLIENTES (id_cliente)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_reservas.png)

 `PRESENTES (id_cliente)` → `CLIENTES (id_cliente)`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_presentes.png)



## Outras Tabelas
`CATEGORIAS`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_categorias.png)


`EVENTOS`

![Diagrama do Sistema](/db/exports/DER/tutti_nostri_eventos.png)


## Implementação (Usando SGDB Online)

Para implentar e testar este modelo ER você pode acessar o site SQL Lite em: [https://sqliteonline.com/ ](https://sqliteonline.com/).

1. Selecione PostgreSQL
1. Exclua a tabela **demo** ou qualquer outra tabela da base existente.
1. Abra uma aba para executar scripts sql ou comandos
1. Execute o escript de criação de tabelas [tutti_nostri.sql](/db/tutti_nostri.sql)
1. Execute o escript de criação de chaves estrangeiras [foreign_keys.sql](/db/foreign_keys.sql)
1. Execute o escript de carga de dados para pedidos e seus requisitos (categorias, pratos, clientes...) [carga_de_dados_pedidos.sql](/db/carga_de_dados_pedidos.sql)
1. Execute o escript de carga de dados para dados extras (eventos, reservas e presentes) [carga_de_dados_extras.sql](/db/carga_de_dados_extras.sql)

Com esses procedimentos a base estará populada e pronta para seleção de dados.
