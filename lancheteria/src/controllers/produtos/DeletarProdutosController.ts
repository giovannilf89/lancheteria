import { Response, Request } from "express";
import { DeletarProdutosServices } from "../../services/produtos/DeletarProdutosService";

class DeletarProdutosController {
  async handle(req: Request, res: Response) {
    const { remover } = req.body;

    const deletarProdutosServices = new DeletarProdutosServices();
    const deletar = await deletarProdutosServices.execute({
      remover,
    });
    return res.json(deletar);
  }
}

export { DeletarProdutosController };
