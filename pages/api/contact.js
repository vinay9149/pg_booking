// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
var fs = require("file-system");
export default async function handler(req, res) {
  if (req.method === "GET") {
    var userData = JSON.parse(fs.readFileSync("json/User.json", "utf8"));
    res.status(200).json(userData);
  }
  if (req.method === "POST") {
    var name = req.body.name;
    var mobile = req.body.mobile;
    var email = req.body.email;
    var message = req.body.message;
    var date = req.body.date;
    var userData = JSON.parse(fs.readFileSync("json/User.json", "utf8"));
    let userFound = userData.find((user) => user.mobile === mobile);
    if (userFound) {
      res.status(500).json({
        status: "failed",
        message: "User with mobile number already exists",
      });
    } else {
      userData.push({
        date: date,
        name: name,
        mobile: mobile,
        email: email,
        message: message,
      });
      fs.writeFileSync("json/User.json", JSON.stringify(userData, null, 2));
      res.status(200).json({
        status: "success",
        data: JSON.stringify({
          name: name,
          mobile: mobile,
          email: email,
          message: message,
        }),
      });
    }
  }
  if (req.method === "DELETE") {
    var userData = JSON.parse(fs.readFileSync("json/User.json", "utf8"));
    var mobile = req.query.mobile;
    let filteredData = userData.filter((user) => user.mobile !== mobile);
    fs.writeFileSync("json/User.json", JSON.stringify(filteredData, null, 2));
    res.status(200).json({
      status: "success",
    });
  }
}
