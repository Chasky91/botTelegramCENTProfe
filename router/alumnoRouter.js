import { Router } from "express"
import { obtenerAlumnos, obtenerUnAlumno } from "../controllers/alumnoController.js"

const routerAlumno = Router()

routerAlumno.get('/', obtenerAlumnos )
routerAlumno.get("/:dni", obtenerUnAlumno )

export default routerAlumno
