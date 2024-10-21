// JS - lado del cliente
//NODE +V8 = JS lado del servidor

//Variables
//contenedor de información

//Tipo simples
let data = 14   //entero
let data1 = 25.6    //float
let data2 = "hola"  //string
let data3 = '@'     //char
let data4 = false   //boolean
let data5 = undefined   //undefined



//Tipo compuestas
let data6 = ['hola',54, false]   //array
let data7 = {                   //objeto

    name:"Ithan",
    activo:true

}

//no usar var - hoisting :C
//let y const :D

//-------------------------///-------------------------------------------///-------------------------------------///----------------------------------///--------------------------

//Strings - cadena de caracteres

let password = "12345IthanC"

//propiedades

console.log(password.length);

//metodos
console.log(password.trim());
console.log(password.includes('5'));
console.log(password.toUpperCase());
console.log(password.toLocaleLowerCase());


//ES6 - nuevas caracteristicas
// gitate strings
console.log(`El password es: ${password}`);

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------

//Numbers

let gamePrice1 = "500.35";
let gamePrice2 = 500.35;

//Casting -ES6
console.log(+gamePrice1+gamePrice2);

//Orden de ejecucion de los operadores (* * + - ** () )

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------

//Condicionales

let userCardBalance = 500
let cardBalance = 1000

//ES6 Operador ternario

let result= cardBalance <=userCardBalance ? "Pay" : "Consuming"

let email = ""

!email ? console.log("Provide an email") : console.log("Register")

//Valores verdaderos - truthy

//Valores falsos - falsy

//Comparacion estricta ===
let userID = 123
userID === "123" ? console.log("User found") : console.log("User doesn´t exist")

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------

//Loops

const goals = ['Learn JS', 'Play Soccer', 'Watching Netflix', 'Enjoy the Holiday']

//forEach
goals.forEach((goal, index) => console.log(goal))

//map

const newGoals = goals.map((goal) => goal.toUpperCase())

//Summary
console.log(goals);
console.log(newGoals);

//Función anónima y autoejecutada

(function() {
    console.log("ejecución de una función");
})();

//función declarada

function getAvatar() {
    console.log("/photo/user.jpg");
}

getAvatar();


//función expresada

const conectionBDD  = function() {
    console.log("Connection successful")
}

conectionBDD();

