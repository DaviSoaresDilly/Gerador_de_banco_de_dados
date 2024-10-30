# Automatizando Dados

Projeto para automação de dados e análise em um sistema de saúde, usando um backend em Node.js, análise de dados em Python e um frontend em React.

## Estrutura do Projeto

- **backend**: Implementado com Node.js e Express para gerenciar a API e as rotas de dados.
- **frontend**: Interface do usuário feita com React para visualização de relatórios e dashboards.
- **scripts**: Scripts em Python para análise de dados e integração com APIs externas.
- **requirements**: Dependências e documentação.

## Requisitos

- **Node.js** versão 14.x ou superior
- **Python** versão 3.8 ou superior
- **PostgreSQL** para banco de dados relacional

## Instalação

### 1. Clonar o Repositório

```bash
git clone https://github.com/DaviSoaresDilly/Gerador_de_banco_de_dados
cd Gerador_de_banco_de_dados
```

### 2. Instalar as Dependências

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

#### Scripts

```bash
cd scripts
pip install -r requirements.txt
```

### 3. Configurar o Banco de Dados

Crie um banco de dados PostgreSQL e configure as credenciais no arquivo `.env` do backend.

```env
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=postgres
DB_NAME=automatizando_dados
```

### 4. Inicializar o Banco de Dados

```bash
cd scripts
python init_db.py
```

### 5. Inicializar o Backend

```bash
cd backend
npm start
```

### 6. Inicializar o Frontend

```bash
cd frontend
npm start
```

Acesse o frontend em [http://localhost:3000](http://localhost:3000).

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais detalhes.

## Autores

- Davi Soares Dilly
- Gabriel Ribeiro
- Júlio César

## Referências

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Express](https://expressjs.com/)
- [Python](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Sequelize](https://sequelize.org/)
- [Material-UI](https://material-ui.com/)
- [Chart.js](https://www.chartjs.org/)
- [Axios](https://www.npmjs.com/package/axios)

```

```
