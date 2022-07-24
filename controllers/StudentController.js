const fs = require('fs')

exports.student = {
  getDirectory: () => {
    const splitDir = __dirname.split("\\");
    splitDir.pop();
    return splitDir.join("\\");
  },
  get: (req, res) => {
    const dataArray = fs.readFileSync(
      `${this.student.getDirectory()}/public/Student.json`,
      "utf-8"
    );
    return res.json({
      isSuccess: true,
      statusCode: 200,
      data: JSON.parse(dataArray),
    });
  },
  getbyid: (req, res) => {
    const dataArray = fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`,"utf-8");
    return res.json({
      isSuccess: true,
      statusCode: 200,
      data: JSON.parse(JSON.parse(dataArray).find((x) => x._id == req.query.id)),
    });
  },
  add:(req,res)=>{
    const dataArray= fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`,"utf-8");
    const data = {...req.body,_id: JSON.stringify(new Date().valueOf())};
    dataArray.push(data);
    fs.writeFileSync(`${this.student.getDirectory()}/public/Student.json`, JSON.stringify(dataArray));
    return res.json({
      isSuccess:true,
      statusCode: 200,
      data: data
    });
  },
  edit:(req,res)=>{
    const dataArray= fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`,"utf-8");
    const data1 = dataArray.findIndex((x) => x._id === req.body.id)
    dataArray.splice(data1, 1, { ...req.body })
    const data2 = { ...req.body }
    fs.writeFileSync(`${this.student.getDirectory()}/public/Student.json`, JSON.stringify(dataArray));
    return res.json({
      isSuccess:true,
      statusCode: 200,
      data: data2
    });
  },
  delete:(req,res)=>{
    const dataArray= fs.readFileSync(`${this.student.getDirectory()}/public/Student.json`,"utf-8");
    const data2 = dataArray.filter((x) => x._id !== req.query.id)
    const data1 = req.query.id
    fs.writeFileSync(`${__dirname}/Student.json`, JSON.stringify(data2))
    return res.json({
      isSuccess:true,
      statusCode: 200,
      data: data1
    });
  }
};
