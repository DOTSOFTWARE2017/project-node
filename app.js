const express=require("express");
const mysql=require("mysql2");

const app=express();
const bodyparser=require('body-parser');


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
 
app.get("/jagan",(req,res)=>
{
    console.log(req)
    database.query('select * from users Where id=?',[req.query.id],(err,rows,fields)=>
    {
        if(err)
        console.log(err)
        else
        res.send(rows)
    })
})


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


// app.post("/jagan",(req,res)=>
// {
    
//     database.query('insert into users(id,Name,Age,city) values(?,?,?)',[req.query.id],(err,rows,fields)=>
//     {
//         if(err)
//         console.log(err)
//         else
//         res.send(rows)
        
//     })
    
// })
// const insert_row=()=>
// {
//     const query='insert into users(id ,Name,Age,city) values(?,?,?,?);';
//     let id=1;
//     let Name="God_saran";
//     let Age=24;
//     let city="karur";

//     database.query(query,[id,Name,Age,city],(err,row)=>
//     {
//             if (err) throw err
//             console.log(row.insert_row)
//             return row
//     })
// }

// app.get("/postvalue",(req,res)=>{
//     const tempValue = insert_row();
//     res.send(200,tempValue);
// })


database.connect(function(err){
 if (err) throw err
 console.log("connect sucessfully !")

 const sql="INSERT INTO USERS (id,Name,Age,city) VALUES ('5','jegan','20','karur')";
 database.query(sql,(err,res)=>{
  if(err) throw err
  console.log("1 record is inserted !")
 })
})