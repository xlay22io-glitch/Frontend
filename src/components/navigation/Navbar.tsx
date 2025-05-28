import { useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Drawer,
  ListItem,
  List,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { alpha } from '@mui/material/styles';
import CustomButton from '../common/CustomButton';
import CloseIcon from '@mui/icons-material/Close';
import logo from '../../assets/icons/logo.png';
import accIcon from '../../assets/icons/account-icon.png';
import backCalcIcon from '../../assets/icons/back-calculator-icon.png';
import faqsIcon from '../../assets/icons/faqs-icon.png';
import homeIcon from '../../assets/icons/home-icon.png';
import useAuthStore from '../../store/auth-store';
import logoutIcon from '../../assets/icons/logout-icon.png';
import { useLogout } from '../../hooks/auth-hook';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const { mutate: logoutUser, isPending } = useLogout();

  const toggleDrawer = () => setMobileOpen((prev) => !prev);

  const navItems = [
    { icon: homeIcon, label: 'Home', path: '/' },
    { icon: backCalcIcon, label: 'Back Calculator', path: '/calculator' },
    { icon: faqsIcon, label: 'FAQ', path: '/faq' },
  ];

  const handleLogout = () => {
    logoutUser();
  };

  return (
    <>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.customColors.smoothGray,
          justifyContent: 'center',
          borderBottom: `2px solid ${theme.palette.black.dark}`,
          height: '80px',
          px: { xs: 3, md: 6, lg: 12 },
          position: 'fixed',
          width: '100%',
          zIndex: 1300,
        })}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', flex: 1 }}>
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
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flex: 1,
              gap: 4,

              '@media (max-width: 1200px)': {
                display: 'none',
              },
            }}
          >
            <CustomButton
              component={Link}
              to='/'
              variant='default'
              sx={(theme) => ({
                textTransform: 'none',
                px: 3,
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
                px: 3,
                fontWeight: 700,
                fontSize: '16px',
                color: alpha(theme.palette.common.white, 0.8),
              })}
            >
              Back&nbsp;Calculator
            </CustomButton>
            <CustomButton
              component={Link}
              to='/faq'
              variant='default'
              sx={(theme) => ({
                textTransform: 'none',
                px: 3,
                fontWeight: 700,
                fontSize: '16px',
                color: alpha(theme.palette.common.white, 0.8),
              })}
            >
              FAQ
            </CustomButton>
          </Box>

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              flex: 1,
              '@media (max-width: 1200px)': {
                display: 'none',
              },
            }}
          >
            {isAuthenticated ? (
              <CustomButton
                onClick={handleLogout}
                disabled={isPending}
                variant='default'
                sx={(theme) => ({
                  color: 'common.white',
                  border: `2px solid ${theme.palette.black.medium}`,
                  textTransform: 'none',
                  width: '114px',
                })}
              >
                {isPending ? 'Logging out...' : 'Logout'}
              </CustomButton>
            ) : (
              <>
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
              </>
            )}
          </Box>

          <Box
            sx={{
              display: {
                xs: 'flex',
                lg: 'none',
                alignItems: 'center',
                height: '100%',
              },
            }}
          >
            <IconButton
              onClick={toggleDrawer}
              sx={{
                color: 'white',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              {mobileOpen ? (
                <CloseIcon sx={{ fontSize: 28 }} />
              ) : (
                <MenuIcon sx={{ fontSize: 28, transform: 'scaleY(1.2)' }} />
              )}
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Drawer
        anchor='right'
        open={mobileOpen}
        onClose={toggleDrawer}
        hideBackdrop
        slotProps={{
          paper: {
            sx: {
              width: '100%',
              backgroundColor: '#111',
              color: 'white',
              py: 2,
              px: 4,
              mt: '80px',
            },
          },
        }}
      >
        <List>
          {navItems.map(({ icon, label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box component='img' src={icon} alt={`${label} icon`} />
                    <Typography
                      onClick={() => {
                        navigate(path);
                        setMobileOpen(false);
                      }}
                      sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        pl: 2,
                        py: 1.5,
                        cursor: 'pointer',
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                }
              />
            </ListItem>
          ))}

          {isAuthenticated ? (
            <>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box component='img' src={accIcon} alt='Account Icon' />
                      <Typography
                        onClick={() => {
                          navigate('/account');
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: '18px',
                          fontWeight: 500,
                          pl: 2,
                          py: 1.5,
                          cursor: 'pointer',
                        }}
                      >
                        Account
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box component='img' src={logoutIcon} alt='Logout Icon' />
                      <Typography
                        onClick={() => {
                          handleLogout();
                          setMobileOpen(false);
                        }}
                        sx={{
                          fontSize: '18px',
                          fontWeight: 500,
                          pl: 2,
                          py: 1.5,
                          cursor: 'pointer',
                        }}
                      >
                        Logout
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
            </>
          ) : (
            <>
              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Typography
                      onClick={() => {
                        navigate('/login');
                        setMobileOpen(false);
                      }}
                      sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        pl: 2,
                        py: 1.5,
                        cursor: 'pointer',
                      }}
                    >
                      Login
                    </Typography>
                  }
                />
              </ListItem>

              <ListItem disablePadding>
                <ListItemText
                  primary={
                    <Typography
                      onClick={() => {
                        navigate('/register');
                        setMobileOpen(false);
                      }}
                      sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        pl: 2,
                        py: 1.5,
                        cursor: 'pointer',
                      }}
                    >
                      Register
                    </Typography>
                  }
                />
              </ListItem>
            </>
          )}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
