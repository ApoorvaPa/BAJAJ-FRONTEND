// // // // // // import React, { useState } from "react";
// // // // // // import {
// // // // // //   Card,
// // // // // //   CardContent,
// // // // // //   TextField,
// // // // // //   Typography,
// // // // // //   Button,
// // // // // //   ToggleButton,
// // // // // //   ToggleButtonGroup,
// // // // // //   IconButton,
// // // // // //   InputAdornment,
// // // // // // } from "@mui/material";
// // // // // // import Visibility from "@mui/icons-material/Visibility";
// // // // // // import VisibilityOff from "@mui/icons-material/VisibilityOff";
// // // // // // import { styled } from "@mui/material/styles";
// // // // // // import axios from "axios"; // Import axios
// // // // // // import "./SignupLogin.css";

// // // // // // const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
// // // // // //   "&.Mui-selected": {
// // // // // //     backgroundColor: "#000", // Change to black for selected state
// // // // // //     color: "#fff", // Keeping text color white for contrast
// // // // // //     "&:hover": {
// // // // // //       backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
// // // // // //     },
// // // // // //   },
// // // // // // }));

// // // // // // const SignupLogin = () => {
// // // // // //   const [mode, setMode] = useState("signin"); // Toggle between sign-in and sign-up
// // // // // //   const [email, setEmail] = useState("");
// // // // // //   const [username, setUsername] = useState("");
// // // // // //   const [password, setPassword] = useState("");
// // // // // //   const [dob, setDob] = useState(""); // Correctly handle dob
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const [firstName, setFirstName] = useState("");
// // // // // //   const [lastName, setLastName] = useState("");
// // // // // //   const [rollNo, setRollNo] = useState("");

// // // // // //   const handleModeChange = (event, newMode) => {
// // // // // //     if (newMode !== null) {
// // // // // //       setMode(newMode);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleClickShowPassword = () => {
// // // // // //     setShowPassword((prev) => !prev);
// // // // // //   };

// // // // // //   const handleSignupSubmit = async (e) => {
// // // // // //     e.preventDefault(); // Prevent the default form submission
// // // // // //     const payload = {
// // // // // //       firstName,
// // // // // //       lastName,
// // // // // //       dob,
// // // // // //       rollNumber: rollNo,
// // // // // //       email,
// // // // // //       password,
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         "https://your-api-endpoint.com/signup", // Replace with your actual endpoint
// // // // // //         payload
// // // // // //       );
// // // // // //       console.log("Signup successful:", response.data);
// // // // // //       // You can handle success actions here (e.g., redirect, display success message)
// // // // // //     } catch (error) {
// // // // // //       console.error("Error signing up:", error);
// // // // // //       // Handle errors here (e.g., display error message)
// // // // // //     }
// // // // // //   };

// // // // // //   const handleLoginSubmit = async (e) => {
// // // // // //     e.preventDefault(); // Prevent the default form submission
// // // // // //     const payload = {
// // // // // //       email,
// // // // // //       password,
// // // // // //     };

// // // // // //     try {
// // // // // //       const response = await axios.post(
// // // // // //         "https://your-api-endpoint.com/login", // Replace with your actual endpoint
// // // // // //         payload
// // // // // //       );
// // // // // //       console.log("Login successful:", response.data);
// // // // // //       // You can handle success actions here (e.g., redirect, store JWT, etc.)
// // // // // //     } catch (error) {
// // // // // //       console.error("Error logging in:", error);
// // // // // //       // Handle errors here (e.g., display error message)
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="auth-container">
// // // // // //       <Card
// // // // // //         sx={{
// // // // // //           borderRadius: "25px",
// // // // // //           backgroundColor: "rgba( 255, 255, 255,0.75)",
// // // // // //         }}
// // // // // //       >
// // // // // //         <CardContent>
// // // // // //           <div style={{ padding: 20 }}>
// // // // // //             <center>
// // // // // //               <Typography variant="h4">
// // // // // //                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
// // // // // //               </Typography>
// // // // // //             </center>
// // // // // //           </div>
// // // // // //           <div
// // // // // //             className="ToggleGroup"
// // // // // //             style={{ textAlign: "center", marginBottom: "20px" }}
// // // // // //           >
// // // // // //             <ToggleButtonGroup
// // // // // //               color="primary"
// // // // // //               value={mode}
// // // // // //               exclusive
// // // // // //               onChange={handleModeChange}
// // // // // //               aria-label="mode selection"
// // // // // //               sx={{ justifyContent: "center", mt: 2 }}
// // // // // //             >
// // // // // //               <CustomToggleButton value="signin" aria-label="Sign In">
// // // // // //                 Sign In
// // // // // //               </CustomToggleButton>
// // // // // //               <CustomToggleButton value="signup" aria-label="Sign Up">
// // // // // //                 Sign Up
// // // // // //               </CustomToggleButton>
// // // // // //             </ToggleButtonGroup>
// // // // // //           </div>
// // // // // //           {mode === "signin" ? (
// // // // // //             <form onSubmit={handleLoginSubmit}>
// // // // // //               <div className="email">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400 }}
// // // // // //                   id="email"
// // // // // //                   label="Email"
// // // // // //                   variant="outlined"
// // // // // //                   value={email}
// // // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="password" >
// // // // // //                 <TextField
// // // // // //                   sx={{ width: 400, marginTop:"0px" }}
// // // // // //                   id="password"
// // // // // //                   label="Password"
// // // // // //                   variant="outlined"
// // // // // //                   type={showPassword ? "text" : "password"}
// // // // // //                   value={password}
// // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // //                   InputProps={{
// // // // // //                     endAdornment: (
// // // // // //                       <InputAdornment position="end">
// // // // // //                         <IconButton
// // // // // //                           aria-label="toggle password visibility"
// // // // // //                           onClick={handleClickShowPassword}
// // // // // //                           edge="end"
// // // // // //                         >
// // // // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // // //                         </IconButton>
// // // // // //                       </InputAdornment>
// // // // // //                     ),
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div
// // // // // //                 className="login"
// // // // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // // // //               >
// // // // // //                 <Button
// // // // // //                   type="submit"
// // // // // //                   sx={{
// // // // // //                     mt: 2,
// // // // // //                     py: 2,
// // // // // //                     maxWidth: "200px",
// // // // // //                     marginX: "auto",
// // // // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // // // //                     "&:hover": {
// // // // // //                       backgroundColor: "#000", // Change background to black on hover
// // // // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // // // //                     },
// // // // // //                   }}
// // // // // //                   variant="contained"
// // // // // //                 >
// // // // // //                   SIGN IN
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             </form>
// // // // // //           ) : (
// // // // // //             <form onSubmit={handleSignupSubmit}>
// // // // // //               <div className="firstname">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400 }}
// // // // // //                   id="firstName"
// // // // // //                   label="First Name"
// // // // // //                   variant="outlined"
// // // // // //                   value={firstName}
// // // // // //                   onChange={(e) => setFirstName(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="lastname">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // // //                   id="lastName"
// // // // // //                   label="Last Name"
// // // // // //                   variant="outlined"
// // // // // //                   value={lastName}
// // // // // //                   onChange={(e) => setLastName(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="email">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // // //                   id="email"
// // // // // //                   label="Email"
// // // // // //                   variant="outlined"
// // // // // //                   value={email}
// // // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="rollno">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // // //                   id="rollNo"
// // // // // //                   label="Roll No"
// // // // // //                   variant="outlined"
// // // // // //                   value={rollNo}
// // // // // //                   onChange={(e) => setRollNo(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="dob">
// // // // // //                 <TextField
// // // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // // //                   id="dob"
// // // // // //                   label="Date of Birth (ddmmyyyy)"
// // // // // //                   variant="outlined"
// // // // // //                   value={dob}
// // // // // //                   onChange={(e) => setDob(e.target.value)}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div className="password">
// // // // // //                 <TextField
// // // // // //                   sx={{ width: 400, marginTop: 20 }}
// // // // // //                   id="password"
// // // // // //                   label="Password"
// // // // // //                   variant="outlined"
// // // // // //                   type={showPassword ? "text" : "password"}
// // // // // //                   value={password}
// // // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // // //                   InputProps={{
// // // // // //                     endAdornment: (
// // // // // //                       <InputAdornment position="end">
// // // // // //                         <IconButton
// // // // // //                           aria-label="toggle password visibility"
// // // // // //                           onClick={handleClickShowPassword}
// // // // // //                           edge="end"
// // // // // //                         >
// // // // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // // //                         </IconButton>
// // // // // //                       </InputAdornment>
// // // // // //                     ),
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </div>
// // // // // //               <div
// // // // // //                 className="signup"
// // // // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // // // //               >
// // // // // //                 <Button
// // // // // //                   type="submit"
// // // // // //                   sx={{
// // // // // //                     mt: 2,
// // // // // //                     py: 2,
// // // // // //                     maxWidth: "200px",
// // // // // //                     marginX: "auto",
// // // // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // // // //                     "&:hover": {
// // // // // //                       backgroundColor: "#000", // Change background to black on hover
// // // // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // // // //                     },
// // // // // //                   }}
// // // // // //                   variant="contained"
// // // // // //                 >
// // // // // //                   SIGN UP
// // // // // //                 </Button>
// // // // // //               </div>
// // // // // //             </form>
// // // // // //           )}
// // // // // //         </CardContent>
// // // // // //       </Card>
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default SignupLogin;
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Card,
// // // // //   CardContent,
// // // // //   TextField,
// // // // //   Typography,
// // // // //   Button,
// // // // //   ToggleButton,
// // // // //   ToggleButtonGroup,
// // // // //   IconButton,
// // // // //   InputAdornment,
// // // // // } from "@mui/material";
// // // // // import Visibility from "@mui/icons-material/Visibility";
// // // // // import VisibilityOff from "@mui/icons-material/VisibilityOff";
// // // // // import { styled } from "@mui/material/styles";
// // // // // import axios from "axios"; // Import axios
// // // // // import "./SignupLogin.css";

