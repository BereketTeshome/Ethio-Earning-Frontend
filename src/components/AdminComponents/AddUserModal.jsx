import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const roles = ["Earner", "Investor"]; // Updated roles list

const AddUserModal = ({ open, handleClose, handleAddUser }) => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddClick = () => {
    handleAddUser(newUser);
    setNewUser({
      first_name: "",
      last_name: "",
      phone_number: "",
      email: "",
      role: "",
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Add New User
        </Typography>

        <TextField
          fullWidth
          label="First Name"
          name="first_name"
          value={newUser.first_name}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Last Name"
          name="last_name"
          value={newUser.last_name}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Phone Number"
          name="phone_number"
          value={newUser.phone_number}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={newUser.email}
          onChange={handleInputChange}
          sx={{ mb: 2 }}
        />

        <TextField
          select
          label="Role"
          name="role"
          value={newUser.role}
          onChange={handleInputChange}
          sx={{ width: "100%", mb: 2 }}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>
              {role}
            </MenuItem>
          ))}
        </TextField>

        {/* Add button */}
        <Button
          onClick={handleAddClick}
          variant="contained"
          sx={{ bgcolor: "#111827", width: "100%" }}
        >
          Add
        </Button>
      </Box>
    </Modal>
  );
};

export default AddUserModal;
