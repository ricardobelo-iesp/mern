import express, {Application, Request, Response} from "express"
import {connect} from "mongoose"
import { NextFunction } from "connect";
import { usuarioRouter } from './router/usuarioRouter';
import bodyParser = require("body-parser");
//import { ErrorRequestHandler } from "express-serve-static-core";

/**
    
app.get("/", async (req: Request, res: Response) => {
    const usuarios: Usuario[] =
    await UsuarioService.listar(req.query);
    res.json(usuarios)
});

err: ErrorRequestHandler,

 */

const app: Application = express();

app.use(bodyParser.json());

app.use((req: Request, res:Response, next:NextFunction) => {
    console.log(new Date());
    next();
});

app.use("/usuarios", usuarioRouter);

app.listen(9090, async () => {
    //await connect("mongodb://localhost:27017/iesp");
    await connect("mongodb+srv://ricardo:ewq321@cluster0-1bkpx.mongodb.net/test?retryWrites=true&w=majority");
    console.log("servidor rodando ...")
});

export default app