// // // // // const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
// // // // //   "&.Mui-selected": {
// // // // //     backgroundColor: "#000", // Change to black for selected state
// // // // //     color: "#fff", // Keeping text color white for contrast
// // // // //     "&:hover": {
// // // // //       backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
// // // // //     },
// // // // //   },
// // // // // }));

// // // // // const SignupLogin = () => {
// // // // //   const [mode, setMode] = useState("signin"); // Toggle between sign-in and sign-up
// // // // //   const [email, setEmail] = useState("");
// // // // //   const [username, setUsername] = useState("");
// // // // //   const [password, setPassword] = useState("");
// // // // //   const [dob, setDob] = useState(""); // Correctly handle dob
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [firstName, setFirstName] = useState("");
// // // // //   const [lastName, setLastName] = useState("");
// // // // //   const [rollNo, setRollNo] = useState("");

// // // // //   const handleModeChange = (event, newMode) => {
// // // // //     if (newMode !== null) {
// // // // //       setMode(newMode);
// // // // //     }
// // // // //   };

// // // // //   const handleClickShowPassword = () => {
// // // // //     setShowPassword((prev) => !prev);
// // // // //   };

// // // // //   const handleSignupSubmit = async (e) => {
// // // // //     e.preventDefault(); // Prevent the default form submission
// // // // //     const payload = {
// // // // //       firstName,
// // // // //       lastName,
// // // // //       dob,
// // // // //       rollNumber: rollNo,
// // // // //       email,
// // // // //       password,
// // // // //     };

// // // // //     try {
// // // // //       const response = await axios.post(
// // // // //         "https://bajaj-backend-ybma.onrender.com/signup", // Replace with your actual endpoint
// // // // //         payload
// // // // //       );
// // // // //       console.log("Signup successful:", response.data);
// // // // //       // You can handle success actions here (e.g., redirect, display success message)
// // // // //     } catch (error) {
// // // // //       console.error("Error signing up:", error);
// // // // //       // Handle errors here (e.g., display error message)
// // // // //     }
// // // // //   };

// // // // //   const handleLoginSubmit = async (e) => {
// // // // //     e.preventDefault(); // Prevent the default form submission
// // // // //     const payload = {
// // // // //       email,
// // // // //       password,
// // // // //     };

