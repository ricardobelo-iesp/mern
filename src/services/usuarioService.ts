import { Usuario, UsuarioModel } from './../model/usuarios'

export class UsuarioService {
    
    static listar(query: any): Promise<Usuario[]> {
        return UsuarioModel.find(query).exec()
    }
    
    static consultar(id: string): Promise<Usuario | null> {
        return UsuarioModel.findById(id).exec()
    }
    
    static criar(usuario: Usuario) : Promise<Usuario | null> {
        const model = new UsuarioModel(usuario)
        return model.save()
    }
    
    static atualizar(id: string, usuario: Usuario): Promise<Usuario | null> {
        return UsuarioModel.update({ id: id}, usuario).exec()
    }

    static async remover(id: string) : Promise<void> {
        await UsuarioModel.remove({ id: id }).exec()
    }

}