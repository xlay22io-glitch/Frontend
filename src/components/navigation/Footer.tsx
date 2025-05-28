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
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
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
    </Box>
  );
};

export default Footer;
