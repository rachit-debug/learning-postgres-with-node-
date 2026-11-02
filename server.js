let express = require("express")
require("dotenv").config()
var cors = require("cors")
require("./app/models/AllModel")
const { connectDb, Connection } = require("./app/config/Connection")
const { FrontendRoutes } = require("./app/routes/FrontendRoutes")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api",FrontendRoutes)


const PORT = process.env.PORT || 5000

let scanDb = async() =>{

  await connectDb()

  await Connection.sync({alter:true})

  app.listen(PORT,()=>{
    console.log(`server start at http://localhost:${PORT}`)

  })

}


scanDb()



