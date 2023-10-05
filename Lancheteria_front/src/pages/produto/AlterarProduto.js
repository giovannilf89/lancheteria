import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiBack from "../../services/apiBack";
import { toast } from "react-toastify";

export default function AlterarProduto() {
  const { id } = useParams();
  const [listaProduto, setListaProduto] = useState("");
  const [alteraNome, setAlteraNome] = useState("");
  const [alteraFabricante, setAlteraFabricante] = useState("");
  const [alteraQuantidade, setAlteraQuantidade] = useState("");
  const [alteraPreco, setAlteraPreco] = useState("");

  useEffect(() => {
    async function listaProduto() {
      const resposta = await apiBack.get(`/ListarProdutoUnico/${id}`);
      setListaProduto(resposta.data);
    }
    listaProduto();
  }, []);

  useEffect(() => {
    setAlteraNome(listaProduto.nome);
    setAlteraFabricante(listaProduto.fabricante);
    setAlteraQuantidade(listaProduto.quantidade);
    setAlteraPreco(listaProduto.preco);
  }, [listaProduto]);

  async function AlterarProduto(e) {
    e.preventDefault();
    const resposta = await apiBack.put(`/AlterarProduto`, {
      id,
      alteraNome,
      alteraFabricante,
      alteraQuantidade,
      alteraPreco,
    });
    toast.info(resposta.data.dados);
  }

  return (
    <div>
      <h1>Alterar Produto</h1>
      <div>
        <form onSubmit={AlterarProduto}>
          <label>Nome: </label>
          <input
            type="text"
            value={alteraNome}
            onChange={(e) => setAlteraNome(e.target.value)}
          />
          <br />
          <label>Fabricante: </label>
          <input
            type="text"
            value={alteraFabricante}
            onChange={(e) => setAlteraFabricante(e.target.value)}
          />
          <br />
          <label>Quantidade: </label>
          <input
            type="text"
            value={alteraQuantidade}
            onChange={(e) => setAlteraQuantidade(e.target.value)}
          />
          <br />
          <label>Preco: </label>
          <input
            type="text"
            value={alteraPreco}
            onChange={(e) => setAlteraPreco(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
