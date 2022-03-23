"ues strict";

// const http = require("http");
// const app = http.createServer((req, res) => {
//     res.writeHead(200,{
//         "Content-Type" : "text/html; charset=utf-8"
//     });

//     if (req.url === "/"){
//         res.end("루트입니다.");
//     } else if (req.url === "/login") {
//         res.end("여기는로그인입니다.");
//     }
// });

// app.listen(3001, () =>{
//     console.log("http로 가동 접속");
// });






const express = require("express");
const app = express();
const home = require("./routes/home");


app.set("views","./views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));


app.use("/", home); //use 미들웨어를 등록해주는 메서드.

module.exports = app;