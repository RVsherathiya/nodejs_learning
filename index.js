import express from "express"

const app = express();


app.get("/", (req, res) => {
    res.send("Hello World jigar")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.listen(3000, () => {
    console.log("Server started at http://localhost:3000")
})