// // // // //     try {
// // // // //       const response = await axios.post(
// // // // //         "https://bajaj-backend-ybma.onrender.com/login", // Replace with your actual endpoint
// // // // //         payload
// // // // //       );
// // // // //       console.log("Login successful:", response.data);
// // // // //       // Store the token in local storage
// // // // //       localStorage.setItem("authToken", response.data.token);
// // // // //       // You can handle success actions here (e.g., redirect, store JWT, etc.)
// // // // //     } catch (error) {
// // // // //       console.error("Error logging in:", error);
// // // // //       // Handle errors here (e.g., display error message)
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="auth-container">
// // // // //       <Card
// // // // //         sx={{
// // // // //           borderRadius: "25px",
// // // // //           backgroundColor: "rgba( 255, 255, 255,0.75)",
// // // // //         }}
// // // // //       >
// // // // //         <CardContent>
// // // // //           <div style={{ padding: 20 }}>
// // // // //             <center>
// // // // //               <Typography variant="h4">
// // // // //                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
// // // // //               </Typography>
// // // // //             </center>
// // // // //           </div>
// // // // //           <div
// // // // //             className="ToggleGroup"
// // // // //             style={{ textAlign: "center", marginBottom: "20px" }}
// // // // //           >
// // // // //             <ToggleButtonGroup
// // // // //               color="primary"
// // // // //               value={mode}
// // // // //               exclusive
// // // // //               onChange={handleModeChange}
// // // // //               aria-label="mode selection"
// // // // //               sx={{ justifyContent: "center", mt: 2 }}
// // // // //             >
// // // // //               <CustomToggleButton value="signin" aria-label="Sign In">
// // // // //                 Sign In
// // // // //               </CustomToggleButton>
// // // // //               <CustomToggleButton value="signup" aria-label="Sign Up">
// // // // //                 Sign Up
// // // // //               </CustomToggleButton>
// // // // //             </ToggleButtonGroup>
// // // // //           </div>
// // // // //           {mode === "signin" ? (
// // // // //             <form onSubmit={handleLoginSubmit}>
// // // // //               <div className="email">
// // // // //                 <TextField
// // // // //                   style={{ width: 400 }}
// // // // //                   id="email"
// // // // //                   label="Email"
// // // // //                   variant="outlined"
// // // // //                   value={email}
// // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="password">
// // // // //                 <TextField
// // // // //                   sx={{ width: 400, marginTop: "0px" }}
// // // // //                   id="password"
// // // // //                   label="Password"
// // // // //                   variant="outlined"
// // // // //                   type={showPassword ? "text" : "password"}
// // // // //                   value={password}
// // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // //                   InputProps={{
// // // // //                     endAdornment: (
// // // // //                       <InputAdornment position="end">
// // // // //                         <IconButton
// // // // //                           aria-label="toggle password visibility"
// // // // //                           onClick={handleClickShowPassword}
// // // // //                           edge="end"
// // // // //                         >
// // // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // //                         </IconButton>
// // // // //                       </InputAdornment>
// // // // //                     ),
// // // // //                   }}
// // // // //                 />
// // // // //               </div>
// // // // //               <div
// // // // //                 className="login"
// // // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // // //               >
// // // // //                 <Button
// // // // //                   type="submit"
// // // // //                   sx={{
// // // // //                     mt: 2,
// // // // //                     py: 2,
// // // // //                     maxWidth: "200px",
// // // // //                     marginX: "auto",
// // // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // // //                     "&:hover": {
// // // // //                       backgroundColor: "#000", // Change background to black on hover
// // // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // // //                     },
// // // // //                   }}
// // // // //                   variant="contained"
// // // // //                 >
// // // // //                   SIGN IN
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </form>
// // // // //           ) : (
// // // // //             <form onSubmit={handleSignupSubmit}>
// // // // //               <div className="firstname">
// // // // //                 <TextField
// // // // //                   style={{ width: 400 }}
// // // // //                   id="firstName"
// // // // //                   label="First Name"
// // // // //                   variant="outlined"
// // // // //                   value={firstName}
// // // // //                   onChange={(e) => setFirstName(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="lastname">
// // // // //                 <TextField
// // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // //                   id="lastName"
// // // // //                   label="Last Name"
// // // // //                   variant="outlined"
// // // // //                   value={lastName}
// // // // //                   onChange={(e) => setLastName(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="email">
// // // // //                 <TextField
// // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // //                   id="email"
// // // // //                   label="Email"
// // // // //                   variant="outlined"
// // // // //                   value={email}
// // // // //                   onChange={(e) => setEmail(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="rollno">
// // // // //                 <TextField
// // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // //                   id="rollNo"
// // // // //                   label="Roll No"
// // // // //                   variant="outlined"
// // // // //                   value={rollNo}
// // // // //                   onChange={(e) => setRollNo(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="dob">
// // // // //                 <TextField
// // // // //                   style={{ width: 400, marginTop: 20 }}
// // // // //                   id="dob"
// // // // //                   label="Date of Birth (ddmmyyyy)"
// // // // //                   variant="outlined"
// // // // //                   value={dob}
// // // // //                   onChange={(e) => setDob(e.target.value)}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="password">
// // // // //                 <TextField
// // // // //                   sx={{ width: 400, marginTop: 20 }}
// // // // //                   id="password"
// // // // //                   label="Password"
// // // // //                   variant="outlined"
// // // // //                   type={showPassword ? "text" : "password"}
// // // // //                   value={password}
// // // // //                   onChange={(e) => setPassword(e.target.value)}
// // // // //                   InputProps={{
// // // // //                     endAdornment: (
// // // // //                       <InputAdornment position="end">
// // // // //                         <IconButton
// // // // //                           aria-label="toggle password visibility"
// // // // //                           onClick={handleClickShowPassword}
// // // // //                           edge="end"
// // // // //                         >
// // // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // //                         </IconButton>
// // // // //                       </InputAdornment>
// // // // //                     ),
// // // // //                   }}
// // // // //                 />
// // // // //               </div>
// // // // //               <div
// // // // //                 className="signup"
// // // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // // //               >
// // // // //                 <Button
// // // // //                   type="submit"
// // // // //                   sx={{
// // // // //                     mt: 2,
// // // // //                     py: 2,
// // // // //                     maxWidth: "200px",
// // // // //                     marginX: "auto",
// // // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // // //                     "&:hover": {
// // // // //                       backgroundColor: "#000", // Change background to black on hover
// // // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // // //                     },
// // // // //                   }}
// // // // //                   variant="contained"
// // // // //                 >
// // // // //                   SIGN UP
// // // // //                 </Button>
// // // // //               </div>
// // // // //             </form>
// // // // //           )}
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default SignupLogin;
// // // // import React, { useState } from "react";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   TextField,
// // // //   Typography,
// // // //   Button,
// // // //   ToggleButton,
// // // //   ToggleButtonGroup,
// // // //   IconButton,
// // // //   InputAdornment,
// // // //   Alert, // Import the Alert component to display success messages
// // // // } from "@mui/material";
// // // // import Visibility from "@mui/icons-material/Visibility";
// // // // import VisibilityOff from "@mui/icons-material/VisibilityOff";
// // // // import { styled } from "@mui/material/styles";
// // // // import axios from "axios"; // Import axios
// // // // import "./SignupLogin.css";

// // // // const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
// // // //   "&.Mui-selected": {
// // // //     backgroundColor: "#000", // Change to black for selected state
// // // //     color: "#fff", // Keeping text color white for contrast
// // // //     "&:hover": {
// // // //       backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
// // // //     },
// // // //   },
// // // // }));

// // // // const SignupLogin = () => {
// // // //   const [mode, setMode] = useState("signin"); // Toggle between sign-in and sign-up
// // // //   const [email, setEmail] = useState("");
// // // //   const [username, setUsername] = useState("");
// // // //   const [password, setPassword] = useState("");
// // // //   const [dob, setDob] = useState(""); // Correctly handle dob
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [firstName, setFirstName] = useState("");
// // // //   const [lastName, setLastName] = useState("");
// // // //   const [rollNo, setRollNo] = useState("");
// // // //   const [successMessage, setSuccessMessage] = useState(""); // State for success message
// // // //   const [errorMessage, setErrorMessage] = useState(""); // State for error message

// // // //   const handleModeChange = (event, newMode) => {
// // // //     if (newMode !== null) {
// // // //       setMode(newMode);
// // // //       setSuccessMessage(""); // Clear success message when switching modes
// // // //       setErrorMessage(""); // Clear error message when switching modes
// // // //     }
// // // //   };

// // // //   const handleClickShowPassword = () => {
// // // //     setShowPassword((prev) => !prev);
// // // //   };

// // // //   const handleSignupSubmit = async (e) => {
// // // //     e.preventDefault(); // Prevent the default form submission
// // // //     const payload = {
// // // //       firstName,
// // // //       lastName,
// // // //       dob,
// // // //       rollNumber: rollNo,
// // // //       email,
// // // //       password,
// // // //     };

// // // //     try {
// // // //       const response = await axios.post(
// // // //         "https://bajaj-backend-ybma.onrender.com/signup", // Replace with your actual endpoint
// // // //         payload
// // // //       );
// // // //       console.log("Signup successful:", response.data);
// // // //       setSuccessMessage("Signup successful! Please log in.");
// // // //       setErrorMessage(""); // Clear error message
// // // //     } catch (error) {
// // // //       console.error("Error signing up:", error);
// // // //       setErrorMessage("Error signing up. Please try again.");
// // // //     }
// // // //   };

