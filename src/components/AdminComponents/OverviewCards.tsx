import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const OverviewCards = () => {
  const stats = [
    { title: "Total Users", value: "1,245" },
    { title: "Tasks Completed", value: "980" },
    { title: "ETB Payments", value: "ETB 45,500" },
    { title: "USD Payments", value: "$1,230" },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                {stat.title}
              </Typography>
              <Typography variant="h4">{stat.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OverviewCards;
