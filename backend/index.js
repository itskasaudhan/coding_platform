import express from "express";
import dotenv from "dotenv";
import connection from "./DB/db.js";

const app=express();
dotenv.config();

app.listen(process.env.PORT,()=>{
    connection();
    console.log(`server is connected ${process.env.PORT}`);
})