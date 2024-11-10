import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, categoryIndex, itemIndex }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/product/${categoryIndex}/${itemIndex}`);
  };

  return (
    <Box
      onClick={handleCardClick}
      sx={{
        position: 'relative',
        width: { xs: '45%', sm: '30%', md: '20%' },  // Responsive width for wrapping
        height: 200,
        borderRadius: 2,
        overflow: 'hidden',
        backgroundImage: `url(${product.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
        },
      }}
    >
      {/* Gradient Overlay */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0) 60%)',
        }}
      />
      {/* Product Info */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          color: '#fff',
          padding: '8px',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '0.9rem' }}>
          {product.name}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
          {product.price} {product.currency}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;
