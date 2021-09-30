import { useState, createContext, useContext } from "react"


const cartContext = createContext()

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {

    const [cartList, setCartList] = useState([])

    function addToCart (producto) {
        setCartList([...cartList, producto])
    }
    console.log(cartList)
    return(
        <cartContext.Provider value= {{cartList, addToCart}}>
            {children}
        </cartContext.Provider>
    )
}