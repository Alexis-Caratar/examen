
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'examen',
  password: '199911',
  port: 5432
});

module.exports = pool;