// // // //   const handleLoginSubmit = async (e) => {
// // // //     e.preventDefault(); // Prevent the default form submission
// // // //     const payload = {
// // // //       email,
// // // //       password,
// // // //     };

// // // //     try {
// // // //       const response = await axios.post(
// // // //         "https://bajaj-backend-ybma.onrender.com/login", // Replace with your actual endpoint
// // // //         payload
// // // //       );
// // // //       console.log("Login successful:", response.data);
// // // //       // Store the token in local storage
// // // //       localStorage.setItem("authToken", response.data.token);
// // // //       setSuccessMessage("Login successful!"); // Set success message
// // // //       setErrorMessage(""); // Clear error message
// // // //     } catch (error) {
// // // //       console.error("Error logging in:", error);
// // // //       setErrorMessage("Error logging in. Please try again.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="auth-container">
// // // //       <Card
// // // //         sx={{
// // // //           borderRadius: "25px",
// // // //           backgroundColor: "rgba( 255, 255, 255,0.75)",
// // // //         }}
// // // //       >
// // // //         <CardContent>
// // // //           <div style={{ padding: 20 }}>
// // // //             <center>
// // // //               <Typography variant="h4">
// // // //                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
// // // //               </Typography>
// // // //             </center>
// // // //           </div>
// // // //           <div
// // // //             className="ToggleGroup"
// // // //             style={{ textAlign: "center", marginBottom: "20px" }}
// // // //           >
// // // //             <ToggleButtonGroup
// // // //               color="primary"
// // // //               value={mode}
// // // //               exclusive
// // // //               onChange={handleModeChange}
// // // //               aria-label="mode selection"
// // // //               sx={{ justifyContent: "center", mt: 2 }}
// // // //             >
// // // //               <CustomToggleButton value="signin" aria-label="Sign In">
// // // //                 Sign In
// // // //               </CustomToggleButton>
// // // //               <CustomToggleButton value="signup" aria-label="Sign Up">
// // // //                 Sign Up
// // // //               </CustomToggleButton>
// // // //             </ToggleButtonGroup>
// // // //           </div>

// // // //           {successMessage && (
// // // //             <Alert severity="success" sx={{ mb: 2 }}>
// // // //               {successMessage}
// // // //             </Alert>
// // // //           )}

// // // //           {errorMessage && (
// // // //             <Alert severity="error" sx={{ mb: 2 }}>
// // // //               {errorMessage}
// // // //             </Alert>
// // // //           )}

// // // //           {mode === "signin" ? (
// // // //             <form onSubmit={handleLoginSubmit}>
// // // //               <div className="email">
// // // //                 <TextField
// // // //                   style={{ width: 400 }}
// // // //                   id="email"
// // // //                   label="Email"
// // // //                   variant="outlined"
// // // //                   value={email}
// // // //                   onChange={(e) => setEmail(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="password">
// // // //                 <TextField
// // // //                   sx={{ width: 400, marginTop: "0px" }}
// // // //                   id="password"
// // // //                   label="Password"
// // // //                   variant="outlined"
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   value={password}
// // // //                   onChange={(e) => setPassword(e.target.value)}
// // // //                   InputProps={{
// // // //                     endAdornment: (
// // // //                       <InputAdornment position="end">
// // // //                         <IconButton
// // // //                           aria-label="toggle password visibility"
// // // //                           onClick={handleClickShowPassword}
// // // //                           edge="end"
// // // //                         >
// // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // //                         </IconButton>
// // // //                       </InputAdornment>
// // // //                     ),
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //               <div
// // // //                 className="login"
// // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // //               >
// // // //                 <Button
// // // //                   type="submit"
// // // //                   sx={{
// // // //                     mt: 2,
// // // //                     py: 2,
// // // //                     maxWidth: "200px",
// // // //                     marginX: "auto",
// // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // //                     "&:hover": {
// // // //                       backgroundColor: "#000", // Change background to black on hover
// // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // //                     },
// // // //                   }}
// // // //                   variant="contained"
// // // //                 >
// // // //                   SIGN IN
// // // //                 </Button>
// // // //               </div>
// // // //             </form>
// // // //           ) : (
// // // //             <form onSubmit={handleSignupSubmit}>
// // // //               <div className="firstname">
// // // //                 <TextField
// // // //                   style={{ width: 400 }}
// // // //                   id="firstName"
// // // //                   label="First Name"
// // // //                   variant="outlined"
// // // //                   value={firstName}
// // // //                   onChange={(e) => setFirstName(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="lastname">
// // // //                 <TextField
// // // //                   style={{ width: 400, marginTop: 20 }}
// // // //                   id="lastName"
// // // //                   label="Last Name"
// // // //                   variant="outlined"
// // // //                   value={lastName}
// // // //                   onChange={(e) => setLastName(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="email">
// // // //                 <TextField
// // // //                   style={{ width: 400, marginTop: 20 }}
// // // //                   id="email"
// // // //                   label="Email"
// // // //                   variant="outlined"
// // // //                   value={email}
// // // //                   onChange={(e) => setEmail(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="rollno">
// // // //                 <TextField
// // // //                   style={{ width: 400, marginTop: 20 }}
// // // //                   id="rollNo"
// // // //                   label="Roll No"
// // // //                   variant="outlined"
// // // //                   value={rollNo}
// // // //                   onChange={(e) => setRollNo(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="dob">
// // // //                 <TextField
// // // //                   style={{ width: 400, marginTop: 20 }}
// // // //                   id="dob"
// // // //                   label="Date of Birth (ddmmyyyy)"
// // // //                   variant="outlined"
// // // //                   value={dob}
// // // //                   onChange={(e) => setDob(e.target.value)}
// // // //                 />
// // // //               </div>
// // // //               <div className="password">
// // // //                 <TextField
// // // //                   sx={{ width: 400, marginTop: 20 }}
// // // //                   id="password"
// // // //                   label="Password"
// // // //                   variant="outlined"
// // // //                   type={showPassword ? "text" : "password"}
// // // //                   value={password}
// // // //                   onChange={(e) => setPassword(e.target.value)}
// // // //                   InputProps={{
// // // //                     endAdornment: (
// // // //                       <InputAdornment position="end">
// // // //                         <IconButton
// // // //                           aria-label="toggle password visibility"
// // // //                           onClick={handleClickShowPassword}
// // // //                           edge="end"
// // // //                         >
// // // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // // //                         </IconButton>
// // // //                       </InputAdornment>
// // // //                     ),
// // // //                   }}
// // // //                 />
// // // //               </div>
// // // //               <div
// // // //                 className="signup"
// // // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // // //               >
// // // //                 <Button
// // // //                   type="submit"
// // // //                   sx={{
// // // //                     mt: 2,
// // // //                     py: 2,
// // // //                     maxWidth: "200px",
// // // //                     marginX: "auto",
// // // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // // //                     "&:hover": {
// // // //                       backgroundColor: "#000", // Change background to black on hover
// // // //                       color: "#fff", // Optional: Change text color to white for better contrast
// // // //                     },
// // // //                   }}
// // // //                   variant="contained"
// // // //                 >
// // // //                   SIGN UP
// // // //                 </Button>
// // // //               </div>
// // // //             </form>
// // // //           )}
// // // //         </CardContent>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default SignupLogin;
// // // import React, { useState } from "react";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   TextField,
// // //   Typography,
// // //   Button,
// // //   ToggleButton,
// // //   ToggleButtonGroup,
// // //   IconButton,
// // //   InputAdornment,
// // //   Alert, // Import the Alert component to display success messages
// // // } from "@mui/material";
// // // import Visibility from "@mui/icons-material/Visibility";
// // // import VisibilityOff from "@mui/icons-material/VisibilityOff";
// // // import { styled } from "@mui/material/styles";
// // // import axios from "axios";
// // // import { useHistory } from "react-router-dom"; // Import useHistory for navigation
// // // import "./SignupLogin.css";

