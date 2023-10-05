import { Request, Response } from "express";
import { ListarCategoriasServices } from "../../services/categorias/ListarCategoriasServices";

class ListarCategoriasController {
  async handle(req: Request, res: Response) {
    const listarCategoriaServices = new ListarCategoriasServices();
    const resposta = await listarCategoriaServices.execute();
    return res.json(resposta);
  }
}

export { ListarCategoriasController };
