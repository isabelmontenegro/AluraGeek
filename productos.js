// api/productos.js

const { json, send } = require('micro');
const cors = require('micro-cors')();

const productosJSON = [
  { id: 1, nombre: 'Producto 1', precio: 10.99 },
  { id: 2, nombre: 'Producto 2', precio: 19.99 }
  // Agrega más productos según tu necesidad
];

module.exports = cors(async (req, res) => {
  if (req.method === 'GET') {
    send(res, 200, productosJSON);
  } else {
    send(res, 405, 'Method Not Allowed');
  }
});
