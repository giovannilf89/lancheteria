import prismaClient from "../../../prisma";

interface CriarCliente {
  nome: string;
  cpf_cnpj: string;
  rg_ie: string;
  celular: string;
  fixo: string;
  rua: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
}

class CriarClienteServices {
  async execute({
    nome,
    cpf_cnpj,
    rg_ie,
    celular,
    fixo,
    rua,
    complemento,
    bairro,
    cidade,
    estado,
  }: CriarCliente) {
    if (
      !nome ||
      !cpf_cnpj ||
      !rg_ie ||
      !celular ||
      !rua ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      throw new Error("Campos em branco não são permitidos");
    }

    const cpfCadastro = await prismaClient.client.findFirst({
      where: {
        OR: [
          {
            cpf_cnpj: cpf_cnpj,
          },
          {
            rg_ie: rg_ie,
          },
        ],
      },
    });

    if (cpfCadastro) {
      throw new Error("CPF ou RG ja cadastrado");
    }
    const cliente = await prismaClient.client.create({
      data: {
        nome: nome,
        cpf_cnpj: cpf_cnpj,
        rg_ie: rg_ie,
        celular: celular,
        fixo: fixo,
        rua: rua,
        complemento: complemento,
        bairro: bairro,
        cidade: cidade,
        estado: estado,
      },
    });
    return { dados: "dados salvos com sucesso" };
  }
}

export { CriarClienteServices };
