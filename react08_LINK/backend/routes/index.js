const express = require("express");
const router = express.Router();
const path = require("path");
const conn = require("../config/db.js");
const { log } = require("console");

router.get("/", (req, res) => {
  console.log("main router!");
  res.sendFile(
    path.join(__dirname, "..", "..", "frontend", "build", "index.html")
  );
});

router.post("/getData", (req, res) => {
  console.log("Form으로 들어옴..!", req.body);

  let sql = "insert into nodejs_member values(?,?,?)";

  conn.query(sql, ["admin", 1234, req.body.data], (err, rows) => {
    if (err) {
      console.log("insert query 이슈 발생!", err);
    }

    if (rows) {
      res.send({ result: "success" });
    } else {
      res.send({ result: "failed" });
    }
  });

  //   conn.end();
});

// 실습) 회원가입, 로그인 처리를 할 수 있는 기능 구현하기
router.post("/join", (req, res) => {
  console.log("회원가입", req.body);
  let id = req.body.member.id;
  let pw = req.body.member.pw;
  let nick = req.body.member.nickName;

  let sql = "insert into nodejs_member values(?,?,?)";
  conn.query(sql, [id, pw, nick], (err, rows) => {
    if (err) {
      console.log("insert query 회원가입 이슈 발생!");
    }

    if (rows) {
      res.send({ result: "success" });
    } else {
      res.send({ result: "failed" });
    }
  });
  // conn.end();
});

router.post("/login", (req, res) => {
  console.log(req.body);

  let id = req.body.member.id;
  let pw = req.body.member.pw;

  let sql = "select * from nodejs_member where id = ? and pw = ?";
  conn.query(sql, [id, pw], (err, rows) => {
    if (err) {
      console.log("select query 로그인 이슈 발생!",err);
    }

    // 데이터베이스에서 조회된 정보는 갯수에 상관없이 배열로 묶여서 반환된다.
    console.log(rows);
    

    if (rows.length>0) {
      // 데이터베이스에서 조회된 key 값은 대소문자 구분이 되기 때문에 정확한 key값으로 접근해야 한다.
      res.send({ result: "success", nickname:rows[0].NICKNAME });
    } else {
      res.send({ result: "failed" });
    }


  });
  // conn.end();
});

module.exports = router;
