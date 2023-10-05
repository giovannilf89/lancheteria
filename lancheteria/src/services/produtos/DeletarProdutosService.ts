import prismaClient from "../../../prisma";

interface DeletarProdutos {
  remover: string;
}

class DeletarProdutosServices {
  async execute({ remover }: DeletarProdutos) {
    await prismaClient.produtos.delete({
      where: {
        id: remover,
      },
    });
    return { dados: "Registro apagado com sucesso" };
  }
}

export { DeletarProdutosServices };
