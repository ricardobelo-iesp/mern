import {Request, Response, Router} from "express"
import {Usuario} from "../model/usuarios"
import { UsuarioService } from "../services/usuarioService";

export const usuarioRouter = Router();

usuarioRouter.get("/", async (req: Request, res: Response) => {
  const usuarios: Usuario[] = 
    await UsuarioService.listar(req.query);
    res.json(usuarios)
});

usuarioRouter.get("/:id", async (req: Request, res: Response) => {
  try{
    const usuario: Usuario | null = 
    await UsuarioService.consultar(req.params.id);
    res.json(usuario)
  }catch(e){
      console.log(e)
      res.status(400).json({message: "nao encontrado"})
  }  
});

usuarioRouter.post("/", async (req: Request, res: Response) => {
  try{
    const usuario: Usuario | null = 
    await UsuarioService.criar(req.body);
    res.json(usuario)
  }catch(e){
      console.log(e)
      res.status(400).json({message: "nao encontrado"})
  }  
});

usuarioRouter.put("/:id", async (req: Request, res: Response) => {
  try{
    const usuario: Usuario | null = 
    await UsuarioService.atualizar(req.params.id,req.body);
    res.json(usuario)

  }catch(e){
      console.log(e)
      res.status(400).json({message: "nao encontrado"})
  }  
});

usuarioRouter.delete("/:id", async (req: Request, res: Response) => {
  try{
    await UsuarioService.remover(req.params.id).catch(err => {
      console.log(err);
    });
    res.status(200).json()

  }catch(e){
      console.log(e)
      res.status(400).json({message: "nao encontrado"})
  }  
});
