import express from 'express'
import pool from './config/config.db.js'
import listadodeAlumnos from './alumnos.js'
import connection from './config/config.db.js'

const app = express()


app.get('/', (req, res) => {
  res.send('Bot del cent44!')
})


app.get('/alumnos', async (req, res) => {
  
})

app.get('/alumnos/:dni', async (req, res) => {
  console.log(req.params.dni)
  res.send('Enviando un alumno por DNI ' + req.params.dni)
})


app.post('/alumnos',  (req, res) => {

  res.send('Registro de alumno') 
})


app.listen(3000, () => {
  pool.getConnection()
    .then(connection => {
        console.log('Conexión a base de datos exitosa')
        connection.release();
    })
    .catch(err => {
        console.error('Error conectando a base de datos:', err.message)
    });
  console.log('Server is running on port 3000')
})