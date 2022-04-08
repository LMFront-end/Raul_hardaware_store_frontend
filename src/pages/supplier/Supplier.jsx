import { NavbarPages } from '../../components/navbarPages/NavbarPages'
import {SupplierTable} from "../../components/tableSupplier/SupplierTable";

const Supplier = () => {
    return(
        <>
        <NavbarPages />
            <h1 align="center">Supplier table</h1>
            <SupplierTable />
        </>
    )
}

export {Supplier}