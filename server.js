const http = require("http")
const fs = require("fs")


const home = fs.readFileSync("./home.html", "utf-8")
const about = fs.readFileSync("./about.html", "utf-8")
const contact = fs.readFileSync("./contact.html", "utf-8")
const server = http.createServer((req, res) => {

    if(req.url === "/"){
      return  res.end(home)
    }
    if(req.url === "/about"){
      return  res.end(about)
    }
    if(req.url === "/contact"){
      return  res.end(contact)
    }
    else{
      return  res.end("<h1> 404 Not Found </h1>")
    }
})

server.listen(3000, "localhost", ()=> {
    console.log("server is running on http://localhost:3000")
})