// src/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          style={{ textDecoration: "none", color: "white" }}
        >
          My CRUD App
        </Typography>
        <Button color="inherit" component={Link} to="/create">
          Create
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
