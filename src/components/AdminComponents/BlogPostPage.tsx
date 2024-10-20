import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Paper,
  Input,
  IconButton,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";

const BlogPostPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, description, image });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <Paper
      elevation={3}
      className="bg-gray-50 dark:bg-gray-900 mt-10"
      sx={{
        p: 4,
        borderRadius: "16px",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        className="dark:text-gray-100"
      >
        Create a New Blog Post
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box mb={4}>
          <TextField
            label="Blog Title"
            variant="outlined"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            InputLabelProps={{ shrink: true, className: "dark:text-white" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#e0e0e0", // Light grey for light mode
                },
              },
              "& .MuiInputLabel-root": {
                color: "text.secondary",
              },
              "&.dark .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#888888", // Light grey for dark mode
                },
              },
            }}
          />
        </Box>

        <Box mb={4}>
          <TextField
            label="Blog Description"
            variant="outlined"
            fullWidth
            multiline
            rows={6}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            InputLabelProps={{ shrink: true, className: "dark:text-white" }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "8px",
                "& fieldset": {
                  borderColor: "#E0E0E0", // Light grey for light mode
                },
              },
              "&.dark .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#E0E0E0", // Light grey for dark mode
                },
              },
            }}
          />
        </Box>

        <Box mb={4}>
          <Typography className="mb-2 dark:text-gray-100">
            Upload Blog Image
          </Typography>
          <Input
            id="image-upload"
            type="file"
            onChange={handleImageUpload}
            sx={{
              display: "none",
            }}
            inputProps={{
              accept: "image/*",
            }}
          />

          <label htmlFor="image-upload">
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              sx={{
                bgcolor: "primary.light",
                "&:hover": {
                  bgcolor: "primary.main",
                },
              }}
            >
              <PhotoCamera />
            </IconButton>
            <Typography variant="caption" className="ml-2 dark:text-gray-100">
              {image ? image.name : "No image selected"}
            </Typography>
          </label>
        </Box>

        <Box textAlign="center" mt={6}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              borderRadius: "50px",
              px: 5,
              bgcolor: "primary.main",
              color: "white",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            Publish Post
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default BlogPostPage;
