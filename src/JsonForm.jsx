// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Card,
// // // // //   CardContent,
// // // // //   TextField,
// // // // //   Typography,
// // // // //   Button,
// // // // //   Select,
// // // // //   MenuItem,
// // // // //   FormControl,
// // // // //   InputLabel,
// // // // //   Chip,
// // // // //   OutlinedInput,
// // // // //   Box,
// // // // // } from "@mui/material";
// // // // // import CancelIcon from "@mui/icons-material/Cancel";
// // // // // import "./JsonForm.css";

// // // // // const JsonForm = () => {
// // // // //   const [jsonInput, setJsonInput] = useState("");
// // // // //   const [filter, setFilter] = useState([]); // Initialize filter as an empty array

// // // // //   const handleJsonInputChange = (event) => {
// // // // //     setJsonInput(event.target.value);
// // // // //   };

// // // // //   const handleFilterChange = (event) => {
// // // // //     const {
// // // // //       target: { value },
// // // // //     } = event;
// // // // //     setFilter(typeof value === "string" ? value.split(",") : value);
// // // // //   };

// // // // //   const handleDelete = (filterToDelete) => {
// // // // //     setFilter((filters) =>
// // // // //       filters.filter((filter) => filter !== filterToDelete)
// // // // //     );
// // // // //   };

// // // // //   const handleSubmit = () => {
// // // // //     // Example: Log the JSON input and selected filters to the console
// // // // //     console.log("JSON Input:", jsonInput);
// // // // //     console.log("Selected Filters:", filter);

// // // // //     // Add your logic here for what should happen on submit
// // // // //   };

// // // // //   return (
// // // // //     <div className="jsonform-container">
// // // // //       <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
// // // // //         <CardContent>
// // // // //           <div style={{ paddingBottom: 20 }}>
// // // // //             <Typography variant="h6">API Input</Typography>
// // // // //             <TextField
// // // // //               fullWidth
// // // // //               variant="outlined"
// // // // //               value={jsonInput}
// // // // //               onChange={handleJsonInputChange}
// // // // //               placeholder='{"data":["M","1","334","4","B"]}'
// // // // //               multiline
// // // // //               rows={2}
// // // // //             />
// // // // //           </div>
// // // // //           <div className="jsonform-submit">
// // // // //             <Button variant="contained" color="primary" onClick={handleSubmit}>
// // // // //               Submit
// // // // //             </Button>
// // // // //           </div>
// // // // //           <div style={{ paddingTop: 20 }}>
// // // // //             <Typography variant="h6">Multi Filter</Typography>
// // // // //             <FormControl fullWidth variant="outlined">
// // // // //               <InputLabel id="filter-label">Filter</InputLabel>
// // // // //               <Select
// // // // //                 labelId="filter-label"
// // // // //                 multiple
// // // // //                 value={filter}
// // // // //                 onChange={handleFilterChange}
// // // // //                 input={
// // // // //                   <OutlinedInput id="select-multiple-chip" label="Filter" />
// // // // //                 }
// // // // //                 renderValue={(selected) => (
// // // // //                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// // // // //                     {selected.map((value) => (
// // // // //                       <Chip
// // // // //                         key={value}
// // // // //                         label={value}
// // // // //                         onDelete={() => handleDelete(value)}
// // // // //                         deleteIcon={<CancelIcon />}
// // // // //                       />
// // // // //                     ))}
// // // // //                   </Box>
// // // // //                 )}
// // // // //               >
// // // // //                 <MenuItem value="Numbers">Numbers</MenuItem>
// // // // //                 <MenuItem value="Alphabets">Alphabets</MenuItem>
// // // // //                 <MenuItem value="Special Characters">
// // // // //                   Special Characters
// // // // //                 </MenuItem>
// // // // //               </Select>
// // // // //             </FormControl>
// // // // //           </div>
// // // // //         </CardContent>
// // // // //       </Card>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default JsonForm;
// // // // import React, { useState } from "react";
// // // // import {
// // // //   Card,
// // // //   CardContent,
// // // //   TextField,
// // // //   Typography,
// // // //   Button,
// // // //   Select,
// // // //   MenuItem,
// // // //   FormControl,
// // // //   InputLabel,
// // // //   Chip,
// // // //   OutlinedInput,
// // // //   Box,
// // // //   Alert,
// // // // } from "@mui/material";
// // // // import CancelIcon from "@mui/icons-material/Cancel";
// // // // import "./JsonForm.css";

