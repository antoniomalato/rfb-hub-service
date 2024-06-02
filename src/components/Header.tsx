'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Image from 'next/image';
import { IconButton, Link, Menu, MenuItem } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

const Header: React.FC = () => {
  const matches = useMediaQuery("(max-width:768px)");
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      component='div'
      sx={{
        backgroundColor: 'background.main',
        boxShadow: 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: matches ? '16px 24px' : '27px 80px'
      }}
    >
      <Box component='div'>
        <Image
          src="/frb-logo.png"
          width={matches ? 55 : 89}
          height={matches ? 26 : 42}
          alt="Picture of the author"
        />
      </Box>
      {!matches && (
        <Box
          sx={{
            width: '319px',
            height: '19px',
            gap: '24px',
            display: 'flex',
            alignSelf: 'center',
            alignItems: 'center',
          }}
        >
          <Link
            href="/"
            sx={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19.36px',
              letterSpacing: '-0.25px',
              textAlign: 'left',
              color: '#70778E',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          <Link
            href="/"
            sx={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19.36px',
              letterSpacing: '-0.25px',
              textAlign: 'left',
              color: '#70778E',
              textDecoration: 'none',
            }}
          >
            Sobre nós
          </Link>
          <Link
            href="/"
            sx={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19.36px',
              letterSpacing: '-0.25px',
              textAlign: 'left',
              color: '#70778E',
              textDecoration: 'none',
            }}
          >
            Soluções
          </Link>
          <Link
            href="/"
            sx={{
              fontFamily: 'Inter',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '19.36px',
              letterSpacing: '-0.25px',
              textAlign: 'left',
              color: '#70778E',
              textDecoration: 'none',
            }}
          >
            Contato
          </Link>
        </Box>
      )}
      <Box>
        {matches ? (
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Home</MenuItem>
              <MenuItem onClick={handleClose}>Sobre nós</MenuItem>
              <MenuItem onClick={handleClose}>Soluções</MenuItem>
              <MenuItem onClick={handleClose}>Contato</MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            variant='contained'
            sx={{
              width: '173px',
              height: '48px',
              borderRadius: '8px',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: 700,
                lineHeight: '24px',
                whiteSpace: 'nowrap',
                textTransform: 'none',
              }}
            >
              Entrar em contato
            </Typography>
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;
