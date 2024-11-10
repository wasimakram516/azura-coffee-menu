import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Divider } from "@mui/material";
import productData from "../data/productData";
import ProductCard from "../components/ProductCard";
import BackButton from "../components/BackButton";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const categoryIndex = productData.findIndex(
    (cat) => cat.category === categoryName
  );

  if (categoryIndex === -1) {
    return <Typography variant="h6">Category not found</Typography>;
  }

  const category = productData[categoryIndex];

  return (
    <Box padding={2}>
      {/* Back Button */}
      <BackButton />

      {/* Category Title */}
      <Typography
        variant="h3"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: "bold", color: "#333" }}
      >
        {category.category}
      </Typography>

      <Divider
        sx={{ mb: 3, borderColor: "#71C4D8", width: "50%", margin: "0 auto" }}
      />

      {/* Product Cards in Row with Wrap */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        sx={{ marginTop: 4 }}
        gap={2}
      >
        {category.items.map((product, itemIndex) => (
          <ProductCard
            product={product}
            categoryIndex={categoryIndex}
            itemIndex={itemIndex}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CategoryPage;
