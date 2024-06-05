'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, TextField, Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box component='div' sx={{ marginTop: '400px', padding: '0', position: 'relative', backgroundColor: '#000', color: '#fff' }}>
      <Box component='div' sx={{ padding: matches ? '40px 20px' : '80px 190px 40px 190px', display: 'flex', flexDirection: matches ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <Box sx={{ flex: 1, mb: matches ? 2 : 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>FRB IT Consulting</Typography>
          <Typography sx={{ mt: 1 }}>
            Desbloqueando o Potencial dos Dados e da Nuvem para Empresas
          </Typography>
        </Box>
        {/* <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: matches ? 2 : 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Empresa</Typography>
          <Typography sx={{ mt: 1 }}>Home</Typography>
          <Typography sx={{ mt: 1 }}>Sobre nós</Typography>
          <Typography sx={{ mt: 1 }}>Soluções</Typography>
          <Typography sx={{ mt: 1 }}>Contato</Typography>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', mb: matches ? 2 : 0 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Jurídico</Typography>
          <Typography sx={{ mt: 1 }}>Termos de Uso</Typography>
          <Typography sx={{ mt: 1 }}>Política de Privacidade</Typography>
        </Box> */}
        {/* <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Se inscrever</Typography>
          <Typography sx={{ mt: 1 }}>Receba as últimas notícias e artigos em sua caixa de entrada todos os meses.</Typography>
          <Box component="form" sx={{ display: 'flex', mt: 1 }}>
            <TextField
              variant="outlined"
              placeholder="Your email"
              size="small"
              sx={{ backgroundColor: '#fff', borderRadius: '4px 0 0 4px' }}
            />
            <Button variant="contained" sx={{ borderRadius: '0 4px 4px 0' }}>➔</Button>
          </Box>
        </Box> */}
      </Box>
      <Box sx={{ textAlign: 'center', padding: '10px 0', borderTop: '1px solid #333', mt: 2 }}>
        <Typography variant="body2">© 2024 Todos os direitos reservados</Typography>
      </Box>
    </Box>
  );
};

export default Footer;
