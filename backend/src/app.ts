import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = express();
app.use(express.json());

AppDataSource.initialize()
    .then(() => {
        console.log("Connected to the database");
        app.use("/users", userRoutes);
        app.use("/orders", orderRoutes);

        // Iniciar el servidor
        app.listen(3000, () => {
            console.log("Server running on http://localhost:3000");
        });
    })
    .catch(error => console.log("Error during Data Source initialization", error));


