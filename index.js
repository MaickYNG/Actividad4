const express = require ("express")
const app = express()
app.use(express.json())

const puerto = 3000



app.listen(puerto,()=>{
    console.log("Servidor activo express04 :" + puerto)
})


app.use("/api/tecnologies", require("./routes/tecnologies"))
app.use("/api/experiences", require("./routes/experiences"))

