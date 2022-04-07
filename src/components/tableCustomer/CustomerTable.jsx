import React, {useState} from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@mui/icons-material/GetApp';

const CustomerTable = () => {

  const [tableData, setTableData] = useState([
    {
      id: "1", name: "Lina", email: "holamundo@gmail.com", age: 23, "gender": "F", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "2", name: "Juan", email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "3", name: "Santiago", email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "4", name: "Pedro", email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "5", name: "Teo",  email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "6", name: "Teo",  email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    },
    {
      id: "7", name: "Juan",  email: "holamundo@gmail.com", age: 23, "gender": "M", city: "Calarca", phone: "1122334455", identity: "123654"
    }
  ]);

  const columns =  [

    {
      title: "Id",
      field: "id",
      filterPlaceholder: "Filter by id"
    },
    {
      title: "Name",
      field: "name",
      filterPlaceholder: "Filter by name"
    },
    {
      title: "Email",
      field: "email",
      align: "right",
      filterPlaceholder: "Filter by email"
    },
    {
      title: "Age",
      field: "age",
      defaultSort:"asc",
      filterPlaceholder: "Filter by age"
    },
    {
      title: "Gender",
      field: "gender",
      lookup:{M: "Male", F: "Female"},

    },
    {
      title: "City",
      field: "city",
      filterPlaceholder: "Filter by city"
    },
    {

      title: "Phone Number",
      field: "phone",
      align: "right",
      filterPlaceholder: "Filter by number"
    },
    {
      title: "Identity Document",
      field: "identity",
      filterPlaceholder: "Filter by identity"

    }
  ]


  return (
    <>
      <MaterialTable 
      title="Customer information" 
      columns={columns} 
      data={tableData}

      editable={{
        onRowAdd: (newRow) => new Promise((resolve, reject) => {
          setTableData([...tableData, newRow])
          
          setTimeout(() => resolve(), 500)

        }),

        onRowUpdate:(newRow, oldRow) => new Promise((resolve, reject) => {

          const updateData = [...tableData]
          updateData[oldRow.tableData.id] = newRow
          setTableData(updateData)

          setTimeout(() => resolve(), 500)

        }),

        onRowDelete: (selectRow) => new Promise((resolve, reject) => {

          const updateData = [...tableData]
          updateData.splice(selectRow.tableData.id, 1)
          setTableData(updateData)

          setTimeout(() => resolve(), 1000)

        })
      }}
      
      actions ={[
        {icon:() => <GetAppIcon />,
        tooltip: "Click me",
        onclick: (data) => console.log(data),
        //isFreeAction: true
      
      }
      ]}

      onSelectionChange={(selecteRows) => console.log(selecteRows)}

      options={{
        sorting:true, 
        search:true, 
        searchFieldAlignment: "right", 
        searchAutoFocus: true, 
        searchFieldVariant:"outlined", 
        filtering: true,
        pageSizeOptions:[2,5,10,20,30,40,50,100],
        showFirstLastPageButtons: true,
        exportButton: true,
        exportAllData: true,
        exportFileName: "customer table",
        addRowPosition: "first",
        actionsColumnIndex: -1,
        selection: true,
        showSelectAllCheckbox: false,
        showTextRowsSelected: false,
        grouping:true,
        columnsButton: true,
        selectionProps: rowData=>({
          disabled: false,
          color: "primary"
        })
      }}
      
      />
    </>
  )
}

export {CustomerTable}