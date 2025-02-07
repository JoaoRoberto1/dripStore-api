import Sequelize from 'sequelize';

// Conexão com o PostgreSQL usando Sequelize
const sequelize = new Sequelize('postgresql://neondb_owner:npg_tBZ7TY0EKSHw@ep-floral-bush-a4g09217-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require', {
  dialect: 'postgres',
  logging: false, // Ative o logging se precisar ver os queries no console
});

// Testando a conexão
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o PostgreSQL bem-sucedida!');
  })
  .catch(err => {
    console.error('Não foi possível conectar ao PostgreSQL:', err);
  });

  export default sequelize;
