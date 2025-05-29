import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';

const Deposit = () => {
  return (
    <Box
      sx={{
        py: 10,
        px: 6,
        display: 'flex',
        justifyContent: 'center',
        '@media (max-width: 900px)': {
          px: 4,
        },
        '@media (max-width: 640px)': {
          px: 2,
          py: 8,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
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
        <Typography
          sx={{
            textAlign: 'center',
            fontSize: '16px',
            fontWeight: 600,
            color: '#B0B0B0',
            mb: 3,
          }}
        >
          Generated adress for deposit
        </Typography>

        <CustomInput
          label='Address'
          variantStyle='boxed'
          value='bc1qxy2kgfadsfadfa'
          copyable
          InputProps={{ readOnly: true }}
        />
      </Box>
    </Box>
  );
};

export default Deposit;
