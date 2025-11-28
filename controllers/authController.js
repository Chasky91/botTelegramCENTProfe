export const singup = (req, res) => {
    try {
        const  {nombreCompleto, username, password, email } = req.body

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            return res.status(400).json({error: "Formato invalido de correo"})
        }

        //const find = await authModel.obtenerUNO()
        if(existingUSer) {
            return res.status(400).json({error: "Usuario ya existente"})
        }

    } catch (error) {

    }
} 