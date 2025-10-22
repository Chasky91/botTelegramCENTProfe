import express from 'express'
import listadodeAlumnos from './alumnos.js'

const app = express()


app.get('/', (req, res) => {
  res.send('Bot del cent44!')
})


app.get('/alumnos', (req, res) => {


  res.send(listadodeAlumnos)
})


app.post('/alumnos',  (req, res) => {

  res.send('Registro de alumno') 
})


app.listen(3000, () => {
  console.log('Server is running on port 3000')
})