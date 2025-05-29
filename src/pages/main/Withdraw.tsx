import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';

const Withdraw = () => {
  return (
    <Box
      sx={{
        py: 6,
        px: 6,
        '@media (max-width: 900px)': {
          px: 4,
        },
        '@media (max-width: 640px)': {
          px: 2,
          py: 4,
        },
      }}
    >
      <Typography
        sx={{
          color: (theme) => theme.palette.customColors.deadGray,
          fontWeight: 600,
          fontSize: '16px',
          mb: 5,
        }}
      >
        Balance:{' '}
        <Typography
          component='span'
          sx={{ color: 'white', fontSize: '16px', fontWeight: 600 }}
        >
          0.0000125 BTC
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            maxWidth: '616px',
            width: '100%',
            border: (theme) => `1px solid ${theme.palette.customColors.carbon}`,
            borderRadius: '20px',
            backgroundColor: (theme) => theme.palette.customColors.smoothGray,
            px: 2,
            py: 4,
          }}
        >
          <CustomInput
            label='Amount'
            variantStyle='boxed'
            placeholder='0,000000 BTC'
          />
          <CustomInput label='ADRESS' variantStyle='boxed' />

          <Box sx={{ mt: 4 }}>
            <CustomButton variant='primary' sx={{ px: 3 }}>
              WITHDRAW
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Withdraw;
