const express=require("express");
const mysql=require("mysql2");

const app=express();
const bodyparser=require('body-parser');
const { response } = require("express");

app.use(bodyparser.json());

const database=mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'password',
    database:'curd'

})

database.connect((err,res)=>{

    if(err)throw err
    console.log("DB  connect sucessfully !")
})

app.listen(3000,()=>console.log("express server is running at port number 3000"))

app.get("/users",(req,res)=>
{
    database.query('select * from users',(err,rows,fields)=>
    {
        if(err)
        console.log(err)
        else
        res.send(rows)
    })
})

// app.get("/users/:id",(req,res)=>
// {
//     database.query('select * from users WHERE id =?',[req.body.id],(err,row,fields)=>
//     {
//         if(!err){
//             res.send(row)
//         }
//         else
//         res.send(err)
        
//     })
    


// })
 
// app.get("/jagan",(req,res)=>
// {
    
//     database.query('select * from users Where id=?',[req.query.id],(err,rows,fields)=>
//     {
//         if(err)
//         console.log(err)
//         else
//         res.send(rows)
//     })
// })


// app.get("/jagan",(req,res)=>
// {
    
//     database.query('delete from users Where id=?',[req.query.id],(err,rows,fields)=>
//     {
//         if(err)
//         console.log(err)
//         else
//         res.send(rows)
//     })
// })