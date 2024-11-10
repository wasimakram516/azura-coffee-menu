// src/components/BackButton.js

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton = ({ to, isRound = true }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1); // Go back in history if no "to" prop is provided
    }
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color="primary"
      sx={{
        mb: 3,
        borderRadius: isRound ? '50%' : 2,  // Toggle between circular and rectangular
        width: isRound ? 48 : 'auto',  // Larger width for round shape
        height: isRound ? 48 : 'auto',  // Larger height for round shape
        minWidth: isRound ? 'unset' : 'auto',  // Remove default minWidth for round button
        padding: isRound ? 0 : '8px 16px',  // Padding for rectangular shape
        backgroundColor: '#71C4D8',
        '&:hover': {
          backgroundColor: '#5aa7b7',
        },
      }}
    >
      <ArrowBackIcon sx={{ fontSize: '1.5rem' }} />
    </Button>
  );
};

export default BackButton;
