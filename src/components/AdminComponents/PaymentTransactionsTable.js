import React from "react";
import { MaterialReactTable } from "material-react-table";

const PaymentTransactionsTable = () => {
  const columns = [
    { header: "Date", accessorKey: "date" },
    { header: "Amount", accessorKey: "amount" },
    { header: "Payment Type", accessorKey: "paymentType" },
    { header: "User", accessorKey: "user" },
  ];

  const data = [
    {
      date: "10/04/2024",
      amount: "ETB 2,500",
      paymentType: "ETB (Chapa)",
      user: "John Doe",
    },
    // Add more data
  ];

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <MaterialReactTable
        columns={columns}
        data={data}
        enableSorting
        muiTableContainerProps={{
          sx: {
            backgroundColor: "transparent",
            color: "text.primary",
          },
        }}
      />
    </div>
  );
};

export default PaymentTransactionsTable;
