import React, {useState, useEffect, useContext} from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@mui/icons-material/GetApp';
import {URL_API} from "../../utils/data";
import { useNavigate } from "react-router-dom";
import {BillContext} from "../../context/bill/BillContext";

const CustomerTable = () => {

  const {setCustomer} = useContext(BillContext)
  const [tableData, setTableData] = useState({list:[]});
  const navigate = useNavigate();

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
      title: "City",
      field: "city",
      filterPlaceholder: "Filter by city"
    },
    {

      title: "Phone Number",
      field: "phoneNumber",
      align: "right",
      filterPlaceholder: "Filter by number"
    },
    {
      title: "Identity Document",
      field: "identityDocument",
      filterPlaceholder: "Filter by identity"

    }
  ]

  useEffect(() =>{
    fetch(URL_API + "/customers", {
      method: "GET"
    })
        .then(response => response.json()
            .then((list) => setTableData({...tableData, list: list})))
  },[])


  return (
    <>
      <MaterialTable 
      title="Customer information" 
      columns={columns} 
      data={tableData.list}

      editable={{
        onRowAdd: (newRow) => new Promise((resolve, reject) => {
          fetch(URL_API + "/customers/create", {
            method: "POST",
            body: JSON.stringify(newRow),
            headers: {"Content-Type": "application/json"}
          }).then(response => response.json()
              .then(value => {
                let result = tableData.push(value)
                setTableData({...tableData, list:result})}))
          setTimeout(() => resolve(), 500)

        }),

        onRowDelete: (selectRow) => new Promise((resolve, reject) => {
          console.log(URL_API + "/customers/delete/" + selectRow.id.toString())
          fetch(URL_API + "/customers/delete/" + selectRow.id.toString(),
              { method: "DELETE" })
              .then(response => {
                let updateData = tableData.list.filter(value => value.id !== selectRow.id)
                setTableData({...tableData, list: updateData})})
          setTimeout(() => resolve(), 1000)
        })
      }}
      
      actions ={[
        {icon:() => <GetAppIcon />,
        tooltip: "Sell to customer",
        onClick: (e, data) => {

          setCustomer(data[0])
          navigate("/bill")
        },
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
        exportFileName: "bill table",
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