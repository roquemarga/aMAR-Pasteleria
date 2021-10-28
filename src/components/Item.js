import React from 'react'
import { Link } from 'react-router-dom'
import Card from "react-bootstrap/Card"
import Button from 'react-bootstrap/Button'

const Item= ({producto}) => {


    return (
        
        <div>
            <div className="border-top border-secondary border-1 py-2">
            <Card style={{ width: '18rem'}} className="mx-auto text-center shadow border-4 fade-in p-0">
                <div className="overflow border-bottom border-3">
                    <Card.Img variant="top" src={producto?.foto} />
                </div>
                <Card.Body className="bg-gray-100">
                    <Card.Title className="fst-italic">{producto?.nombre}</Card.Title>
                    <Link to={`/producto/${producto.id}`}>
                        <Button variant="outline-warning" className="w-100 fw-lighter mx-0">Detalles</Button>
                    </Link>
                </Card.Body>
            </Card>
            </div>
        </div>
        
    )
}


export default Item
