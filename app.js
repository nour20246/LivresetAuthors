import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routerAuth from "./Routes/auth.js";
import routerAuthor from "./Routes/author.js";
import routerLivres from "./Routes/Livres.js";
import routerCategory from "./Routes/category.js";

// Database connection
const app = express();
const PORT = process.env.PORT || 5000;
mongoose
    .connect("mongodb://localhost:27017/Livres")
    .then(function () {
        console.log("Connexion réussie");
    })
    .catch(function (e) {
        console.log("Connexion échouée");
    });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/livres", routerLivres);
app.use("/api/author", routerAuthor);
app.use("/api/auth", routerAuth);
app.use("/api/categories", routerCategory);



export default app;