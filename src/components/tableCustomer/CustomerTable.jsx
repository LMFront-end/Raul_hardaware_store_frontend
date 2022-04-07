import React, {useState} from 'react';
import MaterialTable from 'material-table'

const CustomerTable = () => {

<<<<<<< HEAD
  const [tableData, setTableData] = useState([]);

  const columns = [

=======
  const columns =  [
>>>>>>> 256bc9ae3054bfb962d13286177dfd247091f989
    {
      title: "Id",
      field: "id"
    },
    {
      title: "Name",
      field: "name"
    },
    {
<<<<<<< HEAD
      title: "Phone Number",
=======
      title: "PhoneNumber",
>>>>>>> 256bc9ae3054bfb962d13286177dfd247091f989
      field: "phone Number"
    },
    {
      title: "Identity Document",
      field: "identity Document"
<<<<<<< HEAD
    }
  ]

  return (
    <>
    <MaterialTable title="Customer" columns={columns} data={tableData} />
=======
    },

  ]


  return (
    <>
      <MaterialTable columns={columns} />
    
>>>>>>> 256bc9ae3054bfb962d13286177dfd247091f989
    </>
  )
}

export {CustomerTable}