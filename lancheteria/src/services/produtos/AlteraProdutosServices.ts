import prismaClient from "../../../prisma";

interface AlterarProduto {
  id: string;
  alteraNome: string;
  alteraFabricante: string;
  alteraQuantidade: string;
  alteraPreco: string;
}

class AlteraProdutoServices {
  async execute({
    id,
    alteraNome,
    alteraFabricante,
    alteraQuantidade,
    alteraPreco,
  }: AlterarProduto) {
    // console.log(id);
    await prismaClient.produtos.update({
      where: {
        id: id,
      },
      data: {
        nome: alteraNome,
        fabricante: alteraFabricante,
        quantidade: alteraQuantidade,
        preco: alteraPreco,
      },
    });
    return { dados: "Dados Alterados com sucesso" };
  }
}

export { AlteraProdutoServices };
