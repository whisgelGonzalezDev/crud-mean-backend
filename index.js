const express = require('express');
const conectarDB = require('./config/db.js');
const cors = require('cors');

//Creamos el servidor
const app = express();
app.use(cors())
    //conectamos a la BD

conectarDB();



app.use(express.json());
app.use('/api/productos', require('./routes/producto.js'))

app.listen(4000, () => {
    console.log('Servidor corriendo');
})