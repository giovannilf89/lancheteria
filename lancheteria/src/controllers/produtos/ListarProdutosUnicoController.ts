import { Request, Response } from "express";
import { ListarProdutoUnicoServices } from "../../services/produtos/ListarProdutosUnicoServices";

class ListarProdutoUnicoController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    // console.log(id); //testar se esta recebendo o id do front end ou insomina

    const listarProdutoUnicoController = new ListarProdutoUnicoServices();
    const resposta = await listarProdutoUnicoController.execute({
      id,
    });
    return res.json(resposta);
  }
}

export { ListarProdutoUnicoController };
