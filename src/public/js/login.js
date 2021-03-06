"use strict";

const id = document.querySelector("#id");
const pawrod = document.querySelector("#password");
const loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        psword: pawrod.value,
    };

    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
        
    })
        .then((res) => res.json())
        .then((res) => {
            if(res.success){
                location.href = "/";
            }else{
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error("로그인중 에러");
        });
    //console.log(req); // 웹페이지 콘솔
    
}