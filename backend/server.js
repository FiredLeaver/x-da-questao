const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

var path = require('path')
const app = express()
const PORT = 8080

var login = "username"
var password = "password"

app.use(session({secret:'sidnaso3f88nofn'}))
app.use(bodyParser.urlencoded({extended:true}))

app.engine('html', require('ejs').renderFile)
app.set('view engine','html')
app.use(express.static(path.join(__dirname, '../','/frontend','/login')))
app.set('views', path.join(__dirname, '../','/frontend','/login'))


app.post("/enviar",(req,res) =>{
    if (req.body.password === password && req.body.login === login) {
        req.session.login = login
        res.render('logado')
    }
})

app.get("/",(req, res)=>{
    if(req.session.login) {
        res.render('logado')
    }
    else{
        res.render('login')    
    }
})

app.listen(PORT, () => {
    console.log(`servidor está rodando na porta ${PORT}`)
})