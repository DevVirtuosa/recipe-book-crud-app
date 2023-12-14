// Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";

const Home: React.FC = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the list of items from the API when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Item List
      </Typography>
      <Grid container spacing={3}>
        {items.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Container
              sx={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography>{item.body}</Typography>
              <Button
                component={Link}
                to={`/details/${item.id}`}
                variant="outlined"
                color="primary"
                sx={{ marginTop: "auto" }}
              >
                View Details
              </Button>
            </Container>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
