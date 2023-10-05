import { Request, Response } from "express";
import { AlteraProdutoServices } from "../../services/produtos/AlteraProdutosServices";

class AlteraProdutoController {
  async handle(req: Request, res: Response) {
    const { id, alteraNome, alteraFabricante, alteraQuantidade, alteraPreco } =
      req.body;
    // console.log(id);
    const alterarProdutoService = new AlteraProdutoServices();
    const resposta = await alterarProdutoService.execute({
      id,
      alteraNome,
      alteraFabricante,
      alteraQuantidade,
      alteraPreco,
    });
    return res.json(resposta);
  }
}

export { AlteraProdutoController };
