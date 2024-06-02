'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const AboutUs: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <>
      <Box
        component='div'
        sx={{
          backgroundColor: 'background.main',
          justifyContent: 'center',
          textAlign: 'center',
          padding: matches ? '17px 20px' : '80px 24px',
          margin: '0 auto',
        }}
      >
        <Typography sx={{
          fontFamily: 'fontFamily.Outfit',
          fontSize: matches ? '24px' : '42px',
          textAlign: 'center',
          lineHeight: matches ? '30px' : '52px',
          fontWeight: 600,
          paddingBottom: '20px',
        }}>
          Sobre nós
        </Typography>
        <Typography sx={{
          fontFamily: 'fontFamily.Nunito',
          fontSize: matches ? '14px' : '20px',
          textAlign: 'center',
          lineHeight: matches ? '21px' : '30px',
          fontWeight: 400,
          color: '#464646',
          margin: '0 auto',
          wordWrap: 'break-word',
        }}>
          Somos uma empresa comprometida em fornecer soluções sob medida que atendam às necessidades únicas de cada cliente.
        </Typography>
      </Box>
      <Box component="div" sx={{
        padding: matches ? '0' : '0 0 0 189px',
        display: 'flex',
        flexDirection: matches ? 'column' : 'row',
        justifyContent: 'space-between',
      }}>
        <Box component="div" sx={{ padding: matches ? '20px' : '0' }}>
          <Typography sx={{
            fontFamily: 'fontFamily.Outfit',
            fontSize: matches ? '18px' : '32px',
            textAlign: 'left',
            lineHeight: matches ? '22px' : '52px',
            fontWeight: 600,
            padding: '0',
          }}>
            Nosso Proposito
          </Typography>
          <Typography sx={{
            fontFamily: 'fontFamily.Nunito',
            fontSize: matches ? '14px' : '20px',
            textAlign: 'left',
            lineHeight: matches ? '21px' : '30px',
            padding: '0',
          }}>
            Na <span style={{ color: '#0070F4', fontWeight: 600 }}>FRB IT Consulting</span>, estamos comprometidos em capacitar as empresas a aproveitarem todo o potencial de seus dados e a adotarem as mais avançadas tecnologias em nuvem. Especializados em serviços de consultoria de dados e infraestrutura em nuvem, oferecemos soluções abrangentes que impulsionam a eficiência operacional e promovem a inovação.
          </Typography>
        </Box>
        <Image
          src="/image-about-us.png"
          alt="About Us"
          width={matches ? 280 : 500}
          height={matches ? 280 : 500}
          style={{
            padding: matches ? '0' : '0 189px 0 0',
            margin: '0 auto',
          }}
        />
      </Box>
    </>
  );
};

export default AboutUs;
