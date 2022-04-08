import React from 'react'
import MaterialTable from 'material-table';
const TableBills = () => {


    const columns =  [

        {
            title: "Id",
            field: "id",
            filterPlaceholder: "Filter by id"
        },
        {
            title: "ProductId",
            field: "productId",
        },
        {
            title: "BillId",
            field: "billId",
            align: "right",
        },
        {
            title: "Amount",
            field: "amount",
            defaultSort:"asc",
        },

    ]

    return (
        <>
            <MaterialTable
                title="Bills"
                columns={columns}
                data={}

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

export {TableBills}