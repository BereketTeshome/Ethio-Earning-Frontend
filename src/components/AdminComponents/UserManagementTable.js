import React from "react";
import { MaterialReactTable } from "material-react-table";

const UserManagementTable = () => {
  const columns = [
    { header: "Name", accessorKey: "name" },
    { header: "Email", accessorKey: "email" },
    { header: "Role", accessorKey: "role" },
  ];

  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin" },
    { name: "Jane Doe", email: "jane@example.com", role: "User" },
    // More users
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

export default UserManagementTable;
