import { useEffect, useState } from "react";
import { editarCliente, obtenerClientes } from "../data/clientes";
import { useNavigate } from "react-router-dom";
import { eliminarCliente } from "../data/clientes";


const Clientes = () => {

  const [clientes, setClientes] = useState({})
  const navitagate = useNavigate()

 useEffect(  ()  => {
  const cargarDatos = async () =>{

  const data = await obtenerClientes()
    setClientes(data)
  }

  cargarDatos()
});


 const handleEditar = (id) => {
  navitagate(`/cliente/${id}/editar`)
 }

 const handleEliminar = (id) => {
  eliminarCliente(id)
  navitagate('/')
 }


  return (
    <>
      <h1 className="font-black text-3xl text-blue-900">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
    {clientes.length ? (

      <table className="w-full bg-white shadow mt-5 table-auto rounded-t-lg">
        <thead className="bg-blue-800 text-white rounded-t-lg">
          <tr>
            <th className="p-2">Cliente</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

    
          
  
        <tbody>
          {clientes.map(cliente => (

           <tr key={cliente.id} className="border-b">
            <td className="p-6 space-y-1">
              <p className="text-1xl text-gray-800">{cliente.nombre}</p>
              <p className="">{cliente.empresa}</p>
            </td>

            <td className="p-6 ">
              <p className="text-1xl text-gray-600">
                <span className="text-gray-800 uppercase font-bold">
                  email: {" "}
                </span>
                {cliente.email}
              </p>
              <p className="text-1xl text-gray-600">
                <span className="text-gray-800 uppercase font-bold">Tel: </span>
                {cliente.telefono}
              </p>
            </td>

            <td className="p-6 flex gap-3">
              <button
                className="uppercase font-bold text-blue-600 hover:text-blue-700 text-xs"
                type="button"
                onClick={(e) => {
                  handleEditar(cliente.id)
                } }
              >
                Editar
              </button>
              <button
                className="uppercase font-bold text-red-600 hover:text-red-700 text-xs"
                type="button"
                onClick={(e) => {
                  handleEliminar(cliente.id)
                } }
              >
                Eliminar
              </button>
            </td>
          </tr> 

          ) )}
          


        </tbody>
      </table>
    ) : (
      <h2 className="text-center mt-10">Ho hay datos 2</h2>
    )}


    </>
  );
};

export default Clientes;
