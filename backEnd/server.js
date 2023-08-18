import express from "express";
import data from "./data.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use("/api/products", (req, res) => {
    res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening to http://localhost:${port}`);
});