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
  Checkbox,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckIcon from "@mui/icons-material/Check";
import axios from "axios";
import "./JsonForm.css";

const JsonForm = () => {
  const [jsonInput, setJsonInput] = useState("");
  const [filter, setFilter] = useState([]);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleJsonInputChange = (event) => {
    setJsonInput(event.target.value);
  };

  const handleFilterChange = (event) => {
    const {
      target: { value },
    } = event;
    setFilter(typeof value === "string" ? value.split(",") : value);
  };

  const handleDelete = (event, filterToDelete) => {
    event.stopPropagation(); // Prevent the dropdown from toggling
    setFilter((filters) =>
      filters.filter((filter) => filter !== filterToDelete)
    );
  };

  const handleSubmit = async () => {
    try {
      setLoading(true); // Start loading spinner
      const parsedJson = JSON.parse(jsonInput);
      setError(null);
      const token = localStorage.getItem("authToken");

      const apiResponse = await axios.post(
        "https://bajaj-backend-ybma.onrender.com/bfhl",
        parsedJson,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponse(apiResponse.data);
    } catch (e) {
      if (e instanceof SyntaxError) {
        setError("Invalid JSON format. Please check your input.");
      } else {
        setError("API request failed. Please try again.");
      }
    } finally {
      setLoading(false); // Stop loading spinner
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
              rows={5}
              error={!!error}
              helperText={error}
            />
          </div>
          <div className="jsonform-submit">
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={loading} // Disable button when loading
              startIcon={
                loading ? <CircularProgress size={20} color="inherit" /> : null
              } // Add spinner icon
            >
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
          {response && (
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
                    <OutlinedInput
                      id="select-multiple-chip"
                      label="Filter"
                      style={{ background: "#f2f2f2" }}
                    />
                  }
                  renderValue={(selected) => (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip
                          key={value}
                          label={value}
                          onDelete={(event) => handleDelete(event, value)}
                          deleteIcon={<CancelIcon />}
                        />
                      ))}
                    </Box>
                  )}
                >
                  {["numbers", "alphabets", "highest_lowercase_alphabet"].map(
                    (option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          {filter.includes(option) ? (
                            <CheckIcon color="success" />
                          ) : null}
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            option.charAt(0).toUpperCase() +
                            option.slice(1).replace(/_/g, " ")
                          }
                        />
                      </MenuItem>
                    )
                  )}
                </Select>
              </FormControl>
            </div>
          )}
          {response && (
            <div>
              <Typography variant="h6" sx={{ mt: 2 }}>
                Filtered Response
              </Typography>
              {filter.includes("numbers") && response.numbers && (
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Numbers: {response.numbers.join(",")}
                </Typography>
              )}
              {filter.includes("alphabets") && response.alphabets && (
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Alphabets: {response.alphabets.join(",")}
                </Typography>
              )}
              {filter.includes("highest_lowercase_alphabet") &&
                response.highest_lowercase_alphabet && (
                  <Typography variant="body1" sx={{ mt: 1 }}>
                    Highest Lowercase Alphabet:{" "}
                    {response.highest_lowercase_alphabet.join(",")}
                  </Typography>
                )}
            </div>
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
