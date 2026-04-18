import React from 'react';
import { Box, Typography } from '@mui/material';

export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <Box textAlign={align} maxWidth={760} mx={align === 'center' ? 'auto' : 0}>
      {eyebrow ? (
        <Typography
          variant="overline"
          sx={{
            letterSpacing: 2,
            color: 'secondary.main',
            fontWeight: 800,
          }}
        >
          {eyebrow}
        </Typography>
      ) : null}
      <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mb: 1.5 }}>
        {title}
      </Typography>
      {description ? (
        <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.05rem' }}>
          {description}
        </Typography>
      ) : null}
    </Box>
  );
}
