const express = require('express');
const connection = require("./connection")
const app = express();
const port = 2222;
const cors = require("cors");
// add middleware
const authMiddleware = require("./middleware/authMiddleware");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
)

const blogRoute = require("./Routers/blogRouter");
const userRoute = require("./Routers/userRouter");



app.use("/blog", blogRoute);
app.use("/user",  userRoute);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})