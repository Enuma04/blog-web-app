import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"))

app.use(bodyParser.urlencoded({ extended: true }));

let posts = [];


app.get("/", (req, res) => {
  res.render("index.ejs", {posts});
  
});

app.post('/submit', (req, res) => {
    
    const content = req.body.lName;
    const name = req.body.titleName;
    posts.push({ name, content, created_at: new Date().toISOString() });
    res.redirect('/');
});

app.post('/delete', (req, res) => {
    const createdAt = req.body.created_at;
    posts = posts.filter(post => post.created_at !== createdAt);
    res.redirect('/');
});

/*app.post("/submit", (req, res) => {

  const first = " ";
  const second = " ";

  const band = first + " " + second;
  const data = {
    name : band,
  }
  res.render("index.ejs", data);
});*/



app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});