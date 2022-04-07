import React, {useState} from 'react';
import MaterialTable from 'material-table'

const CustomerTable = () => {

  const [tableData, setTableData] = useState([]);

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

      title: "Phone Number",

      title: "PhoneNumber",

      field: "phone Number"
    },
    {
      title: "Identity Document",
      field: "identity Document"

    }
  ]


  return (
    <>
      <MaterialTable columns={columns} />
    </>
  )
}

export {CustomerTable}