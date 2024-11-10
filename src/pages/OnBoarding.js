import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import logo from '../assets/Logo/AzuraHDlogo.webp';
import './Onboarding.css';

const Onboarding = () => {
  const navigate = useNavigate();

  return (
    <Box className="onboarding-container">
      {/* Background Image Section */}
      <Box className="background-section" />

      {/* Logo and Get Started Section */}
      <Box className="content-section">
        <img src={logo} alt="Azura Logo" className="logo" />
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/home')}
          sx={{
            marginTop: 2,
            padding: '10px 20px',
            textTransform: 'none',
            width: "80%",
          }}
        >
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Onboarding;
