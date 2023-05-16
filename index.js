const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();
const mongoose = require('mongoose');
require('dotenv').config() // importamos dotenv (conocidos como variables de entorno y se guardan en el archivo .env)
const port = process.env.PORT || 3000; // regularmente se usa el puerto 3000
// || or, && and

// config para recibir info
app.use(express.json()) // nos permite que nuestra peticion post reciba informacion desde el body

mongoose.connect(process.env.HOSTDB).then(() => {
    console.log('Conexion a MongoDB');
}).catch((error) => {
    console.log(error);
})

// servidor
app.listen(port, () => { // levanta el servidor
    console.log('Servidor funcionando en el puerto: ' + port)
});
