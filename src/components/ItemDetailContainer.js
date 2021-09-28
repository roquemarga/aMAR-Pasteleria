import React, { useEffect, useState } from 'react'
import { fetchProducto } from './Productos'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {

        fetchProducto()
        .then(resp => setProducto(resp))

    }, [])

    return (
        <div>
            <ItemDetail key={producto.id} producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
