import React, { useEffect, useState } from 'react'
import { fetchProductos } from './Productos'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {

/*     const [producto, setProducto] = useState({})

    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducto
        .then (resp => setProducto(resp))
    
    }, []) */

    const {productoId} = useParams()

    const [productos, setProductos] = useState([])

    const getProductos = () => {
        setProductos(fetchProductos[productos])
    }

    useEffect(() => {
        getProductos()
    
    }, [])
    
    // const {productoId} = useParams()
    
/*     useEffect(() => {
        fetchProductos
        .then(prod => prod.id === producto.id)
        setProductos(productos, producto)
    }, []) */

/*     useEffect(() => {
        if(productoId) {
        fetch
        .then(resp => {
            setProducto(resp.filter(prod => prod.id === productoId))
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    
    }else{
        fetch
        .then(respuesta => {
            setProducto(respuesta)
    
        })
        .catch(error => console.log(error))
        .finally(()=> setLoading(false))
    
    }
    
    }, [productoId]) */

    return (
        <div>
            <ItemDetail producto= {productoId}/>
        </div>
    )
}

export default ItemDetailContainer
