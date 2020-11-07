var express = require("express");
var router = express.Router();
const user = require("../sql/user");


router.get("/", function (req, res, next) {
  console.log('此时进入了login')
  res.render("login");
});


// router.post("/in", function (req, res, next) {
//   console.log("进入login 的in 处理");
//   let obj = req.body;
//   console.log(obj)
//   console.log(obj.username);
//   console.log(obj.password)
//   // console.log(user.find({}));
//   // 这一步是查询里面有没有 用户输入的 username password 有就可以跳后面页面 没有不可以
//   user.findOne(obj, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     if (data) {
//       res.redirect('/pro')
//     } else {
//       res.redirect('/register')
//     }
//   });
// });

//cookie的方法
// router.post("/in", function (req, res, next) {
//   console.log("进入login 的in 处理");
//   let obj = req.body;
//   // console.log(user.find({}));
//   // 这一步是查询里面有没有 用户输入的 username password 有就可以跳后面页面 没有不可以
//   user.findOne(obj, (err, data) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(data);
//     if (data) {
//       //在cookie内存一个name为islogin值为ok;
//       res.cookie('islogin', 'ok')
//       //跳转到/pro 页面
//       res.redirect('/pro')
//     } else {
//       res.redirect('/register')
//     }
//   });
// });


//session
router.post('/in', function (req, res, next) {
  var obj = req.body;
  user.findOne(obj, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      console.log(data);
      //存一个session
      req.session.islogin = 'ok'
      res.redirect('/pro')
    } else {
      res.redirect('/register')
    }
  })
})


module.exports = router;