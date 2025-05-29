import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useWithdraw } from '../../hooks/lay-hook';
import { useAccountInfo } from '../../hooks/auth-hook';

const Withdraw = () => {
  const [amount, setAmount] = useState('');
  const [address, setAddress] = useState('');
  const { mutate: withdraw, isPending } = useWithdraw();
  const { data, isPending: isAccPending } = useAccountInfo();

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
        {isAccPending ? (
          <Typography
            component='span'
            sx={{ color: 'white', fontSize: '14px', fontWeight: 600 }}
          >
            Loading...
          </Typography>
        ) : (
          <Typography
            component='span'
            sx={{ color: 'white', fontSize: '16px', fontWeight: 600 }}
          >
            {data?.balance || 0} BTC
          </Typography>
        )}
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
            placeholder='0.000000 BTC'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />

          <CustomInput
            label='ADDRESS'
            variantStyle='boxed'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <Box sx={{ mt: 4 }}>
            <CustomButton
              variant='primary'
              sx={{ px: 3 }}
              disabled={isPending}
              onClick={() => {
                const parsedAmount = parseFloat(amount);
                if (!parsedAmount || !address) {
                  return;
                }
                withdraw({ amount: parsedAmount, address });
              }}
            >
              {isPending ? 'Sending...' : 'WITHDRAW'}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Withdraw;
