import React from 'react';
import { IconButton } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { motion } from 'framer-motion';
import { useThemeContext } from './useM3Theme';

// Create a toggle for switching between light and dark mode
const ColorModeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();
  
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <IconButton
        color="inherit"
        onClick={toggleTheme}
        aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        sx={{
          borderRadius: '50%',
          padding: '8px',
          backdropFilter: 'blur(10px)',
          background: mode === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
          '&:hover': {
            background: mode === 'dark' ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.08)',
          },
        }}
      >
        {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </motion.div>
  );
};

export default ColorModeToggle;
