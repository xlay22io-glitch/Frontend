import { Box, Typography } from '@mui/material';
import fbLogo from '../../assets/icons/fb-logo.png';
import instaLogo from '../../assets/icons/insta-logo.png';
import xLogo from '../../assets/icons/x-logo.png';
import mailLogo from '../../assets/icons/footer-mail-icon.png';

const Footer = () => {
  return (
    <Box
      sx={{
        height: '90px',
        backgroundColor: (theme) => theme.palette.background.default,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        px: 5,
        width: '100%',
        borderTop: (theme) =>
          `1px solid ${theme.palette.customColors.lightGray}`,

        '@media (max-width:1200px)': {
          justifyContent: 'center',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          '@media (max-width: 1200px)': {
            display: 'none',
          },
        }}
      >
        <Box component='img' src={mailLogo} alt='email logo' />
        <Typography
          sx={(theme) => ({
            color: theme.palette.customColors.mediumGray,
            fontWeight: 400,
          })}
        >
          support@tradelayback.io
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.5,
          '@media (max-width: 1200px)': {
            display: 'none',
          },
        }}
      >
        <Box
          component='img'
          src={fbLogo}
          alt='facebook logo'
          sx={{ cursor: 'pointer' }}
        />
        <Box
          component='img'
          src={instaLogo}
          alt='instagram logo'
          sx={{ cursor: 'pointer' }}
        />
        <Box
          component='img'
          src={xLogo}
          alt='x logo'
          sx={{ cursor: 'pointer' }}
        />
      </Box>

      <Typography
        sx={{
          textAlign: 'center',
          display: 'none',
          color: '#E1E1E1',
          fontWeight: 400,
          fontSize: '14px',

          '@media (max-width: 1200px)': {
            display: 'block',
          },
        }}
      >
        @tradelayback - 2024
      </Typography>
    </Box>
  );
};

export default Footer;