// // // // const JsonForm = () => {
// // // //   const [jsonInput, setJsonInput] = useState("");
// // // //   const [filter, setFilter] = useState([]); // Initialize filter as an empty array
// // // //   const [error, setError] = useState(null);

// // // //   const handleJsonInputChange = (event) => {
// // // //     setJsonInput(event.target.value);
// // // //   };

// // // //   const handleFilterChange = (event) => {
// // // //     const {
// // // //       target: { value },
// // // //     } = event;
// // // //     setFilter(typeof value === "string" ? value.split(",") : value);
// // // //   };

// // // //   const handleDelete = (filterToDelete) => {
// // // //     setFilter((filters) =>
// // // //       filters.filter((filter) => filter !== filterToDelete)
// // // //     );
// // // //   };

// // // //   const handleSubmit = () => {
// // // //     try {
// // // //       JSON.parse(jsonInput);
// // // //       setError(null); // Clear any previous error
// // // //       console.log("JSON Input is valid:", jsonInput);
// // // //       console.log("Selected Filters:", filter);
// // // //       // Add your logic here for what should happen on successful validation
// // // //     } catch (e) {
// // // //       setError("Invalid JSON format. Please check your input.");
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="jsonform-container">
// // // //       <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
// // // //         <CardContent>
// // // //           <div style={{ paddingBottom: 20 }}>
// // // //             <Typography variant="h6">API Input</Typography>
// // // //             <TextField
// // // //               fullWidth
// // // //               variant="outlined"
// // // //               value={jsonInput}
// // // //               onChange={handleJsonInputChange}
// // // //               placeholder='{"data":["M","1","334","4","B"]}'
// // // //               multiline
// // // //               rows={2}
// // // //               error={!!error}
// // // //               helperText={error}
// // // //             />
// // // //           </div>
// // // //           <div className="jsonform-submit">
// // // //             <Button variant="contained" color="primary" onClick={handleSubmit}>
// // // //               Submit
// // // //             </Button>
// // // //           </div>
// // // //           <div style={{ paddingTop: 20 }}>
// // // //             <Typography variant="h6">Multi Filter</Typography>
// // // //             <FormControl fullWidth variant="outlined">
// // // //               <InputLabel id="filter-label">Filter</InputLabel>
// // // //               <Select
// // // //                 labelId="filter-label"
// // // //                 multiple
// // // //                 value={filter}
// // // //                 onChange={handleFilterChange}
// // // //                 input={
// // // //                   <OutlinedInput id="select-multiple-chip" label="Filter" />
// // // //                 }
// // // //                 renderValue={(selected) => (
// // // //                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// // // //                     {selected.map((value) => (
// // // //                       <Chip
// // // //                         key={value}
// // // //                         label={value}
// // // //                         onDelete={() => handleDelete(value)}
// // // //                         deleteIcon={<CancelIcon />}
// // // //                       />
// // // //                     ))}
// // // //                   </Box>
// // // //                 )}
// // // //               >
// // // //                 <MenuItem value="Numbers">Numbers</MenuItem>
// // // //                 <MenuItem value="Alphabets">Alphabets</MenuItem>
// // // //                 <MenuItem value="Special Characters">
// // // //                   Special Characters
// // // //                 </MenuItem>
// // // //               </Select>
// // // //             </FormControl>
// // // //           </div>
// // // //         </CardContent>
// // // //       </Card>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default JsonForm;
// // // import React, { useState } from "react";
// // // import {
// // //   Card,
// // //   CardContent,
// // //   TextField,
// // //   Typography,
// // //   Button,
// // //   Select,
// // //   MenuItem,
// // //   FormControl,
// // //   InputLabel,
// // //   Chip,
// // //   OutlinedInput,
// // //   Box,
// // //   Alert,
// // // } from "@mui/material";
// // // import CancelIcon from "@mui/icons-material/Cancel";
// // // import axios from "axios";
// // // import "./JsonForm.css";

