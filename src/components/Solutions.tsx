'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Button, Card, Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';

const Solutions: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <Box id="solutions" sx={{ textAlign: "left", padding: matches ? '10px 47px' : '0' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 1</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 2</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 3</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 4</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 5</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Box sx={{ margin: matches ? '0 12px' : "0", background: 'background.main', borderRadius: '12px', padding: '16px', boxShadow: "10px 2px 41px 46px rgba(207,166,166,0.08)" }}>
            <Image style={{ textAlign: "left" }} src="/image-pc.png" alt="Solutions" width={matches ? 32 : 46} height={matches ? 32 : 48} />
            <Typography sx={{ padding: '10px 0', fontFamily: 'fontFamily.Outfit', fontSize: matches ? "16px" : "24px", fontWeight: 700, lineHeight: matches ? "20px" : "30px", textAlign: 'left' }}>Solução 6</Typography>
            <Typography sx={{ fontFamily: 'fontFamily.Nunito', fontSize: matches ? "12px" : "16px", fontWeight: 400, lineHeight: matches ? "18px" : "24px", textAlign: 'left' }}>Lorem ipsum dolor sit amet consectetur. Pretium non at eu nunc. Dictum iaculis diam in diam volutpat lorem etiam consectetur sed. Venenatis interdum varius ante nec elit. Dignissim sit.</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Solutions;
