import React from 'react';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

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
    background: 'linear-gradient(black, black) padding-box, linear-gradient(45deg, #a729ff, #3b82f6) border-box',
    color: 'green'
  },
}));

const GitHubButton = () => {
  return (
    <GradientIconButton>
      <GitHubIcon color='primary' />
    </GradientIconButton>
  );
};

export default GitHubButton;