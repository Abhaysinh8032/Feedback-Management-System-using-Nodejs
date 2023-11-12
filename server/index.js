const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());
const con = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "8032",
    database : "stu_16july23"


});

app.post("/save",(req,res) =>{
    let data = [req.body.email ,req.body.name, req.body.feedback , req.body.rating]
    let sql = "insert into student values(?,?,?,?)";
    con.query(sql,data,(err,result)=>{
        if(err) res.send(err);
        else  res.send(result);
    })
})
// app.get("/check",(req,res) =>{
//     let data = [req.body.user, req.body.password]
//     let sql = "select from auth where user=? and password=?";
//     con.query(sql,data,(err,result)=>{
//         if(err) res.send(err);
//         else  res.send(result);
//     })
// })
app.get("/getData",(req,res) =>{
    let sql = "select*from student";
    con.query(sql,(err,result)=>{
        if(err) res.send(err);
        else  res.send(result);
    })
})
app.delete("/remove",(req,res) =>{
    let data = [req.body.user]
    console.log(data);
    let sql = "delete from student where user=?";
    con.query(sql,data,(err,result)=>{
        if(err) res.send(err);
        else  res.send(result);
    })
})
app.delete("/trunc",(req,res) =>{

    console.log("delete all");
    let sql = "TRUNCATE TABLE student;";
    con.query(sql,(err,result)=>{
        if(err) res.send(err);
        else  res.send(result);
    })
})
app.listen(9000,()=>{console.log("ready at  @ 9000")})


