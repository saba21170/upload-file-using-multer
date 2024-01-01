const User = require("../modals/user.modal");
const users = (req, res) => {
  const name = req.body.name;
  const birthdate = req.body.birthdate;
  const photo = req.file.filename;

  const newUserData = {
    name,
    birthdate,
    photo,
  };
  const newUser = new User(newUserData);

  newUser
    .save()
    .then(() => res.json("User Added"))
    .catch((err) => res.status(400).json("Error: " + err));
};
module.exports = users;
