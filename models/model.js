/*Con esto se construye un modelo de los datos que debe de enviar,
el modelo de nuestro documento */
const mongo = require("mongoose");

const pacientSchema = new mongo.Schema(
  {
    nombre: String,
    edad: Number,
    valores: Number,
  },
  { versionKey: false } //se agrega para que mongodb no inserte una clave por defecto
);

const pacient = mongo.model('pacientes',pacientSchema);

module.exports = pacient;

