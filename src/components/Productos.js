const productos = [ {id: 11, categoria: "tartas", nombre: "havannet con choco blanco o semiamargo", descrip: "Base de masa sablee, dulce de leche y ganache de chocolate semiamargo o blanco", precio:"$2000", foto: "https://4.bp.blogspot.com/-cw_3LS5PxEc/V7he3kgJWCI/AAAAAAAABEY/iUgDLdubIjo7h7ppHJXqn6sfTSFvKUZoACLcB/s1600/DSC_0858.png"},
{id: 12, categoria: "tartas", nombre: "lemon pie", descrip: "Base de masa sablee, relleno de limon y en su cubierta merengue italiano", precio:"$2000", foto: "http://3.bp.blogspot.com/-w85a3FA59yA/Vk3HiZUIMyI/AAAAAAAAAHI/-5NJZi1eFJA/s1600/blog1.png"},
{id: 13, categoria: "tartas", nombre: "tarta frutal con crema chantilly o pastelera", descrip:"Masa de sablee de vainilla, crema pastelera o chantilly, dulce de leche y frutas de estacion", precio:"$2000", foto: "https://www.gourmet.cl/wp-content/uploads/2018/01/Tartaleta-frutos-rojos.jpg"},
{id: 14, categoria: "tartas", nombre: "tarta de frutillas con crema chantilly o pastelera", descrip: "Masa de sablee de vainilla, crema pastelera o chantilly, dulce de leche y frutillas", precio:"$2000", foto:"https://i.pinimg.com/564x/cd/07/6d/cd076d89bf804e8b180b30e2152dfa8e.jpg"},
]

export const fetch = new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000) 
})


const producto = {id: 12, categoria: "tartas", nombre: "lemon pie", descrip: "Base de masa sablee, relleno de limon y en su cubierta merengue italiano", precio:"$2000", foto: "http://3.bp.blogspot.com/-w85a3FA59yA/Vk3HiZUIMyI/AAAAAAAAAHI/-5NJZi1eFJA/s1600/blog1.png"}


export const fetchProducto = new Promise ((resolve) => {
    setTimeout(() => {
        resolve(producto)
    }, 2000) 
})