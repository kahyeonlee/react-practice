const express =require('express')
const router = express.Router()
const conn = require('../config/db.js')

router.post('/join',(req,res)=>{
    console.log('회원가입요청');
    console.log(req.body);

    let {id, password, nickName} = req.body;
    let sql ='insert into nodejs_member values(?,?,?)';

    conn.connect()
    conn.query(sql,[id,password,nickName],(err,rows)=>{
        if(err){console.log('회원가입 오류 발생 :',err);}
        if(rows){
            res.json({result:'success'})
        }else{
            res.json({result:'fail'})
        }
    })
    conn.end();
})


router.post('/login',(req,res)=>{
    console.log('로그인요청');
    console.log(req.body);
    
    let {id, pw} = req.body;
    let sql = "select * from nodejs_member where id = ? and pw = ?";

    conn.connect()
    conn.query(sql,[id,pw],(err,rows)=>{
        if(err){console.log('로그인 오류 발생 :',err);}

        console.log(rows);
        if(rows && rows.length > 0){
            res.json({result:'success',nick:rows[0].NICKNAME})
        }else{
            res.json({result:'fail'})
        }
    }) 
})

module.exports = router