const products =  [
    { 
        id: '1', 
        name: 'Vans', 
        price: 20000, 
        category: 'Vans', 
        img:'/images/vans.jpg' , 
        stock: 10, 
        description:'Descripcion pendiente'
    },
    { 
        id: '2',
        name: 'Vans Botita', 
        price: 20000, 
        category: 'Vans', 
        img:'/images/vans1.jpg', 
        stock: 6, 
        description:'Descripcion pendiente'
    },
    {
        id: '3', 
        name: 'Nike jordan', 
        price: 17000, 
        category: 'Nike', 
        img:'/images/nike3.jpg', 
        stock: 5, 
        description:'Descripcion pendiente'
},
{ 
        id: '4', 
        name: 'Converse rojas', 
        price: 12000, 
        category: 'Converse', 
        img:'/images/converse.jpg', 
        stock: 6, 
        description:'Descripcion pendiente'
},
{ 
        id: '5', 
        name: 'Converse', 
        price: 12500, 
        category: 'Converse', 
        img:'/images/converse2.jpg', 
        stock: 4, 
        description:'Descripcion pendiente'
},
{
        id: '6', 
        name: 'Nike ', 
        price: 22000, 
        category: 'nike', 
        img:'/images/nike2.jpg', 
        stock: 1, 
        description:'Descripcion pendiente'
}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find (prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}