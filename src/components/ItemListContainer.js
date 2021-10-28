import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import { getFirestore } from '../services/getFirebase'
import 'firebase/firestore'

import Container  from 'react-bootstrap/Container'
import ItemList from './ItemList'

function ItemListContainer({greeting}) {

    const [productos, setProductos] = useState([])

    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()

    
    useEffect(() => {

        const extraerProdFb = getFirestore()

        const newProdFb = idCategoria ? 
                                extraerProdFb.collection("productos").where("categoria", "==" , idCategoria)
                            :
                                extraerProdFb.collection("productos")

        newProdFb.get()                        
        .then(resp => {

            setProductos(resp.docs.map(producto => ({id: producto.id, ...producto.data()} )))
        
        })
        .catch(error => console.log(error))
        .finally(() => setLoading(false))



        
    }, [idCategoria])
        

    
    return (
        <div>
            <Container fluid className="d-flex row justify-content-center m-0 pt-3">
            <h2 className="fst-italic">{greeting}</h2>
            {loading ? <div className="text-center shadow border-5 m-2 fst-italic">Cargando</div> : <ItemList productos={productos} />}
            </Container>
        </div>
    )
}

export default ItemListContainer
