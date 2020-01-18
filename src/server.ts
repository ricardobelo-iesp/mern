import express, {Application, Request, Response} from "express"
import {connect} from "mongoose"
import { Usuario, UsuarioModel } from './model/usuarios';
import { UsuarioService } from './services/usuarioService';

const app: Application = express();

app.get("/", async (req: Request, res: Response) => {
    const usuarios: Usuario[] =
    await UsuarioService.listar(req.query);
    res.json(usuarios)
});

app.listen(9090, async () => {
    await connect("mongodb://localhost:27017/iesp");
    console.log("servidor rodando ...")
});