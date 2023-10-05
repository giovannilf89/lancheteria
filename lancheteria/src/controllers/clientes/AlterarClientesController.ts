import { Request, Response } from "express";
import { AlterarClienteServices } from "../../services/clientes/AlterarClientesServices";

class AlterarClienteController {
  async handle(req: Request, res: Response) {
    const {
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
    } = req.body;

    const alterarClienteService = new AlterarClienteServices();
    const resposta = await alterarClienteService.execute({
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
    });
    return res.json(resposta);
  }
}

export { AlterarClienteController };
