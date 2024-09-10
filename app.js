const path=require("path")
const express=require("express");
const app=express();
const PORT=3000;
// app.use(express.static("template")) //this step is also used to load the page
app.use(express.json()) 
app.get("/",Token,(req,res)=>{
    // to load the page
    // res.status(200).sendFile(path.join(__dirname,"template","index.html"))  
    // console.log(req.body);
    console.log("home");
})
app.get("/about",(req,res)=>{                                                                                                                           
    // res.status(201).send("About")
    res.status(200).sendFile(path.join(__dirname,"template","about.html"))  
})
app.get("/contact",(req,res)=>{
    res.status(200).sendFile(path.join(__dirname,"template","contact.html"))
})
app.get("*",(req,res)=>{   
     res.status(200).sendFile(path.join(__dirname,"template","error.html"))  

    // res.status(404).send("Page Not found")
})
function Token(req,res,next){
    console.log("middleware");
    next();
}
app.listen(PORT,()=>{
    console.log(`server started at http://localhost:${PORT}`);
    
})