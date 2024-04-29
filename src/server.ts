import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors"
import router from "./routers";




dotenv.config();

const andela = express();

andela.use(bodyParser.json());
andela.use(cors())
andela.use("/api/v1",router)


const portas = parseInt(process.env.PORT || "", 10);
const db = process.env.DATABASE || "";

mongoose.connect(db)
  .then(() => {
    console.log("Database successfully connected.....");
    andela.listen(portas, () => {
      console.log(`Server running on port ${portas}`);
    });
  })
  .catch((error:any) => {
    console.error("Error connecting to database:", error);
  });

export default andela;