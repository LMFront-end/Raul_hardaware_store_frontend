import { createContext, useState } from "react"

export const BillContext = createContext(null)

export const BillContextProvider = ({children}) =>{

    const [customer, setCustomer] = useState({})
    const [products, setProducts] = useState({list: []})


    const addProduct = (item) => {
        setProducts({
            ...products,
            list: products.push(item)
        })
    }

    const fillProducts = (list) => {
        setProducts({
            ...products,
            list: list
        })
    }



    return <BillContext.Provider value={{customer, setCustomer, products, addProduct, fillProducts}}>
        {children}
    </BillContext.Provider>

}