import React, { useState } from "react";
import { Box, Typography, Avatar, Link, Grid, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import productData from "../data/productData";
import logo from "../assets/Logo/AzuraHDlogo.webp";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const navigate = useNavigate();
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [showAllBestSellers, setShowAllBestSellers] = useState(false);
  const [showAllTrending, setShowAllTrending] = useState(false);

  // Filter Best Seller and Trending items
  const bestSellers = productData.flatMap((category, categoryIndex) =>
    category.items
      .map((item, itemIndex) => ({ ...item, categoryIndex, itemIndex }))
      .filter((item) => item.bestSeller)
  );

  const trendingItems = productData.flatMap((category, categoryIndex) =>
    category.items
      .map((item, itemIndex) => ({ ...item, categoryIndex, itemIndex }))
      .filter((item) => item.trending)
  );

  // Handle navigation to CategoryPage with category name
  const handleCategoryClick = (category) => {
    navigate(`/category/${category}`);
  };

  return (
    <Box padding={2}>
      {/* Logo at the Top */}
      <Link
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate(`/`);
        }}
        display="flex"
        justifyContent="center"
        mb={4}
      >
        <img src={logo} alt="Azura Logo" style={{ width: "80%" }} />
      </Link>

      {/* Categories Section */}
      <Box mb={4}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">Categories</Typography>
          <Link
            href="#"
            underline="hover"
            color="#555"
            onClick={(e) => {
              e.preventDefault();
              setShowAllCategories(!showAllCategories);
            }}
          >
            {showAllCategories ? "Show less" : "See all"}
          </Link>
        </Box>

        {showAllCategories ? (
          <Grid container spacing={2}>
            {productData.map((category, index) => (
              <Grid item xs={4} sm={3} md={2} key={index}>
                <Box
                  onClick={() => handleCategoryClick(category.category)}
                  sx={{
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                >
                  <Avatar
                    src={category.items[0].image}
                    alt={category.category}
                    sx={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#E0E0E0",
                      marginBottom: 0.5,
                      overflow: "hidden",
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                    }}
                  />
                  <Typography variant="body2" sx={{ fontSize: "0.9rem" }}>
                    {category.category}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              paddingBottom: 1,
              "&::-webkit-scrollbar": { display: "none" },
              gap: 2,
            }}
          >
            {productData.map((category, index) => (
              <Box
                key={index}
                onClick={() => handleCategoryClick(category.category)}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  width: 120,
                }}
              >
                <Avatar
                  src={category.items[0].image}
                  alt={category.category}
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#E0E0E0",
                    marginBottom: 0.5,
                    overflow: "hidden",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
                <Typography
                  variant="body2"
                  noWrap
                  sx={{
                    maxWidth: 120,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "0.9rem",
                  }}
                >
                  {category.category}
                </Typography>
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Divider */}
      <Divider
        sx={{ mb: 3, borderColor: "#71C4D8", width: "50%", margin: "0 auto" }}
      />

      {/* Best Seller Section */}
      <Box sx={{ marginY: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Best Sellers</Typography>
          <Link
            href="#"
            underline="hover"
            color="#555"
            onClick={(e) => {
              e.preventDefault();
              setShowAllBestSellers(!showAllBestSellers);
            }}
          >
            {showAllBestSellers ? "Show less" : "See all"}
          </Link>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ marginTop: 4 }}
          gap={2}
        >
          {(showAllBestSellers ? bestSellers : bestSellers.slice(0, 2)).map(
            (product, index) => (
              <ProductCard
                key={index}
                product={product}
                categoryIndex={product.categoryIndex}
                itemIndex={product.itemIndex}
              />
            )
          )}
        </Box>
      </Box>

      {/* Divider */}
      <Divider
        sx={{ mb: 3, borderColor: "#71C4D8", width: "50%", margin: "0 auto" }}
      />

      {/* Trending Section */}
      <Box sx={{ marginY: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h6">Trending Now</Typography>
          <Link
            href="#"
            underline="hover"
            color="#555"
            onClick={(e) => {
              e.preventDefault();
              setShowAllTrending(!showAllTrending);
            }}
          >
            {showAllTrending ? "Show less" : "See all"}
          </Link>
        </Box>

        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          sx={{ marginTop: 4 }}
          gap={2}
        >
          {(showAllTrending ? trendingItems : trendingItems.slice(0, 2)).map(
            (product, index) => (
              <ProductCard
                key={index}
                product={product}
                categoryIndex={product.categoryIndex}
                itemIndex={product.itemIndex}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
