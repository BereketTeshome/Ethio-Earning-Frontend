import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

// Interface for a package
interface Package {
  name: string;
  active: boolean;
  priceETB: number;
  priceUSD: number;
  duration: number;
  rewardCoinETB: number;
  rewardCoinUSD: number;
  maxSubscribers: number;
  maxViewers: number;
  features: string[];
  category: string;
  createdBy: string;
  image: string;
}

const UploadButton = styled("label")({
  padding: "12px 24px",
  backgroundColor: "#3f51b5",
  color: "#fff",
  borderRadius: "8px",
  cursor: "pointer",
  display: "inline-block",
  marginTop: "16px",
  textAlign: "center",
  "&:hover": {
    backgroundColor: "#303f9f",
  },
});

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [name, setName] = useState<string>("");
  const [priceETB, setPriceETB] = useState<number>(0);
  const [priceUSD, setPriceUSD] = useState<number>(0);
  const [duration, setDuration] = useState<number>(30);
  const [rewardCoinETB, setRewardCoinETB] = useState<number>(0);
  const [rewardCoinUSD, setRewardCoinUSD] = useState<number>(0);
  const [maxSubscribers, setMaxSubscribers] = useState<number>(100);
  const [maxViewers, setMaxViewers] = useState<number>(500);
  const [features, setFeatures] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [file, setFile] = useState<File | null>(null);

  // Automatically set values
  const createdBy = "AdminUserID"; // Example Admin User ID
  const active = true; // All packages are active by default

  // Handle image file upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Add a new package
  const handleAddPackage = () => {
    if (name && priceETB && priceUSD && image) {
      const newPackage: Package = {
        name,
        active,
        priceETB,
        priceUSD,
        duration,
        rewardCoinETB,
        rewardCoinUSD,
        maxSubscribers,
        maxViewers,
        features: features.split(",").map((feature) => feature.trim()),
        category,
        createdBy,
        image: image?.toString() || "",
      };
      setPackages([...packages, newPackage]);

      // Clear form fields
      resetFormFields();
    } else {
      alert("Please fill in all required fields");
    }
  };

  // Reset form fields
  const resetFormFields = () => {
    setName("");
    setPriceETB(0);
    setPriceUSD(0);
    setDuration(30);
    setRewardCoinETB(0);
    setRewardCoinUSD(0);
    setMaxSubscribers(100);
    setMaxViewers(500);
    setFeatures("");
    setCategory("");
    setImage(null);
    setFile(null);
  };

  // Common form fields configuration
  const formFields = [
    { label: "Package Name", value: name, setter: setName, type: "text" },
    {
      label: "Price (ETB)",
      value: priceETB,
      setter: setPriceETB,
      type: "number",
    },
    {
      label: "Price (USD)",
      value: priceUSD,
      setter: setPriceUSD,
      type: "number",
    },
    {
      label: "Duration (days)",
      value: duration,
      setter: setDuration,
      type: "number",
    },
    {
      label: "Reward Coins (ETB)",
      value: rewardCoinETB,
      setter: setRewardCoinETB,
      type: "number",
    },
    {
      label: "Reward Coins (USD)",
      value: rewardCoinUSD,
      setter: setRewardCoinUSD,
      type: "number",
    },
    {
      label: "Max Subscribers",
      value: maxSubscribers,
      setter: setMaxSubscribers,
      type: "number",
    },
    {
      label: "Max Viewers",
      value: maxViewers,
      setter: setMaxViewers,
      type: "number",
    },
    {
      label: "Features (comma-separated)",
      value: features,
      setter: setFeatures,
      type: "text",
    },
    {
      label: "Category ID",
      value: category,
      setter: setCategory,
      type: "text",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 8 }}>
      <Box
        className="bg-gray-50 dark:bg-gray-900"
        sx={{ p: 4, borderRadius: 2, boxShadow: 3 }}
      >
        <Typography variant="h4" gutterBottom className="dark:text-gray-100">
          Add a New Package
        </Typography>
        <Grid container spacing={3}>
          {formFields.map((field, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <TextField
                fullWidth
                label={field.label}
                value={field.value}
                type={field.type}
                onChange={(e: any) => field.setter(e.target.value)}
                variant="outlined"
                InputProps={{
                  className: "dark:text-gray-100 dark:border-gray-600",
                }}
                InputLabelProps={{
                  className: "dark:text-gray-400",
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "gray", // light mode border color
                    },
                    "&:hover fieldset": {
                      borderColor: "lightgray", // hover state
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "gray",
                    },
                  },
                  "& input::placeholder": {
                    color: "gray", // light mode placeholder
                  },
                  "&.dark input::placeholder": {
                    color: "lightgray", // dark mode placeholder
                  },
                }}
              />
            </Grid>
          ))}
          <Grid item xs={12}>
            <UploadButton>
              Choose Image
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </UploadButton>
            {image && (
              <Box mt={2}>
                <img
                  src={image.toString()}
                  alt="Preview"
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
              </Box>
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleAddPackage}
            >
              Add Package
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Display packages */}
      <Box mt={6}>
        <Grid container spacing={4}>
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Box
                sx={{
                  p: 3,
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  transition: "transform 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="h6" mt={2}>
                  {pkg.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={1}>
                  Features: {pkg.features.join(", ")}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Price: {pkg.priceETB} ETB / {pkg.priceUSD} USD
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Packages;
