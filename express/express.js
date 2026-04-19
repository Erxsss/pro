const { userModel } = require("./Schema/users.schema");
const express = require("express");
const mongoose = require("mongoose");
const port = 8080;
const app = express();
app.use(express.json());

const connectToMongoDB = async () => {
  await mongoose.connect(
    ""
  );
};

connectToMongoDB();

app.get("/", async (request, response) => {
  const users = await userModel.find();
  response.json(users);
});

app.post("/", async (request, response) => {
  const data = request.body;
  const res = await userModel.create({
    firstName: data.firstName,
    lastName: data.lastName,
    password: data.password,
    emergencyContact: data.emergencyContact,
  });
  console.log(response);
  response.json({ response });
});

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});
