import { Router } from "express"
import { obtenerAlumnos, obtenerUnAlumno,actulizarAlumno, crearAlumno, eliminarAlumno} from "../controllers/alumnoController.js"

const routerAlumno = Router()

routerAlumno.get('/', obtenerAlumnos )
routerAlumno.get("/:dni", obtenerUnAlumno )
routerAlumno.put("/:dni", actulizarAlumno )
routerAlumno.post("/", crearAlumno )
routerAlumno.delete("/:dni", eliminarAlumno )

export default routerAlumno
