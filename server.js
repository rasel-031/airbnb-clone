const express = require("express");
const app = express();
const userRouter = require("./routes/userRoute");

app.get("/", (req, res) => {
  res.send("Yes, I am working..");
});
//router
app.use("/user", userRouter);

app.use((req, res) => {
  res.send("404 Page Not Found!!");
});

app.listen(3001, () => {
  console.log("Server is running...");
  console.log(`http://localhost:3001/`);
});