// // // const JsonForm = () => {
// // //   const [jsonInput, setJsonInput] = useState("");
// // //   const [filter, setFilter] = useState([]); // Initialize filter as an empty array
// // //   const [error, setError] = useState(null);
// // //   const [response, setResponse] = useState(null); // State to hold API response

// // //   const handleJsonInputChange = (event) => {
// // //     setJsonInput(event.target.value);
// // //   };

// // //   const handleFilterChange = (event) => {
// // //     const {
// // //       target: { value },
// // //     } = event;
// // //     setFilter(typeof value === "string" ? value.split(",") : value);
// // //   };

// // //   const handleDelete = (filterToDelete) => {
// // //     setFilter((filters) =>
// // //       filters.filter((filter) => filter !== filterToDelete)
// // //     );
// // //   };

// // //   const handleSubmit = async () => {
// // //     try {
// // //       const parsedJson = JSON.parse(jsonInput); // Parse the JSON input
// // //       setError(null); // Clear any previous error

// // //       console.log("JSON Input is valid:", parsedJson);
// // //       console.log("Selected Filters:", filter);

// // //       // Determine which endpoint to hit based on the filter
// // //       let endpoint;
// // //       if (filter.includes("Login")) {
// // //         endpoint = "https://bajaj-backend-ybma.onrender.com/login";
// // //       } else if (filter.includes("Signup")) {
// // //         endpoint = "https://bajaj-backend-ybma.onrender.com/signup";
// // //       } else {
// // //         setError("Please select either 'Login' or 'Signup' filter.");
// // //         return;
// // //       }

// // //       // Send the POST request to the appropriate endpoint
// // //       const apiResponse = await axios.post(endpoint, parsedJson);
// // //       setResponse(apiResponse.data); // Handle the response as necessary
// // //       console.log("API Response:", apiResponse.data);
// // //     } catch (e) {
// // //       if (e instanceof SyntaxError) {
// // //         setError("Invalid JSON format. Please check your input.");
// // //       } else {
// // //         console.error("API request failed:", e);
// // //         setError("API request failed. Please try again.");
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div className="jsonform-container">
// // //       <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
// // //         <CardContent>
// // //           <div style={{ paddingBottom: 20 }}>
// // //             <Typography variant="h6">API Input</Typography>
// // //             <TextField
// // //               fullWidth
// // //               variant="outlined"
// // //               value={jsonInput}
// // //               onChange={handleJsonInputChange}
// // //               placeholder='{"data":["M","1","334","4","B"]}'
// // //               multiline
// // //               rows={2}
// // //               error={!!error}
// // //               helperText={error}
// // //             />
// // //           </div>
// // //           <div className="jsonform-submit">
// // //             <Button variant="contained" color="primary" onClick={handleSubmit}>
// // //               Submit
// // //             </Button>
// // //           </div>
// // //           <div style={{ paddingTop: 20 }}>
// // //             <Typography variant="h6">Multi Filter</Typography>
// // //             <FormControl fullWidth variant="outlined">
// // //               <InputLabel id="filter-label">Filter</InputLabel>
// // //               <Select
// // //                 labelId="filter-label"
// // //                 multiple
// // //                 value={filter}
// // //                 onChange={handleFilterChange}
// // //                 input={
// // //                   <OutlinedInput id="select-multiple-chip" label="Filter" />
// // //                 }
// // //                 renderValue={(selected) => (
// // //                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// // //                     {selected.map((value) => (
// // //                       <Chip
// // //                         key={value}
// // //                         label={value}
// // //                         onDelete={() => handleDelete(value)}
// // //                         deleteIcon={<CancelIcon />}
// // //                       />
// // //                     ))}
// // //                   </Box>
// // //                 )}
// // //               >
// // //                 <MenuItem value="Login">Login</MenuItem>
// // //                 <MenuItem value="Signup">Signup</MenuItem>
// // //               </Select>
// // //             </FormControl>
// // //           </div>
// // //           {response && (
// // //             <Alert severity="success" sx={{ mt: 2 }}>
// // //               {JSON.stringify(response, null, 2)}
// // //             </Alert>
// // //           )}
// // //         </CardContent>
// // //       </Card>
// // //     </div>
// // //   );
// // // };

