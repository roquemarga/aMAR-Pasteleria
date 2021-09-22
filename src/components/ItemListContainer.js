import React from 'react'
import ItemCount from './ItemCount'
import {useState} from "react"
import {fetch} from "./Productos"
import ItemList from './ItemList'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    
    console.log(productos)
    
    useEffect(() => {

        if(idCategoria) {
            fetch
            .then(respuesta => {
                setProductos(respuesta.filter (prod => prod.categoria === idCategoria))
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }else{
            fetch
            .then(respuesta => {
                setProductos(respuesta)
    
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))

        }
        
    }, [idCategoria])
        
    const [cantidad, setCantidad] = useState(0);
    
    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        console.log(cantidad, "en el carrito");
    }
    
    return (
        <div>
            <h2>{greeting}</h2>
            {loading ? <div>Cargando</div> : <ItemList productos={productos} />}
            <ItemCount stock={12} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemListContainer
