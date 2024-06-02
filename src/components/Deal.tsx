'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import { Button, TextField } from '@mui/material';

const Deal: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{
      position: 'relative',
      height: '600px',
      overflow: 'visible',
    }}>
      <Box component='div'
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(image-bg-deal.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Box sx={{ padding: matches ? '80px 24px' : '80px 195px 0 195px' }}>
          <Typography sx={{
            fontFamily: 'fontFamily.Outfit', fontSize: matches ? '24px' : '42px', color: '#fff', fontWeight: 600,
            lineHeight: matches ? '30px' : '52px', textAlign: 'center', padding: matches ? '8px 0px' : '0'
          }}>Potencie o seu negócio</Typography>
          <Typography sx={{ paddingBottom: '50px', fontFamily: 'fontFamily.Nunito', fontSize: matches ? '14px' : '20px', color: '#D6D6D6', fontWeight: '400', lineHeight: matches ? '21px' : '30px', textAlign: 'center' }}>Conecte-se conosco hoje mesmo e descubra como podemos ajudar sua empresa a prosperar na era
            dos dados e da computação em nuvem!</Typography>
        </Box>
        <Box component="div" sx={{ display: matches ? 'block' : 'flex', margin: '0 auto', justifyContent: 'center' }} >
          <Box>
            <Image src='/image-form-deal.png'
              width={matches ? 340 : 364}
              height={matches ? 288 : 554}
              alt="Picture of the author"
              style={{ margin: "0", padding: '0' }}
            />
          </Box>
          <Box sx={{
            padding: '40px 60px',
            background: '#fff',
            margin: '0',
          }}>
            <Typography sx={{ fontFamily: 'fontFamily.Outfit', fontSize: matches ? '24px' : '42px', fontWeight: 600, lineHeight: matches ? '30px' : '52px', textAlign: 'left', padding: '0 0 40px 0' }}>
              Aguardamos o seu contato
            </Typography>
            <form>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
                <label htmlFor="name">Nome*</label>
                <input id="name" type="text" placeholder="Nome" style={{ height: '30px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />

                <label htmlFor="email">Email*</label>
                <input id="email" type="email" placeholder="Email" style={{ height: '30px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px' }} />

                <label htmlFor="phone">Telefone (Whatsapp)*</label>
                <input id="phone" type="text" placeholder="Telefone (Whatsapp)" style={{ height: '30px', padding: '5px', border: '1px solid #ccc', borderRadius: '4px', textDecoration: 'none' }} />

                <Button variant="contained" color="primary" type="submit">
                  Enviar
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Box>
    </Box >
    
  );
};

export default Deal;
