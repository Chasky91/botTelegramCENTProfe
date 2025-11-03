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
    'INSERT INTO alumno (dni, nombre, apellido, telefono) VALUES (?, ?, ?, ?)',
    [alumno.dni, alumno.nombre, alumno.apellido,alumno.telefono ]
  )
  // aca selecciono
  const alumNuevo = await pool.query(
    `SELECT * FROM alumno WHERE dni = ?`, [alumno.dni]
  )
   
  return  alumNuevo[0]
}


const actualizar = async (alumno) => {

  const dni = alumno.dni 
  const nombre = alumno.nombre
  const apellido = alumno.apellido
  const telefono = alumno.telefono

  const sql = `UPDATE alumno SET  nombre = ?, apellido = ?, telefono = ? WHERE dni = ?`

  await pool.query(sql,[ nombre, apellido, telefono, dni])

  const alumnoActualizado = await pool.query('SELECT * FROM alumno WHERE dni = ?',[dni])
  return alumnoActualizado[0]
}

const eliminar = async (dni) => {

  const sql = `DELETE FROM alumno WHERE dni = ?`

  const [resultado] = await pool.query(sql,[ dni])
  return resultado
}


export default {
  buscarTodos,
  buscarUno,
  crear,
  actualizar, 
  eliminar
} 

