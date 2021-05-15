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

pacientSchema.deleteOne(
  {
    _id: "609f2c265ec6a54cb8f7b62f",
  },
  { nombre: "Tepos" },
  () => {
    console.log("Value has been deleted");
    mongo.disconnect();
  }
);
