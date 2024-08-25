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
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Adjust the path as necessary
import "./SignupLogin.css";
import dayjs from "dayjs"; // for formatting the date

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  color: "#e0e0e0",
  border: "1px solid #555555",
  backgroundColor: "#333333",
  "&.Mui-selected": {
    background: "linear-gradient(135deg, #0077b6, #00b4d8)",
    color: "#ffffff",
  },
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const SignupLogin = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e, isSignUp) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    // Format DOB as ddmmyyyy
    const formattedDob = dob ? dayjs(dob).format("DDMMYYYY") : "";

    const url = `https://bajaj-backend-ybma.onrender.com/${
      isSignUp ? "signup" : "login"
    }`;
    const payload = isSignUp
      ? {
          firstName,
          lastName,
          dob: formattedDob,
          rollNumber: rollNo,
          email,
          password,
        }
      : { email, password };

    try {
      const response = await axios.post(url, payload);
      console.log("API response:", response); // Debugging log

      // Check if the operation was successful
      if (response.status === (isSignUp ? 201 : 200) && response.data.token) {
        const message = isSignUp
          ? "User created successfully. Please log in."
          : "Login successful!";
        login(response.data.token); // Login user by setting the token
        setDialogContent(message);
        setDialogOpen(true);
        if (!isSignUp) {
          navigate("/jsonform"); // Navigate only if it's a login
        }
      } else {
        // Handle other successful responses without a token (if any)
        setDialogContent("Success, but no token received.");
        setDialogOpen(true);
      }
    } catch (error) {
      console.error("API request failed:", error);
      setDialogContent(
        `Error ${isSignUp ? "signing up" : "logging in"}. Please try again.`
      );
      setDialogOpen(true);
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="auth-container">
        <Card
          sx={{
            maxWidth: 400,
            mx: "auto",
            my: 2,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            p: 2,
            boxShadow: 3,
          }}
        >
          <CardContent>
            <Typography variant="h4" textAlign="center" mb={2}>
              {mode === "signin" ? "Sign In" : "Sign Up"}
            </Typography>
            <ToggleButtonGroup
              color="primary"
              value={mode}
              exclusive
              onChange={handleModeChange}
              fullWidth
              sx={{ mb: 2 }}
            >
              <CustomToggleButton value="signin" aria-label="Sign In">
                Sign In
              </CustomToggleButton>
              <CustomToggleButton value="signup" aria-label="Sign Up">
                Sign Up
              </CustomToggleButton>
            </ToggleButtonGroup>

            <form onSubmit={(e) => handleSubmit(e, mode === "signup")}>
              {mode === "signup" && (
                <>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    fullWidth
                    label="Roll Number"
                    variant="outlined"
                    sx={{ mb: 2 }}
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                  />
                  <DatePicker
                    label="Date of Birth"
                    value={dob}
                    onChange={(newValue) => setDob(newValue)}
                    renderInput={(params) => (
                      <TextField fullWidth variant="outlined" {...params} />
                    )}
                    sx={{ mb: 2 }}
                  />
                </>
              )}
              {mode === "signin" && (
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  sx={{ mb: 2 }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              )}
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleClickShowPassword}
                        edge="end"
                        sx={{
                          color: showPassword ? "#ffffff" : "inherit", // Change color when active
                          "&:hover": {
                            backgroundColor:
                              "linear-gradient(135deg, #0077b6, #00b4d8)", // Apply the gradient on hover
                            color: "#ffffff",
                          },
                        }}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={{ mb: 2 }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1, mb: 2 }}
                disabled={loading} // Disable button when loading
                startIcon={
                  loading ? (
                    <CircularProgress size={24} color="inherit" />
                  ) : null
                } // Add spinner icon
              >
                {mode === "signin" ? "Sign In" : "Sign Up"}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          fullScreen={fullScreen}
          PaperProps={{
            sx: {
              backgroundColor: "background.default",
              color: "text.primary",
            },
          }}
        >
          <DialogTitle>{"Server Response"}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialogContent}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Okay</Button>
          </DialogActions>
        </Dialog>
      </div>
    </LocalizationProvider>
  );
};

export default SignupLogin;
