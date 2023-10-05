import { Response, Request } from "express";
import { DeletarUsuariosServices } from "../../services/usuarios/DeletarUsuariosServices";

class DeletarUsuariosController {
  async handle(req: Request, res: Response) {
    const { remover } = req.body;

    const deletarUsuariosServices = new DeletarUsuariosServices();
    const deletar = await deletarUsuariosServices.execute({
      remover,
    });
    return res.json(deletar);
  }
}

export { DeletarUsuariosController };
