import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Inicio from "./pages/home/Inicio";
import Logar from "./pages/Logar/Logar";
import CadUsuario from "./pages/usuario/CadUsuario";
import CadCliente from "./pages/cliente/CadCliente";
import CadProduto from "./pages/produto/CadProduto";
import Listar_Usuario from "./pages/listar/listar_usuario";
import Listar_Cliente from "./pages/listar/listar_cliente";
import Listar_Produto from "./pages/listar/listar_produto";
import AlterarUsuario from "./pages/usuario/AlterarUsuario";
import AlterarCliente from "./pages/cliente/AlterarCliente";
import AlterarProduto from "./pages/produto/AlterarProduto";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/logar" element={<Logar />} />
        <Route path="/CadUsuario" element={<CadUsuario />} />
        <Route path="/CadCliente" element={<CadCliente />} />
        <Route path="/CadProduto" element={<CadProduto />} />
        <Route path="/Listar_cliente" element={<Listar_Cliente />} />
        <Route path="/Listar_usuario" element={<Listar_Usuario />} />
        <Route path="/Listar_produto" element={<Listar_Produto />} />
        <Route path="/AlterarUsuario/:id" element={<AlterarUsuario />} />
        <Route path="/AlterarCliente/:id" element={<AlterarCliente />} />
        <Route path="/AlterarProduto/:id" element={<AlterarProduto />} />
      </Routes>
    </BrowserRouter>
  );
}
