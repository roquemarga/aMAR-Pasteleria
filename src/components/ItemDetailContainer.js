import React, { useEffect, useState } from 'react'
import { fetchProducto } from './Productos'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducto
        .then (resp => setProducto(resp))
    
    }, [])


    // const {productoId} = useParams()

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
