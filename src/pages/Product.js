import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import productData from "../data/productData";
import BackButton from "../components/BackButton";

const Product = () => {
  const { categoryIndex, itemIndex } = useParams();

  // Locate the product based on the indexes
  const product = productData[categoryIndex]?.items[itemIndex];

  if (!product) {
    return (
      <Box
        padding={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="60vh"
      >
        <Typography variant="h6">Product not found</Typography>
      </Box>
    );
  }

  return (
    <Box position="relative" minHeight="100vh" display="flex" flexDirection="column">
      {/* Back Button */}
      <Box position="absolute" top={16} left={16} zIndex={10}>
        <BackButton />
      </Box>

      {/* Background Image with Gradient Overlay */}
      <Box
        sx={{
          width: "100%",
          height: "60vh",
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1) 50%) , url(${product.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "start",
          paddingBottom: 2,
        }}
      >
        {/* Product Name and Price */}
        <Box
          textAlign="left"
          color="white"
          sx={{ paddingX: 2, paddingBottom: 3 }}
        >
          <Typography gutterBottom variant="h5" fontWeight="bold">
            {product.name}
          </Typography>
          <Typography variant="h3" color="white" fontWeight="bold">
            {product.price} {product.currency}
          </Typography>
        </Box>
      </Box>

      {/* Details Section */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "background.paper",
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          boxShadow: 5,
          padding: 3,
          marginTop: -2, // Overlaps slightly with the image section
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Drag Indicator */}
        <Box
          sx={{
            width: 50,
            height: 4,
            backgroundColor: "grey.300",
            borderRadius: 2,
            mx: "auto",
            mb: 2,
          }}
        />

        <Typography variant="body1" fontWeight="bold" gutterBottom>
          Product Details
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="body2" color="textSecondary">
          {product.description || "No description available."}
        </Typography>
      </Box>
    </Box>
  );
};

export default Product;