//Argumentos
const validarEmailAndToken = function(email, token) {
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndToken('ithan@gmail.com','1234');

//Argumentos opcionales

const validarEmailAndTokenTwo = function(email, token = "555") {
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndTokenTwo('ithan@gmail.com');

//Retorno 

function tiposRetorno(){
    //Lógica
    //return "Usuarios premium"
    //return 89
    //return true
    //return['user1','user2']
    return{
        name:"Juan",
        id:845
    }
}

console.log(tiposRetorno());

//ES6
//Funcion flecha

const conectionBDDMongo  = () => {
    console.log("Connection successful")
}

//const registerUser = (email) => {
//    console.log("user registred")
//}


const registerUser = email => {console.log("user registred")}

registerUser('damian@gmail.com')

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------

//objetos

const datosBananeritoGood = {
    name:"",
    age:1,
    address:{
        city:"Machala",
        telephone:123
    },
    friends:["Ccodrigo","Torero"],
    status:true
}

console.log(datosBananeritoGood.name)

const nameB = datosBananeritoGood.name
const friendsB = datosBananeritoGood.friends

//ES6
//Desestructuracion

const {name, age,address,friends,status:estado}=datosBananeritoGood

console.log(estado)

//Propiedades
datosBananeritoGood.photo = 'banerito.png'
delete datosBananeritoGood.age

console.log(datosBananeritoGood)

Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("OK");


const lunch={
    nameL:"Pollo Broaster",
    price:5
}
const drink={
    nameD:"Jugo de coco",
    sweet:false
}

const orderUser={...lunch,...drink} //...SPREAD

console.log(orderUser);

//ES6
//Nombres Abreviados de propiedades

const nameVideoGame = "MarioKart"
const priceVideoGame = 89

const videoGame = {
    nameVideoGame,
    priceVideoGame
}

console.log(videoGame)


//Arrays

const boys=["Peter","Juan","Luisa","Anahi","Mateus"]

const customers =[
    {
        name:"Luis",
        order:45,
        place:"Floresta"
    },
    {
        name:"Janneth",
        order:4,
        place:"Villaflora"
    }
]

boys.forEach((boy,i)=>{console.log(`${i+1}.- ${boy}`)})
console.log()

customers.forEach((c,i)=>{console.log(`${i+1}.- Orden:${c.order}    Nombre:${c.name}`)})

const services=[
    {
        name:"Basici",
        mount:5,
        image:"photo/service1.png",
        details:["Atencion familiar","Grupo Social"]
    },
    {
        name:"Plus",
        mount:25,
        image:"photo/service2.png",
        details:["Atencion diaria","Seguro médico"]
    }
]

const newServices = services.map(s=>(    //moldear, transforma, convierte la informacion
    {                                      // return =>{}, no return =>()
        name:s.name,
        image:s.image
    }
))

console.log(newServices)


const equipments = ["Tubo de Oxigeno","Camilla","Termometros","Mdidores de P."]

//ES6
//Desestructuracion
const [ , , ,equipments4] = equipments
console.log(equipments4);


const categories = ["Camas","Balanceados","Juguetes","Accesorios","Ropa"]

categories.length >= 5 ? console.log("Registrar categoria"): console.log("No se puede registrar ")

categories.push("Medicamentos") //añade al final
categories.unshift("Adopciones") //añade al inicio

categories.pop() //Elimina al final
categories.shift() //Elimina al inicio

console.log(categories)


let resultCategorie = categories.find((c)=>(c === "Camas"))

resultCategorie ? console.log("Mostrar subcategorías"):console.log("No existe esa categoría")

let resultCategorieFilter = categories.filter((c)=>(c.startsWith('J')))
console.log(resultCategorieFilter)
console.log()

//ES6
const servicesCharge = ["Grúa","Material","Herramienras"]
const servicesMachines = ["Volqueta","Trailer","Tractor","Excavadoras"]


//...REST (Agrupa los valores "restantes")
const [machine1,machine2 ,...machines] = servicesMachines
console.log(machines)

//...SPREAD (Expandir)
let allServices = []
allServices = [...servicesCharge,...servicesMachines]
console.log(allServices)

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------

//INTERMEDIO

//MANIPULACION DEL DOM

//DOM -     API para manipular los elementos de un html

//Programación - Imperativa
//JS PURO - VANILLA JS

//Programacion Declarativa
// REACT

//PROGRAMACION ASINCRONA

// - CALLBACK
const getUserBDD = ()=>{console.log({id:123,name:"Pancho",rol:"Admin"})}
setTimeout(getUserBDD,4000)

//CALLBACK - HELL

//PROMESAS
const conexionBDDExterna = (dataConnection)=>{
    return new Promise((resolve,reject)=>{ //argumentos resolve(ejecutar exitosamente) y reject(si presenta un error)
        setTimeout(() => {
            dataConnection ? resolve("Connection-OK"):reject("Connection BAD")
        }, 3000);
    })
}

//Then - Catch
conexionBDDExterna(false)
    .then((response)=>{console.log(response)})
    .catch((error)=>{console.log(error)})


//Async - Await
const verifyConnection = async()=>{
    try {
        console.log(await conexionBDDExterna(true))
    } catch (error) {
        console.log(error)
    }
}

verifyConnection()

//API Then-Catch
fetch("https://dog.ceo/api/breeds/image/random") //funcion Fetch(ya es una promesa)
    .then((request)=>(request.json()))  //.json es otra promesa, por eso ocupa otro .then
        .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)})   //Captura todos los errores


//API ASYNG-AWAIT
const getDog = async() => {
    try{
    let Dog = await fetch("https://dog.ceo/api/breeds/image/random")
    let data = await Dog.json()
    console.log(data)
    }
    catch (error){
        console.log(error)
    }
}

getDog()


//API
//api.giphy.com/v1/stickers/trending
//Token
//lerx9FDWD5PH78M207Cj95ac4KTt8G3v


const token = 'lerx9FDWD5PH78M207Cj95ac4KTt8G3v'
const url = "https://api.giphy.com/v1/stickers/trending";


const getGif = async() => {
    try{
    let Gif = await fetch(`${url}?api_key=${token}`)
                    //fetch(`https://api.giphy.com/v1/stickers/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v`)
    let data = await Gif.json()
    console.log(data)
    }
    catch (error){
        console.log(error)
    }
}

getGif()


//ADVANCE

//LOCAL STORAGE

//MODULES
//COMMONJS = require
//ES Modules = import o from

//---------------------------------////---------------------------------------///-------------------------------------//---------------------------------------------------//----------


//BACKEND DEVELOPERS

//STAGE 1 = Fundamentos agnosticos
//LIBRERÍA = Solventa una única cosa
//FRAMEWORK = Ayuda a resolver un problema mas complejo(o varios)

//STAGE 2 = Proyecto 100% Backend 

//STAGE 3 = Proyecto FullStack

//10 Semanas


//RUTA == RECURSO QUE EL SERVIDOR DEBE PROCESAR A TRAVÉS DE UN EDNPOINT
//REQUEST == LA SOLICITUD QUE EL SERVIDOR DEBE PROCESAR A TRAVÉS DE UN EDNPOINT
    //ruta
    //header = formato(JSON-XMLS)-método(GET-POST-ETC)
    //body

//RESPONSE == EL TIPO DE RECURSO QUE EL SERVIDOR VA A RESPONDER (5 FORMAS)
//MIDDLEWARE == EL INTERMEDIARIO ENTRE EL REQUEST Y EL RESPONSE 