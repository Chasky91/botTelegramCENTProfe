//controlador
import alumnoModel from "../services/alumnoService.js"

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

    res.status(404).json({"message": "El alumno que solicitas no existe"})
}

