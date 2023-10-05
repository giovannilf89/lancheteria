import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiBack from "../../services/apiBack";
import { toast } from "react-toastify";

export default function AlterarCliente() {
  const { id } = useParams();
  const [listaCliente, setListaCliente] = useState("");
  const [alteraNome, setAlteraNome] = useState("");
  const [alteraCpf, setAlteraCpf] = useState("");

  useEffect(() => {
    async function listaCliente() {
      const resposta = await apiBack.get(`/ListarClienteUnico/${id}`);
      setListaCliente(resposta.data);
    }
    listaCliente();
  }, []);

  useEffect(() => {
    setAlteraNome(listaCliente.nome);
    setAlteraCpf(listaCliente.cpf_cnpj);
  }, [listaCliente]);

  async function AlterarCliente(e) {
    e.preventDefault();
    const resposta = await apiBack.put(`/AlterarCliente`, {
      id,
      alteraNome,
      alteraCpf,
    });
    toast.info(resposta.data.dados);
  }

  return (
    <div>
      <h1>Alterar Cliente</h1>
      <div>
        <form onSubmit={AlterarCliente}>
          <label>Nome:</label>
          <input
            type="text"
            value={alteraNome}
            onChange={(e) => setAlteraNome(e.target.value)}
          />
          <br />
          <label>CPF ou CNPJ</label>
          <input
            type="text"
            value={alteraCpf}
            onChange={(e) => setAlteraCpf(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
