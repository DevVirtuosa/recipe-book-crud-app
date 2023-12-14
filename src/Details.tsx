// Details.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Container, Card, CardContent } from "@mui/material";
import axios from "axios";

interface RouteParams {
  id?: string;
}

const Details: React.FC = () => {
  const { id } = useParams() as RouteParams;
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState<any>({});
  const [editable, setEditable] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const { title, body } = response.data;
        setRecipe(response.data);
        setEditTitle(title);
        setEditDescription(body);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    if (id) {
      fetchRecipeDetails();
    }
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        title: editTitle,
        body: editDescription,
      });

      setRecipe({
        ...recipe,
        title: editTitle,
        body: editDescription,
      });
      setEditable(false);
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);

      // Redirect to the home page after deletion
      navigate("/");
    } catch (error) {
      console.error("Error deleting recipe:", error);
    }
  };

  return (
    <Container sx={{ padding: "16px" }}>
      <Card>
        <CardContent>
          <h1>Recipe Details</h1>
          <div>
            <TextField
              label="Title"
              variant="outlined"
              value={editable ? editTitle : recipe.title}
              onChange={(e) => setEditTitle(e.target.value)}
              disabled={!editable}
              style={{ marginBottom: "16px", width: "100%" }}
            />
          </div>
          <div>
            <TextField
              label="Description"
              variant="outlined"
              multiline
              rows={4}
              value={editable ? editDescription : recipe.body}
              onChange={(e) => setEditDescription(e.target.value)}
              disabled={!editable}
              style={{ marginBottom: "16px", width: "100%" }}
            />
          </div>
          <div>
            {editable ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdate}
                  style={{ marginRight: "8px" }}
                >
                  Save Changes
                </Button>
                <Button variant="contained" onClick={() => setEditable(false)}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={() => setEditable(true)}
                style={{ marginRight: "8px" }}
              >
                Edit Recipe
              </Button>
            )}
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Delete Recipe
            </Button>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Details;
