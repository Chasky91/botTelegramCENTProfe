//controlador
import alumnoModel from "../model/alumnoModel.js"

//->>>>>>>>>>>>>>>>>
export const  obtenerAlumnos = async (req, res) =>{
    console.log("desde el controlador")
    let resul = await alumnoModel.buscarTodos()
    console.log(resul)
    res.json({"mensaje":resul})
}
//--->---------------------->
export const obtenerUnAlumno = async (req, res) => {
        console.log("desde el controlador obteniendo UNO")

    let id = req.params.dni
    const resultado = await alumnoModel.buscarUno(id)
    if(resultado.length >=1)  return res.json({"menssage" : resultado})
    console.log(resultado)

    res.status(404).json({"mensaje": "El alumno que solicitas no existe"})
}

export const crearAlumno = async (req, res) => {

    let  alumno = req.body

    if(Object.keys(req.body).length===0) {
        return res.status(400).json({"message": "Se requieren los datos para crear un alumno"})
    }

    //aca falta el codigo pra  validar  que se el unico registro
    const resultado = await alumnoModel.crear(alumno)
    console.log(resultado)
    res.json({"mensaje" : resultado})

}

export const  actulizarAlumno = async (req, res) => {
    let  dni = req.params.dni
    if(Object.keys(req.body).length===0) {
        return res.status(400).json({"mensaje": "Se requieren los datos para actualizar"})
    }

    let alumno = {
        ...req.body,
        dni
    }
    
    const resultado = await alumnoModel.actualizar(alumno)
    console.log(resultado)
    res.json({"menssage" : resultado})

}

export const eliminarAlumno = async (req, res) => {
        let dni = req.params.dni
        const resultado = await alumnoModel.eliminar(dni)
        console.log(resultado)
        if(resultado.affectedRows === 1) return res.json({"mensaje" : "El alumno se ha eliminado"})
        res.json({"mensaje" : 'No se realizaron cambios'})
}

