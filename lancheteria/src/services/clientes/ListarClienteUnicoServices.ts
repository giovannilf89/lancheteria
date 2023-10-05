import prismaClient from "../../../prisma";

interface ListarCliente {
  id: string;
}

class ListarClienteUnicoServices {
  async execute({ id }: ListarCliente) {
    const resposta = await prismaClient.client.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        nome: true,
        cpf_cnpj: true,
        rg_ie: true,
        celular: true,
        fixo: true,
        rua: true,
        complemento: true,
        bairro: true,
        cidade: true,
        estado: true,
      },
    });
    return resposta;
  }
}

export { ListarClienteUnicoServices };
