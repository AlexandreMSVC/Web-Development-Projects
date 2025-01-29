import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res,) => {
  res.send("Hello World!")
}) 
app.get("/contact", (req, res,) => {
  res.send("anemail@mail.com")
})
app.get("/about", (req, res,) => {
  res.send("I like turtles!")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});