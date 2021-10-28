import { useState, createContext, useContext } from "react"


const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {

    const [cartList, setCartList] = useState([])

    const [totalAPagar, setTotalAPagar] = useState(0)

    const [cantidadProdTotal, setCantidadProdTotal] = useState(0)

    const [cantidadAlterada, setCantidadAlterada] = useState()

    const addToCart = (productoYCantidad) => {

        if(cartList.find(prod => prod.nombre === productoYCantidad.nombre)) {
            let prodInicio = cartList.findIndex(item => item.nombre === productoYCantidad.nombre)
            cartList[prodInicio].cantidad = cartList[prodInicio].cantidad + productoYCantidad.cantidad
            setCartList(cartList)
        }else{
            setCartList([...cartList, productoYCantidad])
        }
        setCantidadProdTotal(cantidadProdTotal + productoYCantidad.cantidad)
        setTotalAPagar(totalAPagar + productoYCantidad.cantidad * productoYCantidad.precio)
    }

    const borrarProd = (producto, e) => {
        e.preventDefault()
        setCantidadProdTotal(cantidadProdTotal - producto.cantidad)
        setTotalAPagar(totalAPagar - producto.cantidad * producto.precio)
        setCartList(cartList.filter(borrarItem => borrarItem !== producto))
    }

    const restarProd = (producto, e) => {
        e.preventDefault()
        if(producto.cantidad > 0){
            let prodInicio = cartList.findIndex(item => item.nombre === producto.nombre)
            cartList[prodInicio].cantidad = cartList[prodInicio].cantidad - 1
            setCartList(cartList)
            setCantidadAlterada(cartList[prodInicio].cantidad)
            setCantidadProdTotal(cantidadProdTotal - 1)
            setTotalAPagar(totalAPagar - 1 * producto.precio)

        }
    }

    const sumarProd = (producto, e) => {
        e.preventDefault()
        if(producto.cantidad < producto.stock) {
            let prodInicio = cartList.findIndex(item => item.nombre === producto.nombre)
            cartList[prodInicio].cantidad = cartList[prodInicio].cantidad + 1
            setCartList(cartList)
            setCantidadAlterada(cartList[prodInicio].cantidad)
            setCantidadProdTotal(cantidadProdTotal + 1)
            setTotalAPagar(totalAPagar + 1 * producto.precio)

        }
    }

    const borrarList = (e) => {
        e.preventDefault()
        setCartList([])
        setCantidadProdTotal(0)
    }
    




    return(
        <cartContext.Provider value= {{cartList, totalAPagar, cantidadProdTotal, cantidadAlterada, 
                                        setCantidadAlterada, addToCart, borrarList, sumarProd, borrarProd, restarProd}}>
            {children}
        </cartContext.Provider>
    )
}