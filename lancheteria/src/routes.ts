import { Router } from "express";
import { CriarClientesController } from "./controllers/clientes/CriarClientesController";
import { ListarClientesController } from "./controllers/clientes/ListarClientesController";
import { CriarUsuarioController } from "./controllers/usuarios/CriarUsuarioController";
import { CriarProdutosController } from "./controllers/produtos/CriarProdutosController";
import { ListarUsuariosController } from "./controllers/usuarios/ListarUsuarioController";
import { ListarProdutosController } from "./controllers/produtos/ListarProdutosController";
import { DeletarUsuariosController } from "./controllers/usuarios/DeletarUsuariosController";
import { DeletarClientesController } from "./controllers/clientes/DeletarClientesController";
import { DeletarProdutosController } from "./controllers/produtos/DeletarProdutosController";
import { ListarUsuarioUnicoController } from "./controllers/usuarios/ListarUsuarioUnicoController";
import { AlterarUsuarioController } from "./controllers/usuarios/AlteraUsuarioController";
import { AlterarClienteController } from "./controllers/clientes/AlterarClientesController";
import { ListarClienteUnicoController } from "./controllers/clientes/ListarClienteUnicoController";
import { ListarProdutoUnicoController } from "./controllers/produtos/ListarProdutosUnicoController";
import { AlteraProdutoController } from "./controllers/produtos/AlteraProdutosController";
import { AutenticaUsuarioController } from "./controllers/usuarios/AutenticaUsuarioController";
import { CriarCategoriasController } from "./controllers/categorias/CriarCategoriasController";

import multer from "multer"; // importação com chaves, sem importação default
import uploadConfig from "./config/multer"; // caminhar relativo, começa no diretorio / absoluto começa na raiz
import { ListarCategoriasController } from "./controllers/categorias/ListarCategoriasController";

import { isAutenticado } from "./middleware/isAutenticado";

const router = Router();
const upload = multer(uploadConfig.upload("./tmp")); // uma constante para cada caminho (ex: carro, moto)
//Usuarios
router.post("/CriarUsuarios", new CriarUsuarioController().handle); // POST parametro ou body
router.get(
  "/ListarUsuario",
  isAutenticado,
  new ListarUsuariosController().handle
); // GET sempre envia por parametro
router.get(
  "/ListarUsuarioUnico/:id",
  isAutenticado,
  new ListarUsuarioUnicoController().handle
);
router.delete(
  "/DeletarUsuario",
  isAutenticado,
  new DeletarUsuariosController().handle
);
router.put(
  "/AlterarUsuario",
  isAutenticado,
  new AlterarUsuarioController().handle
);
router.post("/AutenticaUsuario", new AutenticaUsuarioController().handle);

//Clientes
router.post("/CriarClientes", new CriarClientesController().handle);
router.get("/ListarClientes", new ListarClientesController().handle);
router.get(
  "/ListarClienteUnico/:id",
  new ListarClienteUnicoController().handle
);
router.delete("/DeletarCliente", new DeletarClientesController().handle);
router.put("/AlterarCliente", new AlterarClienteController().handle);

//Produtos
router.post(
  "/CriarProdutos",
  upload.single("file"), // enviar arquivo unico
  new CriarProdutosController().handle
);
router.get("/ListarProdutos", new ListarProdutosController().handle);
router.delete("/DeletarProduto", new DeletarProdutosController().handle);
router.get(
  "/ListarProdutoUnico/:id",
  new ListarProdutoUnicoController().handle
);
router.put("/AlterarProduto", new AlteraProdutoController().handle);
export { router };

//Categorias
router.post("/CriarCategorias", new CriarCategoriasController().handle);
router.get("/ListarCategorias", new ListarCategoriasController().handle);
