import { Box, CircularProgress, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import { useGenerateDepositAddress } from '../../hooks/lay-hook';

const Deposit = () => {
  const { data, isPending, error } = useGenerateDepositAddress();

  if (isPending) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 90px - 78px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={40} sx={{ color: 'white' }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: 'calc(100vh - 90px - 78px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          Failed to generate deposit address. Please try again later.
        </Typography>
      </Box>
    );
  }

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
          value={data?.address || ''}
          copyable
          InputProps={{ readOnly: true }}
        />
      </Box>
    </Box>
  );
};

export default Deposit;