// // // export default JsonForm;
// // import React, { useState } from "react";
// // import {
// //   Card,
// //   CardContent,
// //   TextField,
// //   Typography,
// //   Button,
// //   Select,
// //   MenuItem,
// //   FormControl,
// //   InputLabel,
// //   Chip,
// //   OutlinedInput,
// //   Box,
// //   Alert,
// // } from "@mui/material";
// // import CancelIcon from "@mui/icons-material/Cancel";
// // import axios from "axios";
// // import "./JsonForm.css";

// // const JsonForm = () => {
// //   const [jsonInput, setJsonInput] = useState("");
// //   const [filter, setFilter] = useState([]); // Initialize filter as an empty array
// //   const [error, setError] = useState(null);
// //   const [response, setResponse] = useState(null); // State to hold API response

// //   const handleJsonInputChange = (event) => {
// //     setJsonInput(event.target.value);
// //   };

// //   const handleFilterChange = (event) => {
// //     const {
// //       target: { value },
// //     } = event;
// //     setFilter(typeof value === "string" ? value.split(",") : value);
// //   };

// //   const handleDelete = (filterToDelete) => {
// //     setFilter((filters) =>
// //       filters.filter((filter) => filter !== filterToDelete)
// //     );
// //   };

// //   const handleSubmit = async () => {
// //     try {
// //       const parsedJson = JSON.parse(jsonInput); // Parse the JSON input
// //       setError(null); // Clear any previous error

// //       console.log("JSON Input is valid:", parsedJson);
// //       console.log("Selected Filters:", filter);

// //       // Construct the payload
// //       const payload = { data: parsedJson };

// //       // Send the POST request to the /bfhl endpoint
// //       const apiResponse = await axios.post(
// //         "https://bajaj-backend-ybma.onrender.com/bfhl",
// //         payload
// //       );
// //       setResponse(apiResponse.data); // Handle the response as necessary
// //       console.log("API Response:", apiResponse.data);
// //     } catch (e) {
// //       if (e instanceof SyntaxError) {
// //         setError("Invalid JSON format. Please check your input.");
// //       } else {
// //         console.error("API request failed:", e);
// //         setError("API request failed. Please try again.");
// //       }
// //     }
// //   };

