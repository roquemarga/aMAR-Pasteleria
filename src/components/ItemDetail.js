import React from 'react'
import ItemCount from './ItemCount'
import { useCartContext } from '../context/cartContext'


const ItemDetail= ({producto}) => {

    // const [cantidad, setCantidad] = useState(0);
    const {addToCart} = useCartContext()
    
    // const {state} = useContext(ContextApp)

    const onAdd = (cantidad) => {
        // setCantidad(cantidad)
        addToCart({producto: producto, cantidad: cantidad})
        console.log(cantidad, "en el carrito");
    }

    // console.log(addToCart)

    return (
        <div>
            <img src= {producto?.foto} style={{ height: 300, weith: 150 }} alt="foto" className= "w-30 h-30"/>
            <h2>{producto?.nombre}</h2>
            <h4>{producto?.descrip}</h4>
            <h2>{producto?.precio}</h2>
            <ItemCount stock={12} initial={1} onAdd={onAdd} />
        </div>
    )
}

export default ItemDetail

//BORRADOR DE BOTON DETALLES

/* const {productoDetalle} = useParams()
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        if(productoDetalle) {
            fetch
            .then(respuesta => {
                setProductos(respuesta.filter (prod => prod.id === producto.id))
    
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
        
    }, [producto]) */

    /*     const detalleProducto = (productos) => {
        {productos.filter(producto => producto.id) }
        console.log(detalleProducto)
    } */

