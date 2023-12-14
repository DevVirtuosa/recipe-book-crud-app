// Details.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import axios from "axios";

interface RouteParams {
  id?: string;
}

const Details: React.FC = () => {
  const { id } = useParams() as RouteParams;
  const navigate = useNavigate();
  const [item, setItem] = useState<any>({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => {
          const { title, body } = response.data;
          setItem(response.data);
          setTitle(title);
          setDescription(body);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleUpdate = () => {
    // Update logic
  };

  const handleDelete = () => {
    // Delete logic
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>Details</h1>
      <div>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ marginBottom: "16px", width: "100%" }}
        />
      </div>
      <div>
        <TextField
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ marginBottom: "16px", width: "100%" }}
        />
      </div>
      <div>
        <Button
          onClick={handleUpdate}
          variant="contained"
          color="primary"
          style={{ marginRight: "8px" }}
        >
          Update
        </Button>
        <Button onClick={handleDelete} variant="contained" color="secondary">
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Details;
