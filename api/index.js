import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
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




const app = express();
  app.use("/api/user", userRoute)
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})