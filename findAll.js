const mongo = require("mongoose");
const pacientSchema = require("./models/model");

const usser = "ferami_PC";
const password = "ferami0898";
const dbName = "iot_fer";
const url = `mongodb+srv://${usser}:${password}@ferambase.yxuvm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongo
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) // parametros del metodo connect de mongoose
  .then(() => console.log("Conectado")) /*mensajes de confirmacion */
  .catch((e) => console.log("Error de conexion", e));

pacientSchema
  .find((error, data) => {
    console.log(data);
    mongo.disconnect();
  })
  .catch((error) => console.log("This", error));
