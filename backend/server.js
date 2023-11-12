const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const path = require('path')

const Usuario = require('./Usuario');

const app = express()
const PORT = 8080


// test
const login = 'username'
const password = 'password'

let selectedTest = ''

// settings
app.use(session({secret:'sidnaso3f88nofn'}))
app.use(bodyParser.urlencoded({extended:true}))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.static(path.join(__dirname, '../', '/frontend')))
app.set('views', path.join(__dirname, '../', '/frontend'))

// pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login/login.html'))
})

app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index/index.html'))
})

app.post("/signup", async (req, res) => {

    /* console.log(req.body);
     console.log(typeof req.body);

     const bodyJsonText = JSON.stringify(req.body);

     console.log(bodyJsonText);
     console.log(typeof bodyJsonText);

     const bodyToIntegrate = JSON.parse(bodyJsonText);

     console.log(bodyToIntegrate);
     console.log(typeof bodyToIntegrate); */
     const bodyToIntegrate = {
         "nome_usuario" : req.body.nome_usuario,
         "email" : req.body.email,
         "senha" : req.body.senha
     }


     console.log(typeof bodyToIntegrate);
     console.log(req.body);

     if (req.body.senha === req.body.confirmarSenha){

         await Usuario.create(bodyToIntegrate)

         .then(() => {
             return res.json({
                 mensagem : "usuário cadastrado com successokkj"
             });
         }).catch(() => {
             return res.json({
                 mensagem : "erro: usuário não pode ser cadastrado"
             });
         })
     }
     else{
         console.log("não deu certo as senhaskkkkkkkj");

     }
 });

app.get('/exams', (req, res) => {
    const questions = [
        {
            question: '1 + 1 = ?', 
            answers: {
                a: '1',
                b: '2',
                c: '3',
                d: '4'
            },
            correct: 'b'
        },
        {
            question: '? + ? = ?', 
            answers: {
                a: '1',
                b: '2',
                c: '3',
                d: '?'
            },
            correct: 'd'
        }
    ]

    res.render('public/exams', {test: selectedTest, questions})
})

app.post('/exams', (req, res) => {
    selectedTest = req.body.test
})

app.post('/login', (req, res) => {
    if (req.body.password === password && req.body.login === login) {
        req.session.login = login
        res.redirect('home')
    }
})


app.listen(PORT, () => {
    console.log(`servidor está rodando na porta ${PORT}`)
})
