import { CustomerTable } from '../../components/tableCustomer/CustomerTable'
import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import {ProductTable} from "../../components/productTable/ProductTable";


const ListProducts = () => {

    return (
        <>
            <NavbarPages />
            <h1 align="center">Customer table</h1>
            <ProductTable />
        </>
    )
}

export {ListProducts}