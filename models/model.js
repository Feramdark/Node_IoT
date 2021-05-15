/*Con esto se construye un modelo de los datos que debe de enviar,
el modelo de nuestro documento */
const mongo = require("mongoose");

const pacientSchema = new mongo.Schema(
  {
    nombre: String,
    edad: Number,
    valores: Number,
  },
  { versionKey: false }
);

const pacient = mongo.model('pacientes',pacientSchema);

module.exports = pacient;

