import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerCliente, editarCliente } from "../data/clientes";
import Error from "../components/Error";

const EditarCliente = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [notas, setNotas] = useState("");

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [clienteResultado, setClienteResultado] = useState({});

  const navigate = useNavigate();
  const parametros = useParams();

  useEffect(() => {
    const obteniendoCliente = async () => {
      try {
        const cliente = await obtenerCliente(parametros.clienteId);
        setClienteResultado(cliente);

        if (Object.values(cliente).length === 0) {
          setError(true);
          setMensaje("Cliente no existe");
        } else {
          setNombre(cliente.nombre || "");
          setEmpresa(cliente.empresa || "");
          setEmail(cliente.email || "");
          setTelefono(cliente.telefono || "");
          setNotas(cliente.notas || "");
        }
      } catch (error) {
        console.error("Error al obtener cliente:", error);
        setError(true);
        setMensaje("Error al obtener cliente");
      }
    };

    obteniendoCliente();
  }, [parametros.clienteId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([nombre, empresa, email, telefono, notas].includes("")) {
      setError(true);
      setMensaje("Todos los campos son obligatorios");
      return;
    }

    try {
      const updatedData = {
        nombre,
        empresa,
        email,
        telefono,
        notas,
      };

      await editarCliente(parametros.clienteId, updatedData);

      setNombre("");
      setEmpresa("");
      setEmail("");
      setTelefono("");
      setNotas("");

      navigate("/");
    } catch (error) {
      console.error("Error al editar cliente:", error);
      setError(true);
      setMensaje("Error al editar cliente");
    }
  };

  return (
    <>
      <div>
        <h1 className="font-black text-4xl text-blue-900">Editar Cliente </h1>

        <p className="mt-3">
          Llena todos los campos para editar un cliente existente.
        </p>

        <div className="flex justify-end">
          <button
            className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
            onClick={() => navigate("/")}
          >
            Volver
          </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          {error && (
            <p className="text-center my-4 bg-red-600 text-white font-bold p-3 uppercase">
              {mensaje}
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="nombre">
                Nombre:
              </label>
              <input
                id="nombre"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Nombre del Cliente"
                name="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="text-gray-800" htmlFor="empresa">
                Empresa:
              </label>
              <input
                id="empresa"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Empresa del Cliente"
                name="empresa"
                value={empresa}
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-800" htmlFor="email">
                E-mail:
              </label>
              <input
                id="email"
                type="email"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Email del Cliente"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-800" htmlFor="telefono">
                Teléfono:
              </label>
              <input
                id="telefono"
                type="tel"
                className="mt-2 block w-full p-3 bg-gray-50"
                placeholder="Teléfono del Cliente"
                name="telefono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="text-gray-800" htmlFor="notas">
                Notas:
              </label>
              <textarea
                as="textarea"
                id="notas"
                type="text"
                className="mt-2 block w-full p-3 bg-gray-50 h-40 align-self"
                placeholder="Notas del Cliente"
                name="notas"
                value={notas}
                onChange={(e) => setNotas(e.target.value)}
              />
            </div>

            <input
              type="submit"
              className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg"
              value="Editar cliente"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditarCliente;
