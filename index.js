const express = require('express'); // imports en node js sin ninguna configuracion
const app = express();
const { getUsers, createUser, userDelete, userUpdate, login } = require('./controllers/user.controller')
const mongoose = require('mongoose');
const cors = require('cors') // importamos cors');
require('dotenv').config() // importamos dotenv (conocidos como variables de entorno y se guardan en el archivo .env)
const port = process.env.PORT || 3000; // regularmente se usa el puerto 3000
// || or, && and

// config para recibir info
app.use(express.json()) // nos permite que nuestra peticion post reciba informacion desde el body
app.use(cors({ origin: '*' }));

// Con Promise se puede trabajar con then y con catch
mongoose.connect(process.env.HOSTDB).then(() => {
    console.log('Conexion a MongoDB');
}).catch((error) => {
    console.log(error);
})

app.get('/user', getUsers);
app.post('/user', createUser);
app.post('/user/login', login);
app.put('/user/:id', userUpdate);
app.delete('/user/:id', userDelete);

// servidor
app.listen(port, () => { // levanta el servidor
    console.log('Servidor funcionando en el puerto: ' + port)
});
