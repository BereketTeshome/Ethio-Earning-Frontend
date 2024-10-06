import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ActivityFeed = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">Real-time Activity</Typography>
        <Typography variant="body1">
          No real-time alerts at the moment.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
