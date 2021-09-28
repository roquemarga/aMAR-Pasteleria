import React from 'react'
import {useState} from "react"
import {fetch} from "./Productos"
import ItemList from './ItemList'
import { useEffect } from 'react'
import {useParams} from "react-router-dom"

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    
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
        
    console.log(idCategoria)

    
    return (
        <div>
            <h2>{greeting}</h2>
            {loading ? <div>Cargando</div> : <ItemList productos={productos} />}
        </div>
    )
}

export default ItemListContainer
