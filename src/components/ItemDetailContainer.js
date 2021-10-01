import React, { useEffect, useState } from 'react'
import { fetchProducto, fetchProductos } from './Productos'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducto
        .then (resp => setProducto(resp))
    
    }, [])

    const [productos, setProductos] = useState({})
    
    // const {productoId} = useParams()
    
    useEffect(() => {
        fetchProductos
        .then(prod => prod.id === producto.id)
        setProductos(productos, producto)
    }, [])

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
            <ItemDetail key= {producto} producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
