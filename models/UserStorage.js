"use strict";

class UserStorage {
    static #users = {  //정적변수 설정 public 변수에서 #으로 prevate 변수로 변경 (은닉화)
        id: ["sksms","chlrh","roqkfwk"],
        psword: ["1234","123","12345"],
    };


    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.has0wnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        console.log(newUsers);
        return newUsers;
    }
}

module.exports = UserStorage;