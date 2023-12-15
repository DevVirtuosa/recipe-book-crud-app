// Create.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

const Create: React.FC = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {
    try {
      // Create a new item using the provided API
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title,
          body: description,
          userId: 1,
        }
      );

      console.log("Item created:", response.data);

      // After creating the item, navigate to the home page
      navigate("/");
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  return (
    <Container sx={{ padding: "16px" }}>
      <Card>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            Create Item
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Description"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ marginBottom: "16px" }}
          />
          <Button
            onClick={handleCreate}
            variant="contained"
            color="primary"
            sx={{ marginRight: "8px" }}
          >
            Create
          </Button>
          <Button component={Link} to="/" variant="outlined" color="primary">
            Cancel
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Create;
