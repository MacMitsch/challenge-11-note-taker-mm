
const express = require("express");

const htmlRoutes = require("./HTML&API routes/htmlRoutes");
const apiRoutes = require("./HTML&API routes/apiRoutes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT,()=>{
    console.log(`localhost:${PORT} is up and running`);
});