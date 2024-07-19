import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
   dotenv.config()
mongoose
  .connect(
    process.env.MONGO
  )
  .then(() => {
    console.log("Connect to db");
  })
  .catch(() => {
    console.log("Not connect to db");
  });




const app = express()
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})