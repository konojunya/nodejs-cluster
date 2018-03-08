const express = require("express")
const app = express()

app.get("/", (req, res) => {
  console.log(`${req.method}\t${req.path}\tpid = ${process.pid}`)
  res.json({
    name: "konojunya",
    age: 21
  })
})

app.listen(3000, () => {
  console.log(`worker: ${process.pid}`);
})