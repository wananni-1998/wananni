var express = require('express');
var router = express.Router();
const user = require("../sql/user");



router.get("/", function (req, res, next) {
  console.log('此时进入了register')
  res.render("register");
});



router.post("/addAction", function (req, res, next) {
  console.log('进入register addAction')
  let obj = req.body;
  console.log(obj)
  //查找数据库里保存的是否有一样的用户名
  user.findOne({ username: obj.username }, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      res.redirect('/register')
    } else {
      user.insertMany(obj, (err, data) => {
        if (err) {
          console.log(err);
        }
        res.redirect('/login')
      })
    }
  })
});

module.exports = router;