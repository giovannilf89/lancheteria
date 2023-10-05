import { Request, Response } from "express";
import { CriarClienteServices } from "../../services/clientes/CriarClientesServices";

class CriarClientesController{
    async handle(req: Request, res: Response){
        const {nome, cpf_cnpj, rg_ie, celular, fixo, rua, complemento, bairro, cidade, estado} = req.body

        const criarClienteServices = new CriarClienteServices()
        const clientes = await criarClienteServices.execute ({
            nome,
            cpf_cnpj,
            rg_ie,
            celular,
            fixo,
            rua,
            complemento,
            bairro,
            cidade,
            estado
        })
        return res.json(clientes)
    }
}

export {CriarClientesController}