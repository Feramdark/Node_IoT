/*Al crear tu archivo,hacer un package.json, se crean con el comando npm init
solamente llenas los campos clave*/


const mongo = require("mongoose"); 
/* para poder utilizar el modulo de mongo se necesita pegar el siguiente comando
npm install mongoose --save*/

const usser = "ferami_PC"; //corresponde a tu usuario, se recomienda crear mas que el que tiene por defecto
const password = "ferami_0898"; // tu contraseña
const dbName = "iot_fer";//la base de datos

const url = `mongodb+srv://${usser}:${password}@ferambase.yxuvm.mongodb.net/${dbName}?retryWrites=true&w=majority`;
/*esta constante es equivalente a lo siguiente
mongodb+srv://feramdark0898:<password>@ferambase.yxuvm.mongodb.net
/myFirstDatabase?retryWrites=true&w=majority
Se obtiene de Atlas Mongo DB*/

mongo.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}) // parametros del metodo connect de mongoose
.then(()=>console.log('Conectado')) /*mensajes de confirmacion */
.catch(e =>console.log('Error de conexion',e))

