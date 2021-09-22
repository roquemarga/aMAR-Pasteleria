import React from 'react'

const Item= ({producto}) => {
    return (
        <div>
            <div key= {producto.id} className= "card d-flex w-40 mt-3" >
                <div className= "card-header">{producto.nombre}</div>
                <div className= "card-boady"><img src={producto.foto} style={{ height: 300, weith: 150 }} alt="foto" className= "w-30 h-30"/></div>
                <div className= "card-footer">
                    <button className= "btn btn-important">Detalles</button>
                </div>
            </div>
        </div>
    )
}


export default Item