// //   return (
// //     <div className="jsonform-container">
// //       <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
// //         <CardContent>
// //           <div style={{ paddingBottom: 20 }}>
// //             <Typography variant="h6">API Input</Typography>
// //             <TextField
// //               fullWidth
// //               variant="outlined"
// //               value={jsonInput}
// //               onChange={handleJsonInputChange}
// //               placeholder='{"data":["M","1","334","4","B"]}'
// //               multiline
// //               rows={2}
// //               error={!!error}
// //               helperText={error}
// //             />
// //           </div>
// //           <div className="jsonform-submit">
// //             <Button variant="contained" color="primary" onClick={handleSubmit}>
// //               Submit
// //             </Button>
// //           </div>
// //           <div style={{ paddingTop: 20 }}>
// //             <Typography variant="h6">Multi Filter</Typography>
// //             <FormControl fullWidth variant="outlined">
// //               <InputLabel id="filter-label">Filter</InputLabel>
// //               <Select
// //                 labelId="filter-label"
// //                 multiple
// //                 value={filter}
// //                 onChange={handleFilterChange}
// //                 input={
// //                   <OutlinedInput id="select-multiple-chip" label="Filter" />
// //                 }
// //                 renderValue={(selected) => (
// //                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
// //                     {selected.map((value) => (
// //                       <Chip
// //                         key={value}
// //                         label={value}
// //                         onDelete={() => handleDelete(value)}
// //                         deleteIcon={<CancelIcon />}
// //                       />
// //                     ))}
// //                   </Box>
// //                 )}
// //               >
// //                 <MenuItem value="Login">Login</MenuItem>
// //                 <MenuItem value="Signup">Signup</MenuItem>
// //               </Select>
// //             </FormControl>
// //           </div>
// //           {response && (
// //             <Alert severity="success" sx={{ mt: 2 }}>
// //               {JSON.stringify(response, null, 2)}
// //             </Alert>
// //           )}
// //         </CardContent>
// //       </Card>
// //     </div>
// //   );
// // };

// // export default JsonForm;
// import React, { useState } from "react";
// import {
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   Button,
//   Select,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Chip,
//   OutlinedInput,
//   Box,
//   Alert,
// } from "@mui/material";
// import CancelIcon from "@mui/icons-material/Cancel";
// import axios from "axios";
// import "./JsonForm.css";

// const JsonForm = () => {
//   const [jsonInput, setJsonInput] = useState("");
//   const [filter, setFilter] = useState([]); // Initialize filter as an empty array
//   const [error, setError] = useState(null);
//   const [response, setResponse] = useState(null); // State to hold API response

//   const handleJsonInputChange = (event) => {
//     setJsonInput(event.target.value);
//   };

//   const handleFilterChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setFilter(typeof value === "string" ? value.split(",") : value);
//   };

//   const handleDelete = (filterToDelete) => {
//     setFilter((filters) =>
//       filters.filter((filter) => filter !== filterToDelete)
//     );
//   };

//   const handleSubmit = async () => {
//     try {
//       const parsedJson = JSON.parse(jsonInput); // Parse the JSON input
//       setError(null); // Clear any previous error

//       console.log("JSON Input is valid:", parsedJson);
//       console.log("Selected Filters:", filter);

//       // Construct the payload
//       const payload = { data: parsedJson };

//       // Retrieve the token from local storage
//       const token = localStorage.getItem("authToken");

