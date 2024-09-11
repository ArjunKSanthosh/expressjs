// const path=require("path")
// const express=require("express");
// const app=express();
// const PORT=3000;
// // app.use(express.static("template")) //this step is also used to load the page
// app.use(express.json()) 
// app.get("/",Token,(req,res)=>{
//     // to load the page
//     // res.status(200).sendFile(path.join(__dirname,"template","index.html"))  
//     // console.log(req.body);
//     console.log("home");3000
// })
// app.get("/about",(req,res)=>{                                                                                                                           
//     // res.status(201).send("About")
//     res.status(200).sendFile(path.join(__dirname,"template","about.html"))  
// })
// app.get("/contact",(req,res)=>{
//     res.status(200).sendFile(path.join(__dirname,"template","contact.html"))
// })
// app.get("*",(req,res)=>{   
//      res.status(200).sendFile(path.join(__dirname,"template","error.html"))  

//     // res.status(404).send("Page Not found")
// })
// function Token(req,res,next){
//     console.log("middleware");
//     next();
// }
// app.listen(PORT,()=>{
//     console.log(`server started at http://localhost:${PORT}`);
    
// })
// const path=require("path")


//id params
//==================================================================================
// const express=require("express");                                                
// const app=express();                                                             
// const PORT=3000;                                                                 
// app.use(express.json())
//         app.get("/",(req,res)=>{
        
//             console.log("home");
//             res.send("hello world")
//         })
//         app.get("/about/:id",(req,res)=>{
//             const {id}=req.params
//             console.log(id);
//             res.status(201).send("about")
//         })
//         app.listen(PORT,()=>{
//                 console.log(`server started at http://localhost:${PORT}`);
                
//             })

//===================================================================================

//query params
// const express=require("express");
// const app=express();
// const PORT=3000;
// app.use(express.json())
//         app.get("/",(req,res)=>{
        
//             console.log("home");
//             res.send("hello world")
//         })
//         app.get("/about",(req,res)=>{
//            const {username,age}=req.query;
//            console.log(username,age);
//            res.status(201).send("About");
//         })
//         app.listen(PORT,()=>{
//                 console.log(`server started at http://localhost:${PORT}`);
                
//             })

//==============================================================================================
//database connection

// const DB_NAME="BATCH 730"
// const DB_URL="mongodb://127.0.0.1:27017/"
// const mongoose=require("mongoose")
// const express=require("express");
// const app=express();
// const PORT=3000;
// app.use(express.json())
//         app.get("/",(req,res)=>{
        
//             console.log("home");
//             res.send("hello world")
//         })
        
//         mongoose.connect(DB_URL+DB_NAME).then(()=>{
//             console.log("mongodb connected");
//             app.listen(PORT,()=>{
//                                  console.log(`server started at http://localhost:${PORT}`);
                                
//                   })

//         }).catch((error)=>{
//             console.log(error);
//         })

//==============================================================================================

//create server from import 

import express from "express";
import connection from "./connection.js";
import env from "dotenv";
env.config();
const app=express();
app.get("/",(req,res)=>{
   res.send("hai team")
        })
connection()
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("server started");
    })
}).catch((error)=>{
    console.log(error);
})