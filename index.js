const express = require('express')  //Usar EXPRESS - COMMONJS
const app = express()   //Inicializar EXPRESS

app.use(express.json()) //formato json todas las peticiones

//MIDDLEWARE
app.use((req,res,next)=>{
    const {token} = req.body
    const response = token==="123" ? true:false
    response?next():res.status(401).json({msg:"INVALID TOKEN"})
})

app.get('/gifs',(req,res)=>{res.send("lista de gifs")})


//RUTA /franquicias
app.get('/franquicias',(req,res)=>{res.send("Informacion franquicias")})

//RUTA /simple
app.get('/simple',(req,res)=>{res.send("Hamburguesa Simple")})

//COMO PASAR INFORMACION POR REQUEST

//RUTA /register
app.post('/register',(req,res)=>{                                                                   //METODO POST 
    const {email,password} = req.body                                                               //pasar info por Body
    email === "ithan.camacho@epn.edu.ec" ? res.send("User registred") : res.send("Bad credentials")
})

//RUTA /products/:id
app.get('/products/:id',(req,res)=>{                                                                //pasar por PARAMS

    const {id} = req.params

    const products=[
        {   id:77,
            title:"Play 5",
            price:800
        },
        {
            id:56,
            title:"Laptop",
            price:500
        }
    ]
    
    const response = products.find((product)=>product.id === +id)
    
    response ? res.send(response):res.send("Product not found")
})

//RUTA /search
app.get('/search',(req,res)=>{                                                                      //pasar por query params

    const {orden}=req.query

    const responses={
        pollo:"Pollo del Hornero",
        milanesa:"Milanesa de pollo"
    }

    const response = responses[orden] || "No existe"  //falsy o truthy

    res.send(response)
    
})

//TIPOS DE RESPONSE

//RUTA "/" (texto)
app.get('/',(req,res)=>{res.send("Landing Page de Bienvenida")})

//RUTA /dashboard (json)
app.get('/dashboard',(req,res)=>{
    const user ={
        name:"Ithan",
        rol:"Admin"
    }
    res.send(user)
})

//RUTA /profile(file/img)
app.get('/user/profile',(req,res)=>{

    res.sendFile('./DEBER.pdf',{
        root:__dirname
    })
    
        
})

//RUTA /404 (mini - html)
app.get('/mouse',(req,res)=>{

    res.send(`
        <h1>Page not found - 404</h1>
        <button>Back to Homepage</button>
        `)
    
        
})


//EN CASO DE NO EXISTIR LA RUTA
app.use((req,res)=>{res.send("<h1>Page not Found -404 <h1>")})


app.listen(3000)
console.log("SERVER OK")