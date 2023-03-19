import express  from "express";
import cors from "cors";
import { connect } from "http2";
import {router} from "./router/router"



const app = express();

app.use(express.urlencoded({
    extended: true,
})
);
app.use(express.json());
app.use(cors());
app.use(router);


//.then(() => {
    app.listen(process.env.PORT || 5080, () => {
        console.log("VOCE ESTA CONECTADO EM http://localhost:5080/");
    });
//})
    //.catch((error) => console.log("Erro ao conectar o servidor!", error.message));