const express = require("express");
const app = express();
const productos = require("./routes/productos.route");
const puerto = 8080;

const server = app.listen(puerto, () => {
  console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});

app.use("/api/productos", productos);
app.use(express.static("public"));
