import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchProducto } from './Productos'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

/*     const [producto, setProducto] = useState({})

    // const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetchProducto
        .then (resp => setProducto(resp))
    
    }, []) */

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
                setLoading(loading)
            }, 2000)
        return () =>{ 
            clearTimeout(timer)
        }
    }, [loading])

    const {productoId} = useParams()

    const [producto, setProducto] = useState(null)

    let promesaProd = new Promise ((resp) => {
        setTimeout(() => {
            resp(fetchProducto(parseInt(productoId)))
        })
    })

    useEffect(() => {
        promesaProd
        .then ((resp) => setProducto(resp))
        
    }, [])

/*     const getProductos = () => {
        setProductos(fetchProductos[producto])
    }

    useEffect(() => {
        getProductos()
    
    }, [])
     */
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
            <ItemDetail producto= {producto}/>
        </div>
    )
}

export default ItemDetailContainer
