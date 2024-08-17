
const tecnologiasListar =(req,res) =>{

    const listado =[
        {
            id:1, name :"JavaScript"
        },
        {
            id:2, name :"React"
        },
        {
            id:3, name :"Next"
        },
        {
            id:4, name :"Node"
        },
        {
            id:5, name :"RExpress Js"
        }
    ]
    
    res.status(200).json(listado)
}


const tecnologiasObtener =(req,res)=>{
    
    
    const{id, nombre} = req.params
    console.log("id recibido", id, " nombre" , nombre)
    res.send("dato recibido")
}



const tecnologiasGuardar =(req,res)=>{
    console.log (req.body)
    res.status(200).send("Tecnologia guardada ")
}

const tecnologiasActualizar =(req,res)=>{
    const {id,nombre}=req.body
    console.log("id", id)
    try{
        if(!id){
            res.status(400).json({"message":"no se ha especificado un id de tecnologia"})
            return
            }
        if(id=="" || id ==0){
            res.status(400).json({"message":"no se ha especificado un id de tecnologia"})
            return
        }
        if (!nombre || nombre==""){
            res.status(400).json({"message":"no se ha especificado un nombre de tecnologia"})
            return
        }

        const saved =true
        if (saved){
            res.status(200).json({"message":"Dato actualizado exitoso"})
            return
        }


    }catch(error){
        console.log ("error", error)
        res.status(400).send("error de actualizacion")
    }
}

const tecnologiaEliminar =(req,res)=>{
    try{
        if(!req.params.id){
            res.status(400).json({"message":"no se ha especificado un id a eliminar"})
            return
        }
        const id =req.params.id


        if(!id){
            res.status(400).json({"message":"no se ha especificado un id a eliminar"})
            return
        }
        const permisos = true
        if(!permisos)
            {
                res.status(400).json({"message":"el usuario no tiene permisos"})
                return
            }
        const executed =true
        if (executed){
            res.status(200).json({"message":"Dato eliminado con exitoso"})
            return
        }    


    }catch(error){
        res.status(400).json({"message": "Error eliminando"})
    }
}

module.exports ={tecnologiasListar,
                tecnologiasGuardar,
                tecnologiasObtener,
                tecnologiasActualizar,
                tecnologiaEliminar}