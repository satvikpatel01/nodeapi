const fs = require('fs')
const Student = require("../models/StudentSchema")

exports.student = {
  // getDirectory: () => {
  //   const splitDir = __dirname.split("\\");
  //   splitDir.pop();
  //   return splitDir.join("\\");
  // }, 
  get: async (req, res) => {
    try {
      const students = await Student.find();
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: students,
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        mesage: error.message,
      });
    }
    // const dataArray = fs.readFileSync(
    //   `${this.student.getDirectory()}/public/Student.json`,
    //   "utf-8"
    // );

  },
  getbyid: async (req, res) => {
    try {
      const _id = req.query.id
      const data = await Student.findOne({_id});
      // const dataArray = fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`, "utf-8");
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data
        // data: JSON.parse(JSON.parse(dataArray).find((x) => x._id == req.query.id)),
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        mesage: error.message,
      });
    }
  },

  add: async (req, res) => {
    try {
      // const student = new Student({
      //   firstName: req.body.firstName,
      //   lastName : req.body.lastName,
      //   hobbies : req.body.hobbies,
      //   gender : req.body.gender,
      //   city : req.body.city,
      //   age : req.body.age
      //   })
      const student = {
        firstName: req.body.firstName,
        lastName : req.body.lastName,
        hobbies : req.body.hobbies,
        gender : req.body.gender,
        city : req.body.city,
        age : req.body.age
        }

      const dataArray1 = await Student.create(student);

      // const dataArray1 = await student.save()
      // fs.writeFileSync(`${this.student.getDirectory()}/public/Student.json`, JSON.stringify(dataArray));
        return res.json({
          isSuccess: true,
          statusCode: 200,
          data: dataArray1
      })
    } catch (error) {
      return res.json({
        isSuccess : false,
        statusCode : 500,
        message : error.message
      });
    }
  },
  edit: async (req, res) => {
    try {
      // const dataArray = fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`, "utf-8");
      // const data2 = { ...req.body }
      const _id = req.query.id
      // const student = {
      //   firstName: req.body.firstName,
      //   lastName : req.body.lastName,
      //   hobbies : req.body.hobbies,
      //   gender : req.body.gender,
      //   city : req.body.city,
      //   age : req.body.age
      // }
      const dataArray = await Student.findByIdAndUpdate(_id,req.body)
      // const data1 = dataArray.findIndex((x) => x._id === req.body.id)
      // dataArray.splice(data1, 1, { ...req.body })
      // fs.writeFileSync(`${this.student.getDirectory()}/public/Student.json`, JSON.stringify(dataArray));
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: dataArray
      });
    } catch (error) {
      return res.json({
        isSuccess : false,
        statusCode : 500,
        message : error.mesage
      })
    }
  },
  delete: async(req, res) => {
    try {
      const _id = req.query.id
      const data1 = await Student.findByIdAndDelete(_id)
      // const dataArray = fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`, "utf-8");
      // const data2 = dataArray.filter((x) => x._id !== req.query.id)
      // const data1 = req.query.id
      // fs.writeFileSync(`${__dirname}/Student.json`, JSON.stringify(data2))
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data1
      });
    } catch (error) {
      return res.json({
        isSuccess : false,
        statusCode : 500,
        message : error.mesage
      })
    }
  }
};
