const { Pool } = require('pg');
const dbConfig = require('../config/database');

const env = process.env.NODE_ENV || 'development';
const config = dbConfig[env];

const pool = new Pool(config);

// Evento quando pool se conecta
pool.on('connect', () => {
  console.log('✅ Conectado ao PostgreSQL');
});

// Evento de erro no pool
pool.on('error', (err) => {
  console.error('❌ Erro no pool de conexões:', err.message);
});

// Testar conexão
pool.query('SELECT NOW()', (err, result) => {
  if (err) {
    console.error('❌ Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('✅ Banco de dados verificado:', result.rows[0]);
  }
});

module.exports = pool;
