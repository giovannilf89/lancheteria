import React, { useState, useEffect } from "react";
import "./produto.css";
import apiBack from "../../services/apiBack";

function CadProduto() {
  const [mostraCat, setMostraCat] = useState([""]);
  const [nome, setNome] = useState("");
  const [fabricante, setFabricante] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  function cadastro(e) {
    e.prevent.Default();
    if (!nome || !fabricante || !quantidade || !preco) {
      alert("Campos em branco");
      return;
    }
    alert(
      `Nome: ${nome} \n Fabricante: ${fabricante} \nQuantidade: ${quantidade} \nPreco: ${preco}`
    );
  }

  useEffect(() => {
    async function CatList() {
      const response = await apiBack.get("/ListarCategorias");
      setMostraCat(response.data);
    }
    CatList();
  }, []);

  return (
    <div className="produto">
      <form onSubmit={cadastro}>
        <h1>Cadastro de Produtos</h1>
        <select>
          {mostraCat.map((categoria) => {
            return (
              <option value="" key="">
                {categoria.nome}
              </option>
            );
          })}
        </select>
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <br />
        <label>Fabricante: </label>
        <input
          type="text"
          value={fabricante}
          onChange={(e) => setFabricante(e.target.value)}
        ></input>
        <br />
        <label>Quantidade: </label>
        <input
          type="number"
          value={quantidade}
          onChange={(e) => setQuantidade(e.target.value)}
        ></input>
        <br />
        <label>Preco: </label>
        <input
          type="number"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
        ></input>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CadProduto;
