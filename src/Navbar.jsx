import React from "react";
import { useAuth } from "./AuthContext";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { IconButton, Typography, Box } from "@mui/material";

const Navbar = () => {
  const { email, logout } = useAuth();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        background: "linear-gradient(135deg, #0077b6, #00b4d8)",
        color: "white",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        fontFamily: "Roboto, sans-serif",
      }}
    >
      <Link
        to="/"
        style={{
          display: "flex",
          alignItems: "center",
          color: "white",
          textDecoration: "none",
        }}
      >
        <HomeIcon />
        <Typography variant="h6" sx={{ ml: 1 }}>
          Home
        </Typography>
      </Link>

      <div style={{ display: "flex", alignItems: "center" }}>
        {email ? (
          <>
            <Typography variant="h6" sx={{ mr: 2 }}>
              {email}
            </Typography>
            <IconButton
              onClick={logout}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                },
              }}
              aria-label="Logout"
            >
              <ExitToAppIcon />
            </IconButton>
          </>
        ) : (
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Log In
          </Link>
        )}
      </div>
    </Box>
  );
};

export default Navbar;
