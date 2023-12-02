import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

export const NavBar = () => {
  return (
    <AppBar position="static">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "8px",
          gap: "5px",
        }}
      >
        <TextField
          id="search-basic"
          label="Search By Name"
          variant="outlined"
          sx={{ width: "200px" }}
        />
      </Box>
    </AppBar>
  );
};
