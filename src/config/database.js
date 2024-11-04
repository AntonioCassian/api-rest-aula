require('dotenv').config();

module.exports = {
  dialect: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    'createdAt': 'created_at',
    'updatedAt': 'updated_at'
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
}

/*const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: 'mariadb',
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });/*/
