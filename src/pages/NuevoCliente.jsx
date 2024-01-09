import { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { agregarCliente } from "../data/clientes";
import Error from "../components/Error";

const NuevoCliente = () => {
  const [nombre, setNombre] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [notas, setNotas] = useState("");

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState('')


  const navigate = useNavigate();

  const handleSubmit =   (e) => {
    e.preventDefault();

    if ([nombre, empresa, email, telefono, notas].includes("")) {
      setError(true);
      setMensaje('Todos los campos son obligarorios')
      return
    }
    setError(false)

    const myData = {
      nombre,
      empresa,
      email,
      telefono,
      notas
    }
 
    // const formData = new FormData()

    // formData.append("nombre", nombre)
    // formData.append("empresa", empresa)
    // formData.append("email", email)
    // formData.append("telefono", telefono)
    // formData.append("notas", notas)
    // formData.append("myData", JSON.stringify(myData))


    setNombre('')
    setEmpresa('')
    setEmail('')
    setTelefono('')
    setNotas('')

    agregarCliente(myData)

    navigate('/')


  };

  return (
    <>
      <div>
        <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>

        <p className="mt-3">
          LLena todo los campos para registrar un nuevo cliente
        </p>

        <div className="flex justify-end">
          <button
            className=" bg-blue-800 text-white px-3 py-1 font-bold uppercase "
            onClick={() => navigate("/")}
          >
            volver
          </button>
        </div>

        <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
          {error && <Error><p>{mensaje}</p></Error>}
          <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
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
              className="mt-5 w-full bg-blue-800 p-3 uppercase  font-bold text-white text-lg"
              value="Registar cliente"
            ></input>
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoCliente;
