import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import Clientes from "./pages/Clientes";
import NuevoCliente from "./pages/NuevoCliente";
import EditarCliente from "./pages/EditarCliente";
import Error404 from "./pages/Error404";

// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Clientes />} /> /*pagina principal */
            {/* <Route path='nuevo-cliente'element={</>}/> */}
            <Route path="cliente/nuevo" element={<NuevoCliente /> }  />
            <Route path="cliente/:clienteId/editar" element={<EditarCliente /> }  />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