//       // Send the POST request to the /bfhl endpoint with the authorization header
//       const apiResponse = await axios.post(
//         "https://bajaj-backend-ybma.onrender.com/bfhl",
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Include the token in the Authorization header
//           },
//         }
//       );
//       setResponse(apiResponse.data); // Handle the response as necessary
//       console.log("API Response:", apiResponse.data);
//     } catch (e) {
//       if (e instanceof SyntaxError) {
//         setError("Invalid JSON format. Please check your input.");
//       } else {
//         console.error("API request failed:", e);
//         setError("API request failed. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="jsonform-container">
//       <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
//         <CardContent>
//           <div style={{ paddingBottom: 20 }}>
//             <Typography variant="h6">API Input</Typography>
//             <TextField
//               fullWidth
//               variant="outlined"
//               value={jsonInput}
//               onChange={handleJsonInputChange}
//               placeholder='{"data":["M","1","334","4","B"]}'
//               multiline
//               rows={2}
//               error={!!error}
//               helperText={error}
//             />
//           </div>
//           <div className="jsonform-submit">
//             <Button variant="contained" color="primary" onClick={handleSubmit}>
//               Submit
//             </Button>
//           </div>
//           <div style={{ paddingTop: 20 }}>
//             <Typography variant="h6">Multi Filter</Typography>
//             <FormControl fullWidth variant="outlined">
//               <InputLabel id="filter-label">Filter</InputLabel>
//               <Select
//                 labelId="filter-label"
//                 multiple
//                 value={filter}
//                 onChange={handleFilterChange}
//                 input={
//                   <OutlinedInput id="select-multiple-chip" label="Filter" />
//                 }
//                 renderValue={(selected) => (
//                   <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
//                     {selected.map((value) => (
//                       <Chip
//                         key={value}
//                         label={value}
//                         onDelete={() => handleDelete(value)}
//                         deleteIcon={<CancelIcon />}
//                       />
//                     ))}
//                   </Box>
//                 )}
//               >
//                 <MenuItem value="Login">Login</MenuItem>
//                 <MenuItem value="Signup">Signup</MenuItem>
//               </Select>
//             </FormControl>
//           </div>
//           {response && (
//             <Alert severity="success" sx={{ mt: 2 }}>
//               {JSON.stringify(response, null, 2)}
//             </Alert>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default JsonForm;
import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  OutlinedInput,
  Box,
  Alert,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import "./JsonForm.css";

const JsonForm = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [filter, setFilter] = useState([]); // Initialize filter as an empty array
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null); // State to hold API response

  const handleJsonInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(typeof value === "string" ? value.split(",") : value);
  };

  const handleDelete = (filterToDelete) => {
    setFilter((filters) =>
      filters.filter((filter) => filter !== filterToDelete)
    );
  };

  const handleSubmit = async () => {
    try {
      const parsedJson = JSON.parse(jsonInput); // Parse the JSON input
      setError(null); // Clear any previous error

      console.log("JSON Input is valid:", parsedJson);
      console.log("Selected Filters:", filter);

      // Construct the payload
      const payload = { data: parsedJson };

      // Retrieve the token from local storage
      const token = localStorage.getItem("authToken");

      // Send the POST request to the /bfhl endpoint with the authorization header
      const apiResponse = await axios.post(
        "https://bajaj-backend-ybma.onrender.com/bfhl",
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include the token in the Authorization header
          },
        }
      );
      setResponse(apiResponse.data); // Set the response to state to display in alert
      console.log("API Response:", apiResponse.data);
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError("Invalid JSON format. Please check your input.");
      } else {
        console.error("API request failed:", e);
        setError("API request failed. Please try again.");
      }
    }
  };

  return (
    <div className="jsonform-container">
      <Card className="jsonform-card" sx={{ backgroundColor: "#242424" }}>
        <CardContent>
          <div style={{ paddingBottom: 20 }}>
            <Typography variant="h6">API Input</Typography>
            <TextField
              fullWidth
              variant="outlined"
              value={jsonInput}
              onChange={handleJsonInputChange}
              placeholder='{"data":["M","1","334","4","B"]}'
              multiline
              rows={2}
              error={!!error}
              helperText={error}
            />
          </div>
          <div className="jsonform-submit">
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
          <div style={{ paddingTop: 20 }}>
            <Typography variant="h6">Multi Filter</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="filter-label">Filter</InputLabel>
              <Select
                labelId="filter-label"
                multiple
                value={filter}
                onChange={handleFilterChange}
                input={
                  <OutlinedInput id="select-multiple-chip" label="Filter" />
                }
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip
                        key={value}
                        label={value}
                        onDelete={() => handleDelete(value)}
                        deleteIcon={<CancelIcon />}
                      />
                    ))}
                  </Box>
                )}
              >
                <MenuItem value="Login">Login</MenuItem>
                <MenuItem value="Signup">Signup</MenuItem>
              </Select>
            </FormControl>
          </div>
          {response && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {typeof response === "object"
                ? JSON.stringify(response, null, 2)
                : response}
            </Alert>
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default JsonForm;
