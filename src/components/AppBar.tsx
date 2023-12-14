// AppBar.tsx
import React from "react";
import { AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const AppBar: React.FC = () => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "inherit", marginRight: "20px" }}
        >
          Recipe Book
        </Typography>
        <Typography
          variant="h6"
          component={Link}
          to="/create"
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          Create Recipe
        </Typography>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
