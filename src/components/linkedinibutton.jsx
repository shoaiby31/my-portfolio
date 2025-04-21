import React from 'react';
import { IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/system';

const GradientIconButton = styled(IconButton)(({ theme }) => ({
  background: 'linear-gradient(45deg, #a729ff, #3b82f6) padding-box, linear-gradient(45deg, #a729ff, #3b82f6) border-box',
  border: '4px solid transparent',
  borderRadius: '50%',
  padding: 10,
  color: 'green',
  backgroundClip: 'padding-box, border-box',
  '& .MuiSvgIcon-root': {
    color: 'white',
  },
  '&:hover': {
    background: 'linear-gradient(blue, blue) padding-box, linear-gradient(45deg, #a729ff, #3b82f6) border-box',
    color: 'green'
  },
}));

const LinkedInButton = () => {
  return (
    <GradientIconButton component="a" href="https://www.linkedin.com/in/shoaiby31/" target="_blank" rel="noopener noreferrer">
      <LinkedInIcon />
    </GradientIconButton>
  );
};

export default LinkedInButton;