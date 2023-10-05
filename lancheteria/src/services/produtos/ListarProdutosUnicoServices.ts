import prismaClient from "../../../prisma";

interface ListarProduto {
  id: string;
}

class ListarProdutoUnicoServices {
  async execute({ id }: ListarProduto) {
    // console.log(id); // testar se esta recebendo front
    const resposta = await prismaClient.produtos.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        fabricante: true,
        quantidade: true,
        preco: true,
      },
    });
    return resposta;
  }
}

export { ListarProdutoUnicoServices };
