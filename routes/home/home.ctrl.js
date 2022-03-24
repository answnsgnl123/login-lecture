"use strict";

const UserStorage = require("../../models/UserStorage")

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
    page: (req, res) => {
        res.render("home/page");
    },
    
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
        psword = req.body.psword

        console.log(req.body);
        
        console.log(UserStorage.getUsers()); //외부에서 내부로 접근하는 구조는 x

        const response = {};



        response.success = false;
        response.msg = "로그인에 실패";
        return res.json(response);
    },
};

module.exports ={
    output,
    process,
};