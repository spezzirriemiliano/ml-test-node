import cors = require("cors");
import express from "express";
import appRoutes from "./app-routes";
const app = express();
const port = 8080;

app.use(cors());
app.use(appRoutes);

// start the Express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
