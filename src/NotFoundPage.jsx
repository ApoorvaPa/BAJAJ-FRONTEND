import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #001427, #004e92)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h1"
        component="h1"
        sx={{ fontSize: "6rem", fontWeight: "bold", mb: 2 }}
      >
        404
      </Typography>
      <Typography variant="h4" sx={{ mb: 3 }}>
        Oops! The page you're looking for isn't charting any courses!
      </Typography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Sail back Home
        </Button>
      </Link>
    </Box>
  );
};

export default NotFoundPage;
