const express = require("express");
const routes = express.Router();

const ProductController = require("./controllers/ProductController");

// Rotas de requisição
routes.get("/products", ProductController.buscarTodos);
routes.get("/products", ProductController.buscarPorDescricao);
routes.get("/products/:id", ProductController.buscarPorId);
routes.post("/products", ProductController.criar);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.deletar);


module.exports = routes;