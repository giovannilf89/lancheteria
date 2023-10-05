import prismaClient from "../../../prisma";

interface DeletarClientes {
  remover: string;
}

class DeletarClientesServices {
  async execute({ remover }: DeletarClientes) {
    await prismaClient.client.delete({
      where: {
        id: remover,
      },
    });
    return { dados: "Registro apagado com sucesso" };
  }
}

export { DeletarClientesServices };
