import express from "express";

const PORT = 3000

const app = express();

app.get('/probe', (req, res) => {
    console.log(req)
    return res.send({message: "hello world"});
})

app.listen(PORT, () => console.log('listening to port ' + PORT))