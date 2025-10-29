import pool from "../config/config.db.js"

// Create the connection to database

async function buscarTodos() {
    const resultado = await pool.query(
        "SELECT  * FROM alumno;",
      )
      return resultado[0]
}


  const buscarUno = async(dni) =>{
    console.log(typeof dni)
    const resultados = await pool.query(
      'SELECT * FROM alumno WHERE dni = ?;',[dni]
    ) 
    console.log(resultados)
  return  resultados[0]
}

// funcion crear
const  crear = async (alumno) => {
  // acá inserto
  await pool.query(
    'INSERT INTO alumno (dni, nombre, apellido, email) VALUES (?, ?, ?, ?)',
    [alumno.dni, alumno.nombre, alumno.apellido,alumno.email ]
  )
  // aca selecciono
  const alumNuevo = await pool.query(
    `SELECT * FROM alumno WHERE dni = ?`, [alumno.dni]
  )
   
  return  alumNuevo[0]
}

export default {
  buscarTodos,
  buscarUno,
  crear
} 