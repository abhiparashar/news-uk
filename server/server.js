const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")
const connectDB = require("./config/db")
const authRouter = require("./routes/auth")

const app = express()
dotenv.config()
connectDB()
app.use(cors())
app.use(express.json())

app.use("/api",authRouter)


const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})