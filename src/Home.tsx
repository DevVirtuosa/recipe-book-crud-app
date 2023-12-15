// Home.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography } from "@mui/material";
import axios from "axios";

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<any[]>([]);

  useEffect(() => {
    // Fetch the list of recipes from the API when the component mounts
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setRecipes(response.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h4" gutterBottom>
        Recipe Listing
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4}>
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
                {recipe.title}
              </Typography>
              <Typography>{recipe.body}</Typography>
              <Button
                component={Link}
                to={`/details/${recipe.id}`}
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
