import prismaClient from "../../../prisma";

interface AlterarCliente {
  id: string;
  alteraNome: string;
  alteraCpf: string;
  alteraRg: string;
  alteraCelular: string;
  alteraFixo: string;
  alteraRua: string;
  alteraComplemento: string;
  alteraBairro: string;
  alteraCidade: string;
  alteraEstado: string;
}
class AlterarClienteServices {
  async execute({
    id,
    alteraNome,
    alteraCpf,
    alteraRg,
    alteraCelular,
    alteraFixo,
    alteraRua,
    alteraComplemento,
    alteraBairro,
    alteraCidade,
    alteraEstado,
  }: AlterarCliente) {
    // console.log(id)
    await prismaClient.client.update({
      where: {
        id: id,
      },
      data: {
        nome: alteraNome,
        cpf_cnpj: alteraCpf,
        rg_ie: alteraRg,
        celular: alteraCelular,
        fixo: alteraFixo,
        rua: alteraRua,
        complemento: alteraComplemento,
        bairro: alteraBairro,
        cidade: alteraCidade,
        estado: alteraEstado,
      },
    });
    return { dados: "Dados Alterados com sucesso" };
  }
}
export { AlterarClienteServices };
