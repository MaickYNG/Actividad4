const experiencesListar =(req,res) =>{

    const listado =[
        {
            years_experience:1, company :"Cine Procinal"
        },
        {
            years_experience:0.5, company :"Digiter"
        },
        {
            years_experience:2, company :"Exito"
        },
        {
            years_experience:1, company :"Heimcore"
        },
        {
            years_experience:0, company :"Mercado Libre "
        }
    ]
    
    res.status(200).json(listado)
}


const experiencesObtener =(req,res)=>{
    
    
    const{id, company} = req.params
    console.log("experience recibido", id, " company" , company)
    res.send("dato recibido")
}



const experiencesGuardar =(req,res)=>{
    console.log (req.body)
    res.status(200).send("Experiencia guardada ")
}

const experiencesActualizar =(req,res)=>{
    const {id,company}=req.body
    console.log("id", id)
    try{
        if(!id){
            res.status(400).json({"message":"no se ha especificado un  valor de experience"})
            return
            }
        if(id=="" || id ==0){
            res.status(400).json({"message":"no se ha especificado un valor de experience"})
            return
        }
        if (!company || company==""){
            res.status(400).json({"message":"no se ha especificado el nombre de la empresa"})
            return
        }

        const saved =true
        if (saved){
            res.status(200).json({"message":"Dato de experiencia actualizado exitoso"})
            return
        }


    }catch(error){
        console.log ("error", error)
        res.status(400).send("error de actualizacion (experience)")
    }
}

const experiencesEliminar =(req,res)=>{
    try{
        if(!req.params.company){
            res.status(400).json({"message":"no se ha especificado el nombre de la empresa  a eliminar"})
            return
        }
        const company =req.params.company


        if(!company){
            res.status(400).json({"message":"no se ha especificado el nombre de la empresa  a eliminar"})
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
            res.status(200).json({"message":"Dato eliminado con exitoso (experiencie"})
            return
        }    


    }catch(error){
        res.status(400).json({"message": "Error eliminando"})
    }
}

module.exports ={experiencesListar,
                experiencesGuardar,
                experiencesObtener,
                experiencesActualizar,
                experiencesEliminar}