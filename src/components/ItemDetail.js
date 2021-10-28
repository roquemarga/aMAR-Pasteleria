import { useCartContext } from '../context/cartContext'
import ItemCount from './ItemCount'
import Card from "react-bootstrap/Card"

const ItemDetail= ({producto}) => {

    const {addToCart} = useCartContext()
    

    const onAdd = (cantidad) => {
        addToCart({...producto, cantidad: cantidad})
        console.log(cantidad, "en el carrito");
    }


    return (
        <div>
            <div className="justify-content-center border-top border-secondary border-1 border-top border-secondary border-2 py-2">
            <Card style={{ width: '18rem'}} className="mx-auto text-center shadow border-4 fade-in p-0">
                <div className="overflow border-bottom border-3">
                    <Card.Img variant="top" src={producto?.foto} />
                </div>
                <Card.Body className="bg-gray-100">
                    <Card.Title className="fst-italic">{producto?.nombre}</Card.Title>
                    <Card.Text className="fw-light">{producto?.descrip}</Card.Text>
                    <Card.Title>$ {producto?.precio}</Card.Title>
                    <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                </Card.Body>
            </Card>
            </div>
        </div>

    )
}

export default ItemDetail