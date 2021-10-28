import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext';
import Container from 'react-bootstrap/Container';
import Form from "react-bootstrap/Form"
import Row from 'react-bootstrap/Row'

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [cantidad, setCantidad] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)
    
    const {setCantidadAlterada} = useCartContext()
    

    const sumar = () => {
        if(cantidad < stock){
            setCantidad (cantidad + 1)
        }else{
            alert("Supera stock. Te avisaremos cuando entren más!")
        }
    }

    const restar = () => {
        if(cantidad > 1){
            setCantidad(cantidad - 1)
        }
    }

    const agregarAlCarrito = () => {

        setCantidadAlterada(cantidad)
        setCambiarBoton(false)
        onAdd(cantidad)
    
    }


    return (
            <Container className="bg-warning pt-3 shadow text-center">
                { cambiarBoton ? 
                    <Form className="text-center d-inline-block">      
                        <Row className="align-items-center justify-content-center">                       
                            <Button className="p-0 bg-secondary text-dark shadow w-25" variant="warning" size="sm" onClick= {restar}>-</Button>
                            <Form.Text className="bg-white text-dark p-0 fs-5 w-25 text-center rounded">{cantidad}</Form.Text>
                            <Button className= "p-0 bg-secondary text-dark shadow w-25" variant="warning" size="sm" onClick={sumar}>+</Button>
                        </Row>
                            <Button variant="danger" className="my-3 shadow fw-light" size="sm" onClick = {agregarAlCarrito}>Agregar al carrito</Button>
                    </Form> 
                    :
                    <Container>
                        <Link to= "/cart">
                            <Button  variant="success" className="my-1 shadow fw-light" size="sm">Terminar compra</Button>
                        </Link>
                        <Link to= "/">
                        <Button variant="success" className="my-1 shadow fw-light" size="sm">Seguir comprando</Button>
                        </Link>
                    </Container>
                }
            </Container>
    )
}

export default ItemCount