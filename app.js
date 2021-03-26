const express = require ('express');
const app = express();
const port = 3030;
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

app.listen(port, () => console.log("Esta saliendo por el puerto "  +  port))