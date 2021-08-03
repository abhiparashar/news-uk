const mongoose = require('mongoose')

const connectDB = async() =>{
    try {
     const conn = await mongoose.connect("mongodb://localhost:27017/myapp",
     {
         useCreateIndex:true,
         useFindAndModify:true,
         useNewUrlParser:true,
         useUnifiedTopology:true
     })
     console.log(`mongoDb connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Eroor:${error.message}`);
    }
 }

module.exports = connectDB
