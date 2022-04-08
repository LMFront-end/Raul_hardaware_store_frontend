import React, {useState, useEffect, useContext} from 'react';
import MaterialTable from 'material-table';
import GetAppIcon from '@mui/icons-material/GetApp';
import {URL_API} from "../../utils/data";
import { useNavigate } from "react-router-dom";
import {BillContext} from "../../context/bill/BillContext";

const ProductTable = () => {

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
            title: "Description",
            field: "description",
            align: "right",
            filterPlaceholder: "Filter by email"
        },
        {
            title: "Price",
            field: "price",
            defaultSort:"asc",
            filterPlaceholder: "Filter by age"
        },
        {
            title: "Stock",
            field: "stock",
            filterPlaceholder: "Filter by city"
        },
        {
            title: "MinAmount",
            field: "MinAmount",
            filterPlaceholder: "Filter by identity"

        }
    ]

    useEffect(() =>{
        fetch(URL_API + "/products", {
            method: "GET"
        })
            .then(response => response.json()
                .then((list) => setTableData({...tableData, list: list})))
    },[])


    return (
        <>
            <MaterialTable
                title="Products information"
                columns={columns}
                data={tableData.list}

                onRowClick={(e, rowData) =>{
                    setCustomer(rowData)
                    navigate("/bill")
                }}

                editable={{
                    onRowAdd: (newRow) => new Promise((resolve, reject) => {
                        fetch(URL_API + "/products/create", {
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
                        fetch(URL_API + "/products/delete/" + selectRow.id.toString(),
                            { method: "DELETE" })
                            .then(response => {
                                let updateData = tableData.list.filter(value => value.id !== selectRow.id)
                                setTableData({...tableData, list: updateData})})
                        setTimeout(() => resolve(), 1000)
                    }),
                }}

                actions ={[
                    {icon:() => <GetAppIcon />,
                        tooltip: "Buy",
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
                    selection: false,
                    showSelectAllCheckbox: false,
                    showTextRowsSelected: false,
                    grouping:true,
                    columnsButton: true,
                    selectionProps: rowData=>({
                        disabled: false,
                        color: "primary",

                    })
                }}

            />
        </>
    )
}

export {ProductTable}