const express = require ('express');
const app = express();
const puerto = process.env.PORT;
const path = require ('path');

// le decimos cual es la carpeta publica
const publicPath = path.join(__dirname, './public');
// para que encuentre las imagenes y css
app.use(express.static('public'));

app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, './views/home.html'))
);

app.get('/home', (req, res) =>
res.sendFile(path.join(__dirname, './views/home.html'))
);

app.get('/login', (req, res) =>
res.sendFile(path.join(__dirname, './views/login.html'))
);

app.get('/register', (req, res) =>
res.sendFile(path.join(__dirname, './views/register.html'))
);
app.get('/producto', (req, res) =>
res.sendFile(path.join(__dirname, './views/producto.html'))
);

app.listen(puerto || 3030, function() {
    console.log("Servidor corriendo en el puerto 3030");
});