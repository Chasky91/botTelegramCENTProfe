import mysql from "mysql2/promise"
import { config } from "../config.db.js"

// Create the connection to database
const conexion = await mysql.createConnection(config)

async function buscarTodos() {
    const resultado = await conexion.query(
        "SELECT  * FROM usuario;",
      )
      return resultado[0]
}


  const buscarUno = async(id) =>{
    const resultados = await conexion.query(
      'SELECT * FROM usuario WHERE dni = ?;',[id]
    ) 
  return  resultados[0]
}

// funcion crear
const  crear = async (alumno) => {
  // acá inserto
  const resultado = await conexion.query(
    'INSERT INTO usuario (dni, nombre, apellido, email) VALUES (?, ?, ?, ?)',
    [alumno.dni, alumno.nombre, alumno.apellido,alumno.email ]
  )
  // aca selecciono
  const alumNuevo = await conexion.query(
    `SELECT * FROM usuario WHERE dni = ?`, [alumno.dni]
  )
   
  return  alumNuevo[0]
}

export default {
  buscarTodos,
  buscarUno,
  crear
} 