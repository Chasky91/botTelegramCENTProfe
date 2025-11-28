import express from 'express'
import cors from 'cors'
import pool from './config/config.db.js'
import routerAlumno from './router/alumnoRouter.js'
import routerAuth from './router/authRouter.js'

const app = express()
app.use(express.json())

const  configuracionCORS = {
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
}

app.use(cors())

app.use('/auth',routerAuth)
app.use('/alumnos',routerAlumno)


app.get('/', (req, res) => {
  res.send('Bot del cent44!')
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