import { useState, useEffect } from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import apiBack from "../../services/apiBack";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function ListarCliente() {
  const [dados, setDados] = useState([""]);

  useEffect(() => {
    async function verDados() {
      const response = await apiBack.get("/ListarClientes");
      setDados(response.data);
    }
    verDados();
  }, [dados]);

  async function handleDelete(id) {
    const resposta = await apiBack.delete("/DeletarCliente", {
      data: {
        remover: id,
      },
    });
    toast.success(resposta.data.dados);
  }

  return (
    <div>
      <h1>Informações dos Clientes</h1>
      {dados.map((dado) => {
        return (
          <div>
            <h3>Nome do cliente</h3>
            <h3>{dado.nome}</h3>
            <h3>{dado.id}</h3>
            <h3>{dado.cpf_cnpj}</h3>
            <h3>{dado.rg_ie}</h3>
            <h3>{dado.celular}</h3>
            <h3>{dado.fixo}</h3>
            <h3>{dado.rua}</h3>
            <h3>{dado.complemento}</h3>
            <h3>{dado.bairro}</h3>
            <h3>{dado.cidade}</h3>
            <h3>{dado.estado}</h3>
            <strong>
              <Link to={`/AlterarCliente/${dado.id}`}>
                <BsFillPencilFill size="1rem" className="icon" />
              </Link>
              <BsFillTrashFill
                size="1rem"
                className="icon"
                onClick={() => handleDelete(dado.id)}
              />
            </strong>
          </div>
        );
      })}
    </div>
  );
}
