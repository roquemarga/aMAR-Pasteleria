import {Link} from "react-router-dom"
import { useCartContext } from '../../context/cartContext'
import Container from 'react-bootstrap/Container'

function CartWidget() {

    const {cantidadProdTotal} = useCartContext()

    return (
        <> 
        <Container className="cartWidget d-block text-center mt-1">
        <Link to= "/cart">
            <img style={{width: "25px"}} src="https://cdn-icons-png.flaticon.com/512/2890/2890766.png" alt="carrito de compras" />
            </Link>
            {cantidadProdTotal !== 0 && <div className="text-danger align-middle cart-number ms-1 my-0">{cantidadProdTotal}</div>}
        </Container> 
        </>
    )
}

export default CartWidget
