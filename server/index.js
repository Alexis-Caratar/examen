const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./bd');
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4400"); // Cambia "http://localhost:4400" por tu origen permitido
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', (req, res) => {
  res.send('API EN PRODUCCION');
});


app.get('/listar', async (req, res) => {
    try {
      const users = await pool.query('SELECT * FROM tareas order by id asc');
      res.json(users.rows);
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post('/guardar', async (req, res) => {
    try {
        const datos= req.body;
        const users = await pool.query(`insert into tareas (titulo,descripcion,estado) values('`+datos.titulo+`','`+datos.descripcion+`','`+datos.estado+`');`)
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post('/confirmar', async (req, res) => {
    try {
        const datos= req.body;
       const users = await pool.query(`update tareas set estado='COMPLETADO' WHERE id=`+datos.id +`;`)
    } catch (err) {
      console.error(err.message);
    }
  });

  app.post('/eliminar', async (req, res) => {
    try {
        const datos= req.body;
       const users = await pool.query(`delete from tareas  WHERE id=`+datos.id +`;`)
    } catch (err) {
      console.error(err.message);
    }
  });



  

app.listen(3200, () => {
    console.log('🚀🚀🚀 Ecuchando en el puerto iniciado en el puerto 3200 🚀🚀🚀');
});