// // // const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
// // //   "&.Mui-selected": {
// // //     backgroundColor: "#000", // Change to black for selected state
// // //     color: "#fff", // Keeping text color white for contrast
// // //     "&:hover": {
// // //       backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
// // //     },
// // //   },
// // // }));

// // // const SignupLogin = () => {
// // //   const [mode, setMode] = useState("signin");
// // //   const [email, setEmail] = useState("");
// // //   const [password, setPassword] = useState("");
// // //   const [dob, setDob] = useState("");
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [firstName, setFirstName] = useState("");
// // //   const [lastName, setLastName] = useState("");
// // //   const [rollNo, setRollNo] = useState("");
// // //   const [successMessage, setSuccessMessage] = useState("");
// // //   const [errorMessage, setErrorMessage] = useState("");
// // //   const history = useHistory(); // Initialize useHistory

// // //   const handleModeChange = (event, newMode) => {
// // //     if (newMode !== null) {
// // //       setMode(newMode);
// // //       setSuccessMessage(""); // Clear success message when switching modes
// // //       setErrorMessage(""); // Clear error message when switching modes
// // //     }
// // //   };

// // //   const handleClickShowPassword = () => {
// // //     setShowPassword((prev) => !prev);
// // //   };

// // //   const handleSignupSubmit = async (e) => {
// // //     e.preventDefault(); // Prevent the default form submission
// // //     const payload = {
// // //       firstName,
// // //       lastName,
// // //       dob,
// // //       rollNumber: rollNo,
// // //       email,
// // //       password,
// // //     };

// // //     try {
// // //       const response = await axios.post(
// // //         "https://bajaj-backend-ybma.onrender.com/signup",
// // //         payload
// // //       );
// // //       if (response.status === 200) {
// // //         setSuccessMessage("Signup successful! Please log in.");
// // //         setErrorMessage(""); // Clear error message
// // //         setMode("signin"); // Switch to sign-in tab
// // //       }
// // //     } catch (error) {
// // //       console.error("Error signing up:", error);
// // //       setErrorMessage("Error signing up. Please try again.");
// // //     }
// // //   };

// // //   const handleLoginSubmit = async (e) => {
// // //     e.preventDefault(); // Prevent the default form submission
// // //     const payload = {
// // //       email,
// // //       password,
// // //     };

// // //     try {
// // //       const response = await axios.post(
// // //         "https://bajaj-backend-ybma.onrender.com/login",
// // //         payload
// // //       );
// // //       if (response.status === 200) {
// // //         localStorage.setItem("authToken", response.data.token);
// // //         setSuccessMessage("Login successful!");
// // //         setErrorMessage(""); // Clear error message
// // //         history.push("/jsonform"); // Navigate to /jsonform on successful login
// // //       }
// // //     } catch (error) {
// // //       console.error("Error logging in:", error);
// // //       setErrorMessage("Error logging in. Please try again.");
// // //     }
// // //   };

// // //   return (
// // //     <div className="auth-container">
// // //       <Card
// // //         sx={{
// // //           borderRadius: "25px",
// // //           backgroundColor: "rgba( 255, 255, 255,0.75)",
// // //         }}
// // //       >
// // //         <CardContent>
// // //           <div style={{ padding: 20 }}>
// // //             <center>
// // //               <Typography variant="h4">
// // //                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
// // //               </Typography>
// // //             </center>
// // //           </div>
// // //           <div
// // //             className="ToggleGroup"
// // //             style={{ textAlign: "center", marginBottom: "20px" }}
// // //           >
// // //             <ToggleButtonGroup
// // //               color="primary"
// // //               value={mode}
// // //               exclusive
// // //               onChange={handleModeChange}
// // //               aria-label="mode selection"
// // //               sx={{ justifyContent: "center", mt: 2 }}
// // //             >
// // //               <CustomToggleButton value="signin" aria-label="Sign In">
// // //                 Sign In
// // //               </CustomToggleButton>
// // //               <CustomToggleButton value="signup" aria-label="Sign Up">
// // //                 Sign Up
// // //               </CustomToggleButton>
// // //             </ToggleButtonGroup>
// // //           </div>

// // //           {successMessage && (
// // //             <Alert severity="success" sx={{ mb: 2 }}>
// // //               {successMessage}
// // //             </Alert>
// // //           )}

// // //           {errorMessage && (
// // //             <Alert severity="error" sx={{ mb: 2 }}>
// // //               {errorMessage}
// // //             </Alert>
// // //           )}

// // //           {mode === "signin" ? (
// // //             <form onSubmit={handleLoginSubmit}>
// // //               <div className="email">
// // //                 <TextField
// // //                   style={{ width: 400 }}
// // //                   id="email"
// // //                   label="Email"
// // //                   variant="outlined"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="password">
// // //                 <TextField
// // //                   sx={{ width: 400, marginTop: "0px" }}
// // //                   id="password"
// // //                   label="Password"
// // //                   variant="outlined"
// // //                   type={showPassword ? "text" : "password"}
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   InputProps={{
// // //                     endAdornment: (
// // //                       <InputAdornment position="end">
// // //                         <IconButton
// // //                           aria-label="toggle password visibility"
// // //                           onClick={handleClickShowPassword}
// // //                           edge="end"
// // //                         >
// // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // //                         </IconButton>
// // //                       </InputAdornment>
// // //                     ),
// // //                   }}
// // //                 />
// // //               </div>
// // //               <div
// // //                 className="login"
// // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // //               >
// // //                 <Button
// // //                   type="submit"
// // //                   sx={{
// // //                     mt: 2,
// // //                     py: 2,
// // //                     maxWidth: "200px",
// // //                     marginX: "auto",
// // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // //                     "&:hover": {
// // //                       backgroundColor: "#000",
// // //                       color: "#fff",
// // //                     },
// // //                   }}
// // //                   variant="contained"
// // //                 >
// // //                   SIGN IN
// // //                 </Button>
// // //               </div>
// // //             </form>
// // //           ) : (
// // //             <form onSubmit={handleSignupSubmit}>
// // //               <div className="firstname">
// // //                 <TextField
// // //                   style={{ width: 400 }}
// // //                   id="firstName"
// // //                   label="First Name"
// // //                   variant="outlined"
// // //                   value={firstName}
// // //                   onChange={(e) => setFirstName(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="lastname">
// // //                 <TextField
// // //                   style={{ width: 400, marginTop: 20 }}
// // //                   id="lastName"
// // //                   label="Last Name"
// // //                   variant="outlined"
// // //                   value={lastName}
// // //                   onChange={(e) => setLastName(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="email">
// // //                 <TextField
// // //                   style={{ width: 400, marginTop: 20 }}
// // //                   id="email"
// // //                   label="Email"
// // //                   variant="outlined"
// // //                   value={email}
// // //                   onChange={(e) => setEmail(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="rollno">
// // //                 <TextField
// // //                   style={{ width: 400, marginTop: 20 }}
// // //                   id="rollNo"
// // //                   label="Roll No"
// // //                   variant="outlined"
// // //                   value={rollNo}
// // //                   onChange={(e) => setRollNo(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="dob">
// // //                 <TextField
// // //                   style={{ width: 400, marginTop: 20 }}
// // //                   id="dob"
// // //                   label="Date of Birth (ddmmyyyy)"
// // //                   variant="outlined"
// // //                   value={dob}
// // //                   onChange={(e) => setDob(e.target.value)}
// // //                 />
// // //               </div>
// // //               <div className="password">
// // //                 <TextField
// // //                   sx={{ width: 400, marginTop: 20 }}
// // //                   id="password"
// // //                   label="Password"
// // //                   variant="outlined"
// // //                   type={showPassword ? "text" : "password"}
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   InputProps={{
// // //                     endAdornment: (
// // //                       <InputAdornment position="end">
// // //                         <IconButton
// // //                           aria-label="toggle password visibility"
// // //                           onClick={handleClickShowPassword}
// // //                           edge="end"
// // //                         >
// // //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// // //                         </IconButton>
// // //                       </InputAdornment>
// // //                     ),
// // //                   }}
// // //                 />
// // //               </div>
// // //               <div
// // //                 className="signup"
// // //                 style={{ textAlign: "center", marginTop: "20px" }}
// // //               >
// // //                 <Button
// // //                   type="submit"
// // //                   sx={{
// // //                     mt: 2,
// // //                     py: 2,
// // //                     maxWidth: "200px",
// // //                     marginX: "auto",
// // //                     backgroundColor: "rgba(0, 57, 77,1)",
// // //                     "&:hover": {
// // //                       backgroundColor: "#000",
// // //                       color: "#fff",
// // //                     },
// // //                   }}
// // //                   variant="contained"
// // //                 >
// // //                   SIGN UP
// // //                 </Button>
// // //               </div>
// // //             </form>
// // //           )}
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // };

// // // export default SignupLogin;
// // import React, { useState } from "react";
// // import {
// //   Card,
// //   CardContent,
// //   TextField,
// //   Typography,
// //   Button,
// //   ToggleButton,
// //   ToggleButtonGroup,
// //   IconButton,
// //   InputAdornment,
// //   Alert,
// // } from "@mui/material";
// // import Visibility from "@mui/icons-material/Visibility";
// // import VisibilityOff from "@mui/icons-material/VisibilityOff";
// // import { styled } from "@mui/material/styles";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
// // import "./SignupLogin.css";

// // const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
// //   "&.Mui-selected": {
// //     backgroundColor: "#000", // Change to black for selected state
// //     color: "#fff", // Keeping text color white for contrast
// //     "&:hover": {
// //       backgroundColor: theme.palette.grey[900], // Slightly lighter black on hover for some visual feedback
// //     },
// //   },
// // }));

// // const SignupLogin = () => {
// //   const [mode, setMode] = useState("signin");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [dob, setDob] = useState("");
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [firstName, setFirstName] = useState("");
// //   const [lastName, setLastName] = useState("");
// //   const [rollNo, setRollNo] = useState("");
// //   const [successMessage, setSuccessMessage] = useState("");
// //   const [errorMessage, setErrorMessage] = useState("");
// //   const navigate = useNavigate(); // Initialize useNavigate

// //   const handleModeChange = (event, newMode) => {
// //     if (newMode !== null) {
// //       setMode(newMode);
// //       setSuccessMessage(""); // Clear success message when switching modes
// //       setErrorMessage(""); // Clear error message when switching modes
// //     }
// //   };

// //   const handleClickShowPassword = () => {
// //     setShowPassword((prev) => !prev);
// //   };

// //   const handleSignupSubmit = async (e) => {
// //     e.preventDefault(); // Prevent the default form submission
// //     const payload = {
// //       firstName,
// //       lastName,
// //       dob,
// //       rollNumber: rollNo,
// //       email,
// //       password,
// //     };

// //     try {
// //       const response = await axios.post(
// //         "https://bajaj-backend-ybma.onrender.com/signup",
// //         payload
// //       );
// //       if (response.status === 200) {
// //         setSuccessMessage("Signup successful! Please log in.");
// //         setErrorMessage(""); // Clear error message
// //         setMode("signin"); // Switch to sign-in tab
// //       }
// //     } catch (error) {
// //       console.error("Error signing up:", error);
// //       setErrorMessage("Error signing up. Please try again.");
// //     }
// //   };

// //   const handleLoginSubmit = async (e) => {
// //     e.preventDefault(); // Prevent the default form submission
// //     const payload = {
// //       email,
// //       password,
// //     };

// //     try {
// //       const response = await axios.post(
// //         "https://bajaj-backend-ybma.onrender.com/login",
// //         payload
// //       );
// //       if (response.status === 200) {
// //         localStorage.setItem("authToken", response.data.token);
// //         setSuccessMessage("Login successful!");
// //         setErrorMessage(""); // Clear error message
// //         navigate("/jsonform"); // Navigate to /jsonform on successful login
// //       }
// //     } catch (error) {
// //       console.error("Error logging in:", error);
// //       setErrorMessage("Error logging in. Please try again.");
// //     }
// //   };

// //   return (
// //     <div className="auth-container">
// //       <Card
// //         sx={{
// //           borderRadius: "25px",
// //           backgroundColor: "rgba( 255, 255, 255,0.75)",
// //         }}
// //       >
// //         <CardContent>
// //           <div style={{ padding: 20 }}>
// //             <center>
// //               <Typography variant="h4">
// //                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
// //               </Typography>
// //             </center>
// //           </div>
// //           <div
// //             className="ToggleGroup"
// //             style={{ textAlign: "center", marginBottom: "20px" }}
// //           >
// //             <ToggleButtonGroup
// //               color="primary"
// //               value={mode}
// //               exclusive
// //               onChange={handleModeChange}
// //               aria-label="mode selection"
// //               sx={{ justifyContent: "center", mt: 2 }}
// //             >
// //               <CustomToggleButton value="signin" aria-label="Sign In">
// //                 Sign In
// //               </CustomToggleButton>
// //               <CustomToggleButton value="signup" aria-label="Sign Up">
// //                 Sign Up
// //               </CustomToggleButton>
// //             </ToggleButtonGroup>
// //           </div>

// //           {successMessage && (
// //             <Alert severity="success" sx={{ mb: 2 }}>
// //               {successMessage}
// //             </Alert>
// //           )}

// //           {errorMessage && (
// //             <Alert severity="error" sx={{ mb: 2 }}>
// //               {errorMessage}
// //             </Alert>
// //           )}

// //           {mode === "signin" ? (
// //             <form onSubmit={handleLoginSubmit}>
// //               <div className="email">
// //                 <TextField
// //                   style={{ width: 400 }}
// //                   id="email"
// //                   label="Email"
// //                   variant="outlined"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //               <div className="password">
// //                 <TextField
// //                   sx={{ width: 400, marginTop: "0px" }}
// //                   id="password"
// //                   label="Password"
// //                   variant="outlined"
// //                   type={showPassword ? "text" : "password"}
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   InputProps={{
// //                     endAdornment: (
// //                       <InputAdornment position="end">
// //                         <IconButton
// //                           aria-label="toggle password visibility"
// //                           onClick={handleClickShowPassword}
// //                           edge="end"
// //                         >
// //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// //                         </IconButton>
// //                       </InputAdornment>
// //                     ),
// //                   }}
// //                 />
// //               </div>
// //               <div
// //                 className="login"
// //                 style={{ textAlign: "center", marginTop: "20px" }}
// //               >
// //                 <Button
// //                   type="submit"
// //                   sx={{
// //                     mt: 2,
// //                     py: 2,
// //                     maxWidth: "200px",
// //                     marginX: "auto",
// //                     backgroundColor: "rgba(0, 57, 77,1)",
// //                     "&:hover": {
// //                       backgroundColor: "#000",
// //                       color: "#fff",
// //                     },
// //                   }}
// //                   variant="contained"
// //                 >
// //                   SIGN IN
// //                 </Button>
// //               </div>
// //             </form>
// //           ) : (
// //             <form onSubmit={handleSignupSubmit}>
// //               <div className="firstname">
// //                 <TextField
// //                   style={{ width: 400 }}
// //                   id="firstName"
// //                   label="First Name"
// //                   variant="outlined"
// //                   value={firstName}
// //                   onChange={(e) => setFirstName(e.target.value)}
// //                 />
// //               </div>
// //               <div className="lastname">
// //                 <TextField
// //                   style={{ width: 400, marginTop: 3 }}
// //                   id="lastName"
// //                   label="Last Name"
// //                   variant="outlined"
// //                   value={lastName}
// //                   onChange={(e) => setLastName(e.target.value)}
// //                 />
// //               </div>
// //               <div className="email">
// //                 <TextField
// //                   style={{ width: 400, marginTop: 3 }}
// //                   id="email"
// //                   label="Email"
// //                   variant="outlined"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                 />
// //               </div>
// //               <div className="rollno">
// //                 <TextField
// //                   style={{ width: 400, marginTop: 3 }}
// //                   id="rollNo"
// //                   label="Roll No"
// //                   variant="outlined"
// //                   value={rollNo}
// //                   onChange={(e) => setRollNo(e.target.value)}
// //                 />
// //               </div>
// //               <div className="dob">
// //                 <TextField
// //                   style={{ width: 400, marginTop: 3 }}
// //                   id="dob"
// //                   label="Date of Birth (ddmmyyyy)"
// //                   variant="outlined"
// //                   value={dob}
// //                   onChange={(e) => setDob(e.target.value)}
// //                 />
// //               </div>
// //               <div className="password">
// //                 <TextField
// //                   sx={{ width: 400, marginTop: 3 }}
// //                   id="password"
// //                   label="Password"
// //                   variant="outlined"
// //                   type={showPassword ? "text" : "password"}
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   InputProps={{
// //                     endAdornment: (
// //                       <InputAdornment position="end">
// //                         <IconButton
// //                           aria-label="toggle password visibility"
// //                           onClick={handleClickShowPassword}
// //                           edge="end"
// //                         >
// //                           {showPassword ? <VisibilityOff /> : <Visibility />}
// //                         </IconButton>
// //                       </InputAdornment>
// //                     ),
// //                   }}
// //                 />
// //               </div>
// //               <div
// //                 className="signup"
// //                 style={{ textAlign: "center", marginTop: "20px" }}
// //               >
// //                 <Button
// //                   type="submit"
// //                   sx={{
// //                     mt: 2,
// //                     py: 2,
// //                     maxWidth: "200px",
// //                     marginX: "auto",
// //                     backgroundColor: "rgba(0, 57, 77,1)",
// //                     "&:hover": {
// //                       backgroundColor: "#000",
// //                       color: "#fff",
// //                     },
// //                   }}
// //                   variant="contained"
// //                 >
// //                   SIGN UP
// //                 </Button>
// //               </div>
// //             </form>
// //           )}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default SignupLogin;
// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   Button,
//   ToggleButton,
//   ToggleButtonGroup,
//   IconButton,
//   InputAdornment,
//   Alert,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
// } from "@mui/material";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import { styled } from "@mui/material/styles";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./SignupLogin.css";

// const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
//   "&.Mui-selected": {
//     backgroundColor: "#000",
//     color: "#fff",
//     "&:hover": {
//       backgroundColor: theme.palette.grey[900],
//     },
//   },
// }));

// const SignupLogin = () => {
//   const [mode, setMode] = useState("signin");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [dob, setDob] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [rollNo, setRollNo] = useState("");
//   const [successMessage, setSuccessMessage] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [dialogOpen, setDialogOpen] = useState(false);
//   const [dialogContent, setDialogContent] = useState("");
//   const navigate = useNavigate();

//   const handleModeChange = (event, newMode) => {
//     if (newMode !== null) {
//       setMode(newMode);
//       setSuccessMessage("");
//       setErrorMessage("");
//     }
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSignupSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       firstName,
//       lastName,
//       dob,
//       rollNumber: rollNo,
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post(
//         "https://bajaj-backend-ybma.onrender.com/signup",
//         payload
//       );
//       setDialogContent(JSON.stringify(response.data, null, 2));
//       setDialogOpen(true);

//       if (response.status === 200) {
//         setSuccessMessage("Signup successful! Please log in.");
//         setErrorMessage("");
//         setMode("signin");
//       }
//     } catch (error) {
//       console.error("Error signing up:", error);
//       setErrorMessage("Error signing up. Please try again.");
//       setDialogContent("Error signing up. Please try again.");
//       setDialogOpen(true);
//     }
//   };

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       email,
//       password,
//     };

//     try {
//       const response = await axios.post(
//         "https://bajaj-backend-ybma.onrender.com/login",
//         payload
//       );
//       setDialogContent(JSON.stringify(response.data, null, 2));
//       setDialogOpen(true);

//       if (response.status === 200) {
//         localStorage.setItem("authToken", response.data.token);
//         setSuccessMessage("Login successful!");
//         setErrorMessage("");
//         navigate("/jsonform");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setErrorMessage("Error logging in. Please try again.");
//       setDialogContent("Error logging in. Please try again.");
//       setDialogOpen(true);
//     }
//   };

//   const handleCloseDialog = () => {
//     setDialogOpen(false);
//   };

//   return (
//     <div className="auth-container">
//       <Card
//         sx={{
//           borderRadius: "25px",
//           backgroundColor: "rgba( 255, 255, 255,0.75)",
//         }}
//       >
//         <CardContent>
//           <div style={{ padding: 20 }}>
//             <center>
//               <Typography variant="h4">
//                 {mode === "signin" ? "SIGN IN" : "SIGN UP"}
//               </Typography>
//             </center>
//           </div>
//           <div
//             className="ToggleGroup"
//             style={{ textAlign: "center", marginBottom: "20px" }}
//           >
//             <ToggleButtonGroup
//               color="primary"
//               value={mode}
//               exclusive
//               onChange={handleModeChange}
//               aria-label="mode selection"
//               sx={{ justifyContent: "center", mt: 2 }}
//             >
//               <CustomToggleButton value="signin" aria-label="Sign In">
//                 Sign In
//               </CustomToggleButton>
//               <CustomToggleButton value="signup" aria-label="Sign Up">
//                 Sign Up
//               </CustomToggleButton>
//             </ToggleButtonGroup>
//           </div>

//           {successMessage && (
//             <Alert severity="success" sx={{ mb: 2 }}>
//               {successMessage}
//             </Alert>
//           )}

//           {errorMessage && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {errorMessage}
//             </Alert>
//           )}

//           {mode === "signin" ? (
//             <form onSubmit={handleLoginSubmit}>
//               <div className="email">
//                 <TextField
//                   style={{ width: 400 }}
//                   id="email"
//                   label="Email"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="password">
//                 <TextField
//                   sx={{ width: 400, marginTop: "0px" }}
//                   id="password"
//                   label="Password"
//                   variant="outlined"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </div>
//               <div
//                 className="login"
//                 style={{ textAlign: "center", marginTop: "20px" }}
//               >
//                 <Button
//                   type="submit"
//                   sx={{
//                     mt: 2,
//                     py: 2,
//                     maxWidth: "200px",
//                     marginX: "auto",
//                     backgroundColor: "rgba(0, 57, 77,1)",
//                     "&:hover": {
//                       backgroundColor: "#000",
//                       color: "#fff",
//                     },
//                   }}
//                   variant="contained"
//                 >
//                   SIGN IN
//                 </Button>
//               </div>
//             </form>
//           ) : (
//             <form onSubmit={handleSignupSubmit}>
//               <div className="firstname">
//                 <TextField
//                   style={{ width: 400 }}
//                   id="firstName"
//                   label="First Name"
//                   variant="outlined"
//                   value={firstName}
//                   onChange={(e) => setFirstName(e.target.value)}
//                 />
//               </div>
//               <div className="lastname">
//                 <TextField
//                   style={{ width: 400, marginTop: 3 }}
//                   id="lastName"
//                   label="Last Name"
//                   variant="outlined"
//                   value={lastName}
//                   onChange={(e) => setLastName(e.target.value)}
//                 />
//               </div>
//               <div className="email">
//                 <TextField
//                   style={{ width: 400, marginTop: 3 }}
//                   id="email"
//                   label="Email"
//                   variant="outlined"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div className="rollno">
//                 <TextField
//                   style={{ width: 400, marginTop: 3 }}
//                   id="rollNo"
//                   label="Roll No"
//                   variant="outlined"
//                   value={rollNo}
//                   onChange={(e) => setRollNo(e.target.value)}
//                 />
//               </div>
//               <div className="dob">
//                 <TextField
//                   style={{ width: 400, marginTop: 3 }}
//                   id="dob"
//                   label="Date of Birth (ddmmyyyy)"
//                   variant="outlined"
//                   value={dob}
//                   onChange={(e) => setDob(e.target.value)}
//                 />
//               </div>
//               <div className="password">
//                 <TextField
//                   sx={{ width: 400, marginTop: 3 }}
//                   id="password"
//                   label="Password"
//                   variant="outlined"
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   InputProps={{
//                     endAdornment: (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="toggle password visibility"
//                           onClick={handleClickShowPassword}
//                           edge="end"
//                         >
//                           {showPassword ? <VisibilityOff /> : <Visibility />}
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                   }}
//                 />
//               </div>
//               <div
//                 className="signup"
//                 style={{ textAlign: "center", marginTop: "20px" }}
//               >
//                 <Button
//                   type="submit"
//                   sx={{
//                     mt: 2,
//                     py: 2,
//                     maxWidth: "200px",
//                     marginX: "auto",
//                     backgroundColor: "rgba(0, 57, 77,1)",
//                     "&:hover": {
//                       backgroundColor: "#000",
//                       color: "#fff",
//                     },
//                   }}
//                   variant="contained"
//                 >
//                   SIGN UP
//                 </Button>
//               </div>
//             </form>
//           )}
//         </CardContent>
//       </Card>

//       {/* Dialog for showing API response */}
//       <Dialog
//         open={dialogOpen}
//         onClose={handleCloseDialog}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//       >
//         <DialogTitle id="alert-dialog-title">{"Server Response"}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description">
//             {dialogContent}
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseDialog} color="primary">
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default SignupLogin;
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
  Alert,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { styled } from "@mui/material/styles";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignupLogin.css";

const CustomToggleButton = styled(ToggleButton)(({ theme }) => ({
  "&.Mui-selected": {
    backgroundColor: "#000",
    color: "#fff",
    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

const SignupLogin = () => {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState("");
  const navigate = useNavigate();

  const handleModeChange = (event, newMode) => {
    if (newMode !== null) {
      setMode(newMode);
      setSuccessMessage("");
      setErrorMessage("");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
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
        "https://bajaj-backend-ybma.onrender.com/signup",
        payload
      );
      if (response.status === 201) {
        setDialogContent("User created successfully.");
      } else {
        setDialogContent("Error creating user. Please try again.");
      }
      setDialogOpen(true);
    } catch (error) {
      console.error("Error signing up:", error);
      setDialogContent("Error signing up. Please try again.");
      setDialogOpen(true);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "https://bajaj-backend-ybma.onrender.com/login",
        payload
      );
      if (response.status === 200) {
        localStorage.setItem("authToken", response.data.token);
        setSuccessMessage("Login successful!");
        setErrorMessage("");
        navigate("/jsonform");
      } else {
        setDialogContent("Error logging in. Please try again.");
        setDialogOpen(true);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setDialogContent("Error logging in. Please try again.");
      setDialogOpen(true);
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    if (mode === "signup") {
      window.location.reload(); // Reload the page on dialog close after signup
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

          {successMessage && (
            <Alert severity="success" sx={{ mb: 2 }}>
              {successMessage}
            </Alert>
          )}

          {errorMessage && (
            <Alert severity="error" sx={{ mb: 2 }}>
              {errorMessage}
            </Alert>
          )}

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
              <div className="password">
                <TextField
                  sx={{ width: 400, marginTop: "0px" }}
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
                      backgroundColor: "#000",
                      color: "#fff",
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
                  style={{ width: 400, marginTop: 3 }}
                  id="lastName"
                  label="Last Name"
                  variant="outlined"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="email">
                <TextField
                  style={{ width: 400, marginTop: 3 }}
                  id="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="rollno">
                <TextField
                  style={{ width: 400, marginTop: 3 }}
                  id="rollNo"
                  label="Roll No"
                  variant="outlined"
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </div>
              <div className="dob">
                <TextField
                  style={{ width: 400, marginTop: 3 }}
                  id="dob"
                  label="Date of Birth (ddmmyyyy)"
                  variant="outlined"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
              <div className="password">
                <TextField
                  sx={{ width: 400, marginTop: 3 }}
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
                      backgroundColor: "#000",
                      color: "#fff",
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

      {/* Dialog for showing API response */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: { backgroundColor: "#000", color: "white" }, // Set background color to black
        }}
        sx={{color:"white"}}
      >
        <DialogTitle id="alert-dialog-title">{"Server Response"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{color:"white"}}>
            {dialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" sx={{color:"white"}}>
            Okay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SignupLogin;
