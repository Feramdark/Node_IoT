const mongo = require('mongoose');
const pacientSchema = require('./models/model');

const usser = "ferami_PC";
const password = "ferami0898";
const dbName = "iot_fer";
const url = `mongodb+srv://${usser}:${password}@ferambase.yxuvm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongo
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) // parametros del metodo connect de mongoose
  .then(() => console.log("Conectado")) /*mensajes de confirmacion */
  .catch((e) => console.log("Error de conexion", e));

new pacientSchema({
    nombre:"Josh",
    edad:12,//-> aunque en el esquema esten declarados como numeros, se puede insertar double,float etc
    valores:36.5
}).save().then(() =>{
    console.log("Datos insertados");
    mongo.disconnect();//-> cierra el programa una vez insertados
}).catch((e)=>console.log("Error al insertar",e));


