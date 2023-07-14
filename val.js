const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
// const bcrypt = require("bcrypt");
const mysql = require("mysql");

const adminRouter = require("./routes/admin");

// app.set("view engine", "ejs");
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, "public"))); //css

// app.use(
//   session({
//     secret: "mysecretkey",
//     resave: false,
//     saveUninitialized: false,
//   })
// );

// app.use((req, res, next) => {
//   res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
//   next();
// });

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "1234",
//   database: "login",
//   port: "3306",
// });

// connection.connect((err) => {
//   if (err) throw err;
//   console.log("Connected to database");
// });

app.use(adminRouter);

app.get("/home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});

app.post("/store-menu", (req, res, next) => {
  console.log("working on it.....");
  res.sendFile(path.join(__dirname, "./", "views", "shop.html"));
  //console.log("Form-data : ", req.body);
  // const { userName, password } = req.body;

  // connection.query(
  //   "SELECT * FROM login WHERE name = ?",
  //   [userName],
  //   (err, results) => {
  //     if (err) throw err;

  //     if (results.length > 0) {
  //       const user = results[0];

  //       let sqlPassword = user.pwd;
  //       bcrypt.hash(sqlPassword, 10, (err, sqlPassword) => {
  //         bcrypt.compare(password, sqlPassword, (err, match) => {
  //           if (err) throw err;

  //           if (match) {
  //             req.session.userId = user.id;

  //             res.sendFile(path.join(__dirname, "./", "views", "shop.html"));
  //           } else {
  //             res.send("<h1>Incorrect password</h1>");
  //           }
  //         });
  //       });
  //     } else {
  //       res.send("<h1>User not found</h1>");
  //     }
  //   }
  // );
});

app.get("/bill", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "bill.html"));
});

app.get("/quotation", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "quotation.html"));
});

app.get("/dc", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "dc.html"));
});

app.get("/gstQuotation", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "gstQuotation.html"));
});

app.get("/gstBill", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "gstBill.html"));
});

//logout
app.get("/logout", (req, res) => {
  res.sendFile(path.join(__dirname, "./", "views", "home.html"));
  // if (req.session.userId) {
  //   req.session.destroy(() => {
  //     res.sendFile(path.join(__dirname, "./", "views", "home.html"));
  //   });
  // } else {
  //   res.redirect("/home");
  //   //res.sendFile(path.join(__dirname, "views", "home.html"));
  // }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
