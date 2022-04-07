import React from 'react'
import { CustomerTable } from '../../components/tableCustomer/CustomerTable'
import { NavbarPages } from '../../components/navbarPages/NavbarPages'


const Customers = () => {
  return (
      <>
        <NavbarPages />
        <h1 align="center">Customer table</h1>
        <CustomerTable />
    </>
  )
}

export {Customers}