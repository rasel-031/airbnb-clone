const { userSignUpData } = require("../model/databaseConfiguration");

exports.user_get_data = (req, res) => {
  res.send("Yeah...I am inside the controller");
};

exports.user_signup_post_data = (req, res) => {
  const user_data = new userSignUpData(req.body);

  user_data.save((error) => {
    if (error) {
      console.log("Data is not inserted.");
      res.send({ data: false });
    } else {
      console.log("Data is inserted.");
      res.send({ data: true });
    }
  });
};

exports.user_login_post_data = (req, res) => {
  const user_email = req.body.email;
  const user_password = req.body.password;

  userSignUpData.findOne({ email: user_email }, (error, result) => {
    if (error) {
      throw error;
    } else {
      if (result !== null) {
        const database_password = result.password;
        const user_data = {
          email: result.email,
          name: result.name,
          password: result.password,
        };
        if (database_password === user_password) {
          res.send(JSON.stringify({ ...user_data, acknowledge: true }));
        } else {
          res.send({
            acknowledge: false,
            message: "Your password is not correct!!",
          });
        }
      } else {
        res.send({ acknowledge: false, message: "You are not registered." });
        console.log("You are not registered.");
      }
    }
  });

  // res.send("OK bro");
};
