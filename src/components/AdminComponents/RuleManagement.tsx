import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

const RuleManagement = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Website Rules</Typography>
        <Typography variant="body1" gutterBottom>
          Manage the platform's rules and terms of service. Enforce rules by
          banning users violating the terms.
        </Typography>
        <Button variant="contained" color="secondary">
          Manage Bans
        </Button>
      </CardContent>
    </Card>
  );
};

export default RuleManagement;
