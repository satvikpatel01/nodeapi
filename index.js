require('dotenv').config()
require('./config/db')

const express = require("express");
const app = express();
const fs = require("fs")
let cors = require('cors')
const PORT = process.env.PORT || 5000;

// const dataArray = fs.readFileSync(`${__dirname}/Student.json`, "UTF-8");
const emailForm =fs.readFileSync(`${__dirname}/form.html`, "utf-8")
const nodemailer = require('nodemailer');
const routes = require('./routes/index')

// format
app.use(
  express.json({
    limit: "1024mb",
  })
);
app.use(
  express.urlencoded({
    limit: "1024mb",
    extended: true,
  })
);

app.use(cors())
// student start
app.use('/api', routes)
// app.get("/api/student/get", (req, res) => {
//   const dataArray = fs.readFileSync(`${__dirname}/Student.json`, "UTF-8");
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: JSON.parse(dataArray),
//   });
// });

// app.get("/api/student/get-student-by-id", (req, res) => {
//   const dataArray = fs.readFileSync(`${__dirname}/Student.json`, "utf-8");
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: JSON.parse(dataArray).find((x) => x._id == req.query.id),
//   });
// });

// app.post("/api/student/add", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Student.json`, "utf-8"));
//   const data = {
//     ...req.body,
//     _id: JSON.stringify(new Date().valueOf()),
//   };
//   dataArray.push(data);
//   fs.writeFileSync(`${__dirname}/Student.json`, JSON.stringify(dataArray));
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data,
//   });
// });

// app.post("/api/student/update", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Student.json`, "utf-8"));
//   const data1 = dataArray.findIndex((x) => x._id === req.body.id)
//   dataArray.splice(data1, 1, { ...req.body })
//   const data2 = { ...req.body }
//   fs.writeFileSync(`${__dirname}/Student.json`, JSON.stringify(dataArray))
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data2,
//   })
// });

// app.delete("/api/student/delete", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Student.json`, "utf-8"));
//   const data2 = dataArray.filter((x) => x._id !== req.query.id)
//   const data1 = req.query.id
//   fs.writeFileSync(`${__dirname}/Student.json`, JSON.stringify(data2))
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data1,
//   })
// });

// student start
// product start 

// app.get("/api/product/get", (req, res) => {
//   const dataArray = fs.readFileSync(`${__dirname}/Product.json`, "UTF-8");
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: JSON.parse(dataArray),
//   });
// });

// app.get("/api/product/get-Product-by-id", (req, res) => {
//   const dataArray = fs.readFileSync(`${__dirname}/Product.json`, "utf-8");
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: JSON.parse(dataArray).find((x) => x._id == req.query.id),
//   });
// });

// app.post("/api/product/add", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Product.json`, "utf-8"));
//   const data = {
//     ...req.body,
//     _id: JSON.stringify(new Date().valueOf()),
//   };
//   dataArray.push(data);
//   fs.writeFileSync(`${__dirname}/Product.json`, JSON.stringify(dataArray));
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data,
//   });
// });

// app.post("/api/product/update", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Product.json`, "utf-8"));
//   const data1 = dataArray.findIndex((x) => x._id === req.body.id)
//   dataArray.splice(data1, 1, { ...req.body })
//   const data2 = { ...req.body }
//   fs.writeFileSync(`${__dirname}/Product.json`, JSON.stringify(dataArray))
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data2,
//   })
// });

// app.delete("/api/product/delete", (req, res) => {
//   const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/Product.json`, "utf-8"));
//   const data2 = dataArray.filter((x) => x._id !== req.query.id)
//   const data1 = req.query.id
//   fs.writeFileSync(`${__dirname}/Product.json`, JSON.stringify(data2))
//   return res.json({
//     isSuccess: true,
//     statusCode: 200,
//     data: data1,
//   })
// });

// product end
//user start

app.get("/api/user/get", (req, res) => {
  const dataArray = fs.readFileSync(`${__dirname}/User.json`, "UTF-8");
  return res.json({
    isSuccess: true,
    statusCode: 200,
    data: JSON.parse(dataArray),
  });
});

app.get("/api/user/get-Product-by-id", (req, res) => {
  const dataArray = fs.readFileSync(`${__dirname}/User.json`, "utf-8");
  return res.json({
    isSuccess: true,
    statusCode: 200,
    data: JSON.parse(dataArray).find((x) => x._id == req.query.id),
  });
});

app.post("/api/user/add", (req, res) => {
  const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/User.json`, "utf-8"));
  const data = {
    ...req.body,
    _id: JSON.stringify(new Date().valueOf()),
  };
  dataArray.push(data);
  fs.writeFileSync(`${__dirname}/User.json`, JSON.stringify(dataArray));
  return res.json({
    isSuccess: true,
    statusCode: 200,
    data: data,
  });
});

app.post("/api/user/update", (req, res) => {
  const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/User.json`, "utf-8"));
  const data1 = dataArray.findIndex((x) => x._id === req.body.id)
  dataArray.splice(data1, 1, { ...req.body })
  const data2 = { ...req.body }
  fs.writeFileSync(`${__dirname}/User.json`, JSON.stringify(dataArray))
  return res.json({
    isSuccess: true,
    statusCode: 200,
    data: data2,
  })
});

app.delete("/api/user/delete", (req, res) => {
  const dataArray = JSON.parse(fs.readFileSync(`${__dirname}/User.json`, "utf-8"));
  const data2 = dataArray.filter((x) => x._id !== req.query.id)
  const data1 = req.query.id
  fs.writeFileSync(`${__dirname}/User.json`, JSON.stringify(data2))
  return res.json({
    isSuccess: true,
    statusCode: 200,
    data: data1,
  })
});

//user end
// // file create 
// fs.appendFile('test.txt', `${dataArray}`, function (err, res) {
//   if (err) throw err;
//   console.log('Saved!');
// })

// // in file new write and ald data delete 
// fs.writeFile('test.txt', `${dataArray}`, function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// // file rename
// fs.rename('test.txt', 'myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });

// file delete
// fs.unlink('myrenamedfile.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });
// var transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'satvikpatel1996@gmail.com',
//     pass: 'afqyenmfuujykqmw'
//   }
// });

// var mailOptions = {
//   from: 'satvikpatel1996@gmail.com',
//   to: 'jemish780@gmail.com',
//   subject: 'Sending Email using Node.js',
//   html: emailForm
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

app.listen(PORT, () => {
  console.log("Node app started on PORT: " + PORT);
});