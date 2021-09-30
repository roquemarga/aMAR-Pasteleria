import React from "react";
import { useCartContext } from "../context/cartContext";

const Cart = () => {
    
    const {cartList} = useCartContext()
    console.log(cartList)
    return (
        <div>
            <center>
                {cartList.map(producto =>   <div key={producto.id}>
                                                <h3>{producto.producto.nombre}</h3>
                                            </div>)}
            </center>

        </div>
    )
}

export default Cart
