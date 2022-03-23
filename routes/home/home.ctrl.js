const hello = (req, res) => {
    res.render("home/index");
};
const login = (req, res) => {
    res.render("home/login");
};
const page = (req, res) => {
    res.render("home/page");
};

module.exports ={
    hello,
    login,
    page,
};