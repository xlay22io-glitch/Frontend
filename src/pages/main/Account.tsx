import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/common/CustomButton';
import CustomAccordion from '../../components/common/CustomAccordion';
import type { ActiveHistoryTypes } from '../../types/AccountTypes.tsx';
import { accInfoData } from '../../../mockData.ts';

const Account = () => {
  const navigate = useNavigate();

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.customColors.carbon,
              borderRadius: '20px',
              p: 2.5,
            }}
          >
            <Typography
              sx={{
                color: (theme) => theme.palette.customColors.deadGray,
                fontWeight: 600,
                fontSize: '16px',
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
            <Typography
              sx={{
                color: (theme) => theme.palette.customColors.deadGray,
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              Weekly Cashback:{' '}
              <Typography
                component='span'
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontSize: '16px',
                  fontWeight: 600,
                }}
              >
                0.0000125 BTC
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: '400px' }}>
          <Typography sx={{ fontSize: '32px', fontWeight: 800, mb: 1 }}>
            Wallet
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2.5 }}>
            <CustomButton
              onClick={() => navigate('/deposit')}
              variant='primary'
              sx={{ width: '100%', maxWidth: '164px' }}
            >
              DEPOSIT
            </CustomButton>
            <CustomButton
              variant='primary'
              sx={{
                width: '100%',
                maxWidth: '164px',
                backgroundColor: '#506516',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              WITHDRAW
            </CustomButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100%', maxWidth: '602px', mx: 'auto', my: 8 }}>
        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              color: 'white',
              fontSize: '32px',
              fontFamily: 'Plus Jakarta Sans',
              mb: 1,
            }}
          >
            Active
          </Typography>
          <Box sx={{ mb: 4 }}>
            {accInfoData.active_lay.map(
              (item: ActiveHistoryTypes, index: number) => (
                <CustomAccordion
                  key={item.id}
                  title={`B20251407112500${index + 1}`}
                >
                  <Typography>Total Odds: {item.total_odds}</Typography>
                  <Typography>
                    Stake Amount: {item.stake_amount} USDT
                  </Typography>
                  <Typography>Win Payout: {item.win_payout} USDT</Typography>
                  <Typography>Loss Payout: {item.loss_payout} USDT</Typography>
                  <Typography>{item.file_name}</Typography>
                </CustomAccordion>
              )
            )}
          </Box>
        </Box>

        <Box>
          <Typography
            sx={{
              fontWeight: 800,
              color: 'white',
              fontSize: '32px',
              fontFamily: 'Plus Jakarta Sans',
              mb: 1,
            }}
          >
            History
          </Typography>
          <Box sx={{ mb: 4 }}>
            {accInfoData.history.map(
              (item: ActiveHistoryTypes, index: number) => (
                <CustomAccordion
                  key={item.id}
                  title={`B20251407112500${index + 1}`}
                >
                  <Typography>Total Odds: {item.total_odds}</Typography>
                  <Typography>
                    Stake Amount: {item.stake_amount} USDT
                  </Typography>
                  <Typography>Win Payout: {item.win_payout} USDT</Typography>
                  <Typography>Loss Payout: {item.loss_payout} USDT</Typography>
                  <Typography>{item.file_name}</Typography>
                </CustomAccordion>
              )
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
