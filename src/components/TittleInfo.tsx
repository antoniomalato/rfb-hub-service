'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Button } from '@mui/material';

const TittleInfo: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'background.main',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        padding: matches ? '0 48px' : '39px 80px 0 80px',
        margin: '0',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: 'fontFamily.Outfit',
            fontSize: matches ? '28px' : '50px',
            textAlign: 'center',
            lineHeight: matches ? '35px' : '63px',
            fontWeight: 600,
            margin: '0',
            padding: '0',
            wordWrap: 'break-word',
          }}
        >
          Simplifique, automatize e alcance
          a <Box component="span" sx={{ color: 'primary.main' }}>eficiência</Box> que você merece.
        </Typography>
        <Typography
          sx={{
            fontFamily: 'fontFamily.Nunito',
            fontSize: matches ? '14px' : '20px',
            textAlign: 'center',
            lineHeight: '30px',
            fontWeight: 400,
            margin: '0',
            padding: '0',
            color: '#464646',
            wordWrap: 'break-word',
          }}
        >
          Desbloqueando o Potencial dos Dados e da Nuvem para Empresas
        </Typography>
        <Box
          sx={{ width: matches ? '344px' : '533px', height: matches ? '40px' : '48px', textAlign: 'center', display: 'flex', justifyContent: 'space-between', margin: '0 auto', paddingTop: '48px' }}
        >
          <Button
            sx={{ whiteSpace: 'nowrap', width: matches ? '162px' : '257px', height: matches ? '40px' : '48px', fontWeight: 600, borderRadius: '8px', textTransform: 'none' }}
            variant='contained'
          >Agende uma reunião</Button>
          <Button
            sx={{ whiteSpace: 'nowrap', width: matches ? '162px' : '257px', height: matches ? '40px' : '48px', backgroundColor: '#fff', fontWeight: 600, borderRadius: '8px', color: 'primary.main', textTransform: 'none', border: '1px solid #0070F4' }}
          >Conhecer as soluções</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TittleInfo;
