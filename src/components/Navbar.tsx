import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import CustomButton from '../ui/components/CustomButton';
import logo from '../assets/icons/logo.png';

const Navbar = () => (
  <AppBar
    position='static'
    color='transparent'
    elevation={0}
    sx={(theme) => ({
      bgcolor: 'bgBlack.main',
      height: '80px',
      justifyContent: 'center',
      borderBottom: `2px solid ${theme.palette.black.dark}`,
    })}
  >
    <Toolbar sx={{ px: '40px !important' }}>
      <Box
        component='img'
        src={logo}
        alt='Logo icon'
        sx={{
          width: '16px',
          height: '16px',
        }}
      />
      <Typography
        variant='h6'
        component={Link}
        to='/'
        sx={{
          textDecoration: 'none',
          color: 'white',
          fontWeight: 700,
          fontSize: '18px',
          lineHeight: '24px',
          letterSpacing: '0px',
          ml: 1,
        }}
      >
        TradeLayback
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <CustomButton
          component={Link}
          to='/'
          variant='default'
          sx={(theme) => ({
            textTransform: 'none',
            width: '114px',
            fontWeight: 700,
            fontSize: '16px',
            color: alpha(theme.palette.common.white, 0.8),
          })}
        >
          Home
        </CustomButton>
        <CustomButton
          component={Link}
          to='/calculator'
          variant='default'
          sx={(theme) => ({
            textTransform: 'none',
            fontWeight: 700,
            fontSize: '16px',
            color: alpha(theme.palette.common.white, 0.8),
          })}
        >
          Back Calculator
        </CustomButton>
        <CustomButton
          component={Link}
          to='/faq'
          variant='default'
          sx={(theme) => ({
            textTransform: 'none',
            width: '114px',
            fontWeight: 700,
            fontSize: '16px',
            color: alpha(theme.palette.common.white, 0.8),
          })}
        >
          FAQ
        </CustomButton>
      </Box>

      <CustomButton
        component={Link}
        to='/login'
        variant='default'
        sx={(theme) => ({
          color: 'common.white',
          border: `2px solid ${theme.palette.black.medium}`,
          textTransform: 'none',
          width: '114px',
        })}
      >
        Log in
      </CustomButton>
      <CustomButton
        component={Link}
        to='/register'
        variant='primary'
        sx={{ ml: 2, textTransform: 'none', width: '114px' }}
      >
        Register
      </CustomButton>
    </Toolbar>
  </AppBar>
);

export default Navbar;
