const express = require('express')  //Usar EXPRESS - COMMONJS
const app = express()   //Inicializar EXPRESS

//RUTA "/"
app.get('/',(req,res)=>{res.send("Hola")})

//RUTA /franquicias
app.get('/franquicias',(req,res)=>{res.send("Informacion franquicias")})

//RUTA /simple
app.get('/simple',(req,res)=>{res.send("Hamburguesa Simple")})

app.use((req,res)=>{res.send("<h1>Page not Found -404 <h1>")})



app.listen(3000)
console.log("SERVER OK")