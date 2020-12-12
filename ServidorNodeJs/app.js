const express = require("express");

const app = express();



app.use(express.json());
const path = require('path'); // hace que funcione las rutas 
const cors = require('cors');
const fs = require('fs');
app.use(cors());
app.listen(3000,()=>{console.log("Servidor Iniciado")})  

app.get('/', function(req, res) {
  res.send("HOLA MUNDO");
});

app.get('/carrito', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/cart/654.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/product', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/product/all.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/product/5678', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/product/5678.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/category/all', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/category/all.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/category/1234', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/category/1234.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/product/5678-comments', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/product/5678-comments.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/product/publish', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/product/publish.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});

app.get('/cart/buy', function(req, res) {
  const data = path.join(__dirname, "/ecommerce-api-master/cart/buy.json"); //concatena las rutas del servidor con el archivo
  res.sendFile(data);
});


app.post('/compra', function(req, res) {

  fs.writeFile("C:/Users/pavc3/Desktop/ServidorNodeJs/Compra/compra.txt", JSON.stringify(req.body) , function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
      res.sendStatus(200);
    }); 

});


