import { Request, Response } from "express";
import { CriarProdutosServices } from "../../services/produtos/CriarProdutosServices";

class CriarProdutosController {
  async handle(req: Request, res: Response) {
    const { nome, fabricante, quantidade, preco, categoriaId } = req.body; // banner nao vem reqbody

    if (!req.file) {
      // caso a imagem venha com problema ou vazia
      throw new Error("Imagem com problema");
    } else {
      // nao tem necessidade de else, poderia usar return e continua na constante
      const { originalname, filename: banner } = req.file; // apelidando filename de banner / recebendo file
      const criarProdutosServices = new CriarProdutosServices();
      const produtos = await criarProdutosServices.execute({
        nome,
        fabricante,
        quantidade,
        banner,
        preco,
        categoriaId,
      });
      return res.json(produtos);
    }
  }
}

export { CriarProdutosController };
