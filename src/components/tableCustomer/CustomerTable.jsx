import React from 'react';
import MaterialTable from 'material-table'

const CustomerTable = () => {

  const columns =  [
    {
      title: "Id",
      field: "id"
    },
    {
      title: "Name",
      field: "name"
    },
    {
      title: "PhoneNumber",
      field: "phone Number"
    },
    {
      title: "Identity Document",
      field: "identity Document"
    },

  ]


  return (
    <>
      <MaterialTable columns={columns} />
    
    </>
  )
}

export {CustomerTable}