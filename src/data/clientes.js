import { redirect } from "react-router-dom"

export async function obtenerClientes(){
    const respuesta = await fetch( import.meta.env.VITE_URL_BASE)
    const resultado = await respuesta.json()
    // console.log(resultado)
    return resultado
}

export async function obtenerCliente(id){
    const respuesta = await fetch( `${import.meta.env.VITE_URL_BASE}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}

export async function agregarCliente(datos){
    try {
        const respuesta = await fetch(import.meta.env.VITE_URL_BASE, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const da = await respuesta.json()
    
    } catch (error) {
        console.log(error)
    }
}


export async function editarCliente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_URL_BASE}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        
        const da = await respuesta.json()
    
    } catch (error) {
        console.log(error)
    }
}

export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_URL_BASE}/${id}`, {
            method: 'DELETE',
        })
        
        const da = await respuesta.json()
    
    } catch (error) {
        console.log(error)
    }
}