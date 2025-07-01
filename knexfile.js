import dotenv from 'dotenv';
dotenv.config();

export default {
  development: {
    client: process.env.DB_CLIENT || 'mysql2',
    connection: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'obj',
    },
    migrations: {
      directory: './src/db/migrations',
    },
  },
};


/*

📄 O que é o knexfile.js?
O knexfile.js é um arquivo de configuração do Knex.js, 
utilizado para definir como o seu projeto vai se conectar ao banco de dados em diferentes ambientes, como:

- development (desenvolvimento)

- test (testes automatizados)

- production (produção real)

- Esse arquivo diz ao Knex:

- Que tipo de banco de dados será usado (MySQL, PostgreSQL, SQLite, etc) TIPO DE BANCO

- Quais são as credenciais de acesso ao banco (host, usuário, senha, banco) CONEXAO

- Onde estão os arquivos de migrações e seeds  MIGRATIONS E SEEDS 

*/