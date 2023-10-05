import { Request, Response } from "express";
import { CriarCategoriasServices } from "../../services/categorias/CriarCategoriasServices";

class CriarCategoriasController {
  async handle(req: Request, res: Response) {
    const { nome } = req.body;
    // console.log(nome)

    const criarCategoriasServices = new CriarCategoriasServices();
    const categoria = await criarCategoriasServices.execute({
      nome,
    });
    return res.json(categoria);
  }
}

export { CriarCategoriasController };
