const mongo = require("mongoose");
const usser = "ferami_PC";
const password = "ferami_0898";
const dbName = "iot_fer";
const url = `mongodb+srv://${usser}:${password}@ferambase.yxuvm.mongodb.net/${dbName}?retryWrites=true&w=majority`;

mongo
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true }) // parametros del metodo connect de mongoose
  .then(() => console.log("Conectado")) /*mensajes de confirmacion */
  .catch((e) => console.log("Error de conexion", e));

const db = mongo.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Base de datos conectada");
});

/*const person = mongo.model("heart_values", {
  nombre: String,
  edad: Number,
  valores: Number,
});

const p1 = new person({name:'Fernando'});
p1.save().then(()=> console.log("Save Data"));*/
