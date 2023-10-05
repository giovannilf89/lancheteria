import React, { useState } from "react";
import "./cliente.css";

function CadCliente() {
  const [nome, setNome] = useState("");
  const [cpf_cnpj, setCpf_cnpj] = useState("");
  const [rg_ie, setRg_ie] = useState("");
  const [celular, setCelular] = useState("");
  const [fixo, setFixo] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");

  function cadastro(e) {
    e.prevent.Default();
    if (
      !nome ||
      !cpf_cnpj ||
      !rg_ie ||
      !celular ||
      !fixo ||
      !rua ||
      !complemento ||
      !bairro ||
      !cidade ||
      !estado
    ) {
      alert("Campos em branco");
      return;
    }
    alert(
      `Nome: ${nome} \nCpf_Cnpj: ${cpf_cnpj} \nRg_Ie: ${rg_ie} \nCelular: ${celular} \nFixo: ${fixo} \nRua: ${rua} \nComplemento: ${complemento} \n Bairro: ${bairro} \nCidade: ${cidade} \nEstado ${estado}`
    );
  }

  return (
    <div className="cliente">
      <form onSubmit={cadastro}>
        <h1>Cadastro de Clientes</h1>
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        ></input>
        <br />
        <label>CPF ou CNPJ: </label>
        <input
          type="number"
          value={cpf_cnpj}
          onChange={(e) => setCpf_cnpj(e.target.value)}
        ></input>
        <br />
        <label>RG ou IE: </label>
        <input
          type="number"
          value={rg_ie}
          onChange={(e) => setRg_ie(e.target.value)}
        ></input>
        <br />
        <label>Celular: </label>
        <input
          type="number"
          value={celular}
          onChange={(e) => setCelular(e.target.value)}
        ></input>
        <br />
        <label>Telefone fixo: </label>
        <input
          type="number"
          value={fixo}
          onChange={(e) => setFixo(e.target.value)}
        ></input>
        <br />
        <label>Rua: </label>
        <input
          type="text"
          value={rua}
          onChange={(e) => setRua(e.target.value)}
        ></input>
        <br />
        <label>Complemento: </label>
        <input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
        ></input>
        <br />
        <label>Bairro: </label>
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
        ></input>
        <br />
        <label>Cidade: </label>
        <input
          type="text"
          value={cidade}
          onChange={(e) => setCidade(e.target.value)}
        ></input>
        <br />
        <label>Estado: </label>
        <input
          type="text"
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
        ></input>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default CadCliente;
