import { createContext, useState } from "react"

export const BillContext = createContext(null)

export const BillContextProvider = ({children}) =>{

    const [customer, setCustomer] = useState({})
    const [products, setProducts] = useState({list: []})
    const [cart, setCart] = useState({list:[]})


    const addProduct = (item) => {
        let outList = products.list
        outList.push(item)
        setProducts({
            ...products,
            list: outList
        })
    }

    const fillProducts = (list) => {
        setProducts({
            ...products,
            list: list
        })
    }

    const addToCart = (item) => {
        let outList = cart.list
        outList.push(item)
        setCart({...cart, list: outList})
    }



    return <BillContext.Provider value={{customer, setCustomer, products, addProduct, fillProducts, cart, addToCart}}>
        {children}
    </BillContext.Provider>

}