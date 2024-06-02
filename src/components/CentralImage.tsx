'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const CentralImage: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'background.main',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: matches ? '17px 20px' : '59px 230px',
        margin: '0 auto',
      }}
    >
      <Image
          src="/image-central.png"
          width={matches ? 354 : 740}
          height={matches ? 251  : 500}
          alt="Picture of the author"
          style={{ margin: '0 auto', textAlign: 'center', padding: '62px 0' }}
        />
    </Box>
  );
};

export default CentralImage;
