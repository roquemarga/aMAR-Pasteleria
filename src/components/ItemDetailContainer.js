import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore } from '../services/getFirebase'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [producto, setProducto] = useState(null)

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let timer = setTimeout(() => {
                setLoading(loading)
            }, 2000)
        return () =>{ 
            clearTimeout(timer)
        }
    }, [loading])


    useEffect(() => {

        const extraerProdFb = getFirestore()
        extraerProdFb.collection("productos").doc(id).get()
        .then(resp => setProducto({producto: resp.id , ...resp.data()}))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))



    }, [id])



    return (
        <div>
            {loading ? <div className="text-center fst-italic shadow border-5 m-2"> Cargando... </div> : <ItemDetail producto= {producto}/>}
        </div>
    )
}

export default ItemDetailContainer
