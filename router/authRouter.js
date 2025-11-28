import  {Router} from 'express'

const  routerAuth = Router()


routerAuth.get("/singup", async (req, res) => { 
    res.send("hola" )
})

routerAuth.get("/login", async (req, res) => { 
    res.send("hola")
})

routerAuth.get("/logout", async (req, res) => { 
    res.send("hola")
})

export default routerAuth