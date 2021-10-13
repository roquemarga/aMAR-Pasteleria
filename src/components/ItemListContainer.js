import React from 'react'
import {useState, useEffect} from "react"
import {fetchProductos} from "./Productos"
import ItemList from './ItemList'
import {useParams} from "react-router-dom"
import { getFirestore } from '../services/getFirebase'

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    
    useEffect(() => {

        const extraerProdFb = getFirestore()

        const newProdFb = idCategoria ? 
                                extraerProdFb.collection("productos").where("categoria", "==" , idCategoria)
                            :
                                extraerProdFb.collection("productos")

        newProdFb.get()                        
        .then(resp => {

            setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()} )))
        
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))


        /* if(idCategoria) {
            fetchProductos
            .then(respuesta => {
                setProductos(respuesta.filter (prod => prod.categoria === idCategoria))
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }else{
            fetchProductos
            .then(respuesta => {
                setProductos(respuesta)
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        } */
        
    }, [idCategoria])
        
    // console.log(idCategoria)

    
    return (
        <div>
            <h2>{greeting}</h2>
            {loading ? <div>Cargando</div> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer
