const user = require("../Data/user");
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();

const db = require("./models");
const port = 3001;
app.use(cors());
app.use(bodyParser.json());
app.get("/api/users", (req, res) => {
  return db.User.findAll()
    .then((users) => res.send(users))
    .catch((err) => {
      console.log("There was an error querying users", JSON.stringify(err));
      return res.send(err);
    });
});

app.post("/api/users", (req, res) => {
  const { first_name, last_name, email, gender, avatar, domain, available } =
    req.body;

  return db.User.create({
    first_name,
    last_name,
    email,
    gender,
    avatar,
    domain,
    available,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(
        "***There was an error creating a contact",
        JSON.stringify(user)
      );
      return res.status(400).send(err);
    });
});

app.put("/api/users/:id", (req, res) => {
  const idString = req.params.id;
  const id = parseInt(idString.replace(":", ""));

  return db.User.findByPk(id).then((user) => {
    const { firstName, lastName, email } = req.body;
    return user
      .update({ firstName, lastName, email })
      .then(() => res.send(user))
      .catch((err) => {
        console.log("***Error updating user", JSON.stringify(err));
        res.status(400).send(err);
      });
  });
});

app.delete("/api/users/:id", (req, res) => {
  const idString = req.params.id;
  const id = parseInt(idString.replace(":", ""));
  return db.User.findByPk(id)
    .then((user) => user.destroy())
    .then(() => res.send({ id }))
    .catch((err) => {
      console.log("***Error deleting user", JSON.stringify(err));
      res.status(400).send(err);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
