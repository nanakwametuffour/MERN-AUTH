import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
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
 app.use(express.json())
app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
})


  app.use("/api/user", userRoute);
  app.use("/api/auth", authRoute);



  // error handle middleware


  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });