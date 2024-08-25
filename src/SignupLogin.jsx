import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import axios from "axios"; // Import axios
import "./SignupLogin.css";

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#000", // Change to black for selected state
    color: "#fff", // Keeping text color white for contrast
    "&:hover": {
      backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
    },
  },
}));

const SignupLogin = () => {
  const [mode, setMode] = useState("signin"); // Toggle between sign-in and sign-up
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(""); // Correctly handle dob
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const payload = {
      firstName,
      lastName,
      dob,
      rollNumber: rollNo,
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/signup", // Replace with your actual endpoint
        payload
      );
      console.log("Signup successful:", response.data);
      // You can handle success actions here (e.g., redirect, display success message)
    } catch (error) {
      console.error("Error signing up:", error);
      // Handle errors here (e.g., display error message)
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://your-api-endpoint.com/login", // Replace with your actual endpoint
        payload
      );
      console.log("Login successful:", response.data);
      // You can handle success actions here (e.g., redirect, store JWT, etc.)
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle errors here (e.g., display error message)
    }
  };

  return (
    <div className="auth-container">
      <Card
        sx={{
          borderRadius: "25px",
          backgroundColor: "rgba( 255, 255, 255,0.75)",
        }}
      >
        <CardContent>
          <div style={{ padding: 20 }}>
            <center>
              <Typography variant="h4">
                {mode === "signin" ? "SIGN IN" : "SIGN UP"}
              </Typography>
            </center>
          </div>
          <div
            className="ToggleGroup"
            style={{ textAlign: "center", marginBottom: "20px" }}
          >
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={handleModeChange}
              aria-label="mode selection"
              sx={{ justifyContent: "center", mt: 2 }}
            >
              <CustomToggleButton value="signin" aria-label="Sign In">
                Sign In
              </CustomToggleButton>
              <CustomToggleButton value="signup" aria-label="Sign Up">
                Sign Up
              </CustomToggleButton>
            </ToggleButtonGroup>
          </div>
          {mode === "signin" ? (
            <form onSubmit={handleLoginSubmit}>
              <div className="email">
                <TextField
                  style={{ width: 400 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="password" >
                <TextField
                  sx={{ width: 400, marginTop:"0px" }}
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div
                className="login"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <Button
                  type="submit"
                  sx={{
                    mt: 2,
                    py: 2,
                    maxWidth: "200px",
                    marginX: "auto",
                    backgroundColor: "rgba(0, 57, 77,1)",
                    "&:hover": {
                      backgroundColor: "#000", // Change background to black on hover
                      color: "#fff", // Optional: Change text color to white for better contrast
                    },
                  }}
                  variant="contained"
                >
                  SIGN IN
                </Button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSignupSubmit}>
              <div className="firstname">
                <TextField
                  style={{ width: 400 }}
                  id="firstName"
                  label="First Name"
                  variant="outlined"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="lastname">
                <TextField
                  style={{ width: 400, marginTop: 20 }}
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="email">
                <TextField
                  style={{ width: 400, marginTop: 20 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="rollno">
                <TextField
                  style={{ width: 400, marginTop: 20 }}
                  id="rollNo"
                  label="Roll No"
                  variant="outlined"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
              <div className="dob">
                <TextField
                  style={{ width: 400, marginTop: 20 }}
                  id="dob"
                  label="Date of Birth (ddmmyyyy)"
                  variant="outlined"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="password">
                <TextField
                  sx={{ width: 400, marginTop: 20 }}
                  id="password"
                  label="Password"
                  variant="outlined"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              <div
                className="signup"
                style={{ textAlign: "center", marginTop: "20px" }}
              >
                <Button
                  type="submit"
                  sx={{
                    mt: 2,
                    py: 2,
                    maxWidth: "200px",
                    marginX: "auto",
                    backgroundColor: "rgba(0, 57, 77,1)",
                    "&:hover": {
                      backgroundColor: "#000", // Change background to black on hover
                      color: "#fff", // Optional: Change text color to white for better contrast
                    },
                  }}
                  variant="contained"
                >
                  SIGN UP
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SignupLogin;
