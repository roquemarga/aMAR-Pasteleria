import { useCartContext } from "../context/cartContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import CloseButton from "react-bootstrap/CloseButton";
import Table from "react-bootstrap/Table";

const Cart = () => {
    
    const {cartList, totalAPagar, borrarList, borrarProd, sumarProd, restarProd} = useCartContext()
    

        
        return (
            
            <div className="text-center mt-4">

            {cartList.length === 0 ? 
            
            <div className="container mt-3 pt-3">
                    <h3 className="fst-italic">No hay productos agregados al carrito todavia...</h3>
                    <Link to="/">
                    <Button variant="success" className="m-1 shadow fw-light">Volver a la tienda</Button>
                    </Link>
            </div>
                    
            : 
            <div>
                <h3 className="text-dark my-4 fst-italic">Productos</h3>
                    <Table striped bordered hover size="sm" className="m-0 ">
                        <thead className="bg-warning text-light">
                            <tr className="fst-italic">
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th className="tableHide">Stock</th>
                            <th className="tableHide">Precio</th>
                            <th>Final</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartList.map(prodEnCarrito => 
                            <tr key={prodEnCarrito.id}>                    
                                <td className="fw-light">{prodEnCarrito.producto.nombre}</td>
                                <td className="h5">
                                <Button variant="warning" className="me-3 py-0 border-black tableHide" onClick={(e) => restarProd(prodEnCarrito, e)}>-</Button>
                                    {prodEnCarrito.cantidad}
                                <Button variant="warning" className="ms-3 py-0 border-black tableHide" onClick={(e) => sumarProd(prodEnCarrito, e)}>+</Button>
                                </td>
                                <td className="tableHide fw-light">{prodEnCarrito.producto.stock}</td>
                                <td className="tableHide fw-light">${prodEnCarrito.producto.precio}</td>
                                <td className="fw-light">$ {prodEnCarrito.cantidad * prodEnCarrito.precio}</td>
                                <td className="bg-danger" ><CloseButton onClick={(e) => borrarProd(prodEnCarrito, e)} aria-label="Hide" variant="light"/></td>
                            </tr>
                            
                        )}
                            
                            <tr>
                                <td colSpan="4" className="text-end text-warning fst-italic bg-light h4">Total</td>
                                <td className="text-warning fst-italic bg-light h4">${totalAPagar}</td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button variant="danger" className="m-3 fw-light shadow" onClick={borrarList}>Anular compra</Button>
                    <Link to="/CartForm">
                        <Button variant="success" className="m-3 fw-light shadow" type="submit">Pagar</Button>
                    </Link>
                </div>
                }
            </div>
        )
}         


export default Cart
