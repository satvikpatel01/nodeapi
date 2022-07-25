const fs = require('fs')
const Product1 = require('../models/ProductSchema')

exports.Product = {
  // getDirectory: () => {
  //   const splitDir = __dirname.split("\\");
  //   splitDir.pop();
  //   return splitDir.join("\\");
  // },
  get: async (req, res) => {
    try {
      const dataArray = await Product1.find()
      // const dataArray = fs.readFileSync(`${this.Product.getDirectory()}/public/Product.json`,"utf-8");
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: dataArray
        // data: JSON.parse(dataArray),
      });
    } catch (error) {
      return res.json({
        isSuccess: false,
        statusCode: 500,
        message: error.message
      })
    }
  },
  getbyid: async(req, res) => {
    try {
      const _id = req.query.id
      const dataArray = await Product1.findOne({ _id })
      // const dataArray = fs.readFileSync(`${this.Product.getDirectory()}/public/Product.json`, "utf-8");
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: dataArray
        // data: JSON.parse(JSON.parse(dataArray).find((x) => x._id == req.query.id)),
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
      const product2 = {
        category: req.body.category,
        productName: req.body.productName,
        price: req.body.price,
        clothSize: req.body.clothSize,
        inStock: req.body.inStock,
        description: req.body.description
      }
      const data = await Product1.create(product2)
      // const dataArray = fs.readFileSync(`${this.Product.getDirectory()}/public/Product.json`, "utf-8");
      // const data = { ...req.body, _id: JSON.stringify(new Date().valueOf()) };
      // dataArray.push(data);
      // fs.writeFileSync(`${this.Product.getDirectory()}/public/Product.json`, JSON.stringify(dataArray));
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
      const _id = req.query.id
      const data1 = await Product1.findByIdAndUpdate(_id, req.body)
      // const dataArray = fs.readFileSync(`${this.Product.getDirectory()}/public/Product.json`, "utf-8");
      // const data1 = dataArray.findIndex((x) => x._id === req.body.id)
      // dataArray.splice(data1, 1, { ...req.body })
      // const data2 = { ...req.body }
      // fs.writeFileSync(`${this.Product.getDirectory()}/public/Product.json`, JSON.stringify(dataArray));
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
  },
  delete: async (req, res) => {
    try {
      const _id = req.query.id
      const data = await Product1.findByIdAndDelete(_id)
      // const dataArray = fs.readFileSync(`${this.Product.getDirectory()}/public/Product.json`, "utf-8");
      // const data2 = dataArray.filter((x) => x._id !== req.query.id)
      // const data1 = req.query.id
      // fs.writeFileSync(`${__dirname}/Product.json`, JSON.stringify(data2))
      return res.json({
        isSuccess: true,
        statusCode: 200,
        data: _id
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
