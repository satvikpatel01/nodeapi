const fs = require('fs')
const User1 = require('../models/UserSchema')

exports.User = {
  // getDirectory: () => {
  //   const splitDir = __dirname.split("\\");
  //   splitDir.pop();
  //   return splitDir.join("\\");
  // },
  get: async (req, res) => {
    try {
      const dataArray = await User1.find()
      // const dataArray = fs.readFileSync(`${this.User.getDirectory()}/public/User.json`,"utf-8");
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: dataArray,
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  },
  getbyid: async (req, res) => {
    try {
      const _id = req.query.id
      const data = await User1.findById({ _id })
      // const dataArray = fs.readFileSync(`${this.User.getDirectory()}/public/User.json`, "utf-8");
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  },
  add: async (req, res) => {
    try {
      const user1 = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        hobbies: req.body.hobbies,
        gender: req.body.gender,
        city: req.body.city,
        age: req.body.age
      }
      const data = await User1.create(user1)
      // const dataArray = fs.readFileSync(`${this.User.getDirectory()}/public/User.json`, "utf-8");
      // const data = { ...req.body, _id: JSON.stringify(new Date().valueOf()) };
      // dataArray.push(data);
      // fs.writeFileSync(`${this.User.getDirectory()}/public/User.json`, JSON.stringify(dataArray));
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  },
  edit: async (req, res) => {
    try {
      const _id = res.query.id
      const data2 = await User1.findByIdAndUpdate(_id, req.body)
      // const dataArray = fs.readFileSync(`${this.User.getDirectory()}/public/User.json`, "utf-8");
      // const data1 = dataArray.findIndex((x) => x._id === req.body.id)
      // dataArray.splice(data1, 1, { ...req.body })
      // const data2 = { ...req.body }
      // fs.writeFileSync(`${this.User.getDirectory()}/public/User.json`, JSON.stringify(dataArray));
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data2
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  },
  delete: async(req, res) => {
    try {
      const _id = res.query.id
      const data1 = await User1.findByIdAndDelete(_id)
      // const dataArray = fs.readFileSync(`${this.User.getDirectory()}/public/User.json`, "utf-8");
      // const data2 = dataArray.filter((x) => x._id !== req.query.id)
      // const data1 = req.query.id
      // fs.writeFileSync(`${__dirname}/User.json`, JSON.stringify(data2))
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: data1
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  }
};
