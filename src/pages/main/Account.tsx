import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/common/CustomButton';
import CustomAccordion from '../../components/common/CustomAccordion';
import type { ActiveHistoryTypes } from '../../types/AccountTypes.tsx';
import Pagination from '@mui/material/Pagination';
import { accInfoData } from '../../../mockData.ts';

const Account = () => {
  const navigate = useNavigate();

  const [activePage, setActivePage] = useState(1);
  const [historyPage, setHistoryPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const paginatedActive = accInfoData.active_lay.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const paginatedHistory = accInfoData.history.slice(
    (historyPage - 1) * ITEMS_PER_PAGE,
    historyPage * ITEMS_PER_PAGE
  );

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
              onClick={() => navigate('/withdraw')}
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
            {paginatedActive.map((item: ActiveHistoryTypes, index: number) => (
              <CustomAccordion
                key={item.id}
                title={`B20251407112500${
                  index + 1 + (activePage - 1) * ITEMS_PER_PAGE
                }`}
              >
                <Typography>Total Odds: {item.total_odds}</Typography>
                <Typography>Stake Amount: {item.stake_amount} USDT</Typography>
                <Typography>Win Payout: {item.win_payout} USDT</Typography>
                <Typography>Loss Payout: {item.loss_payout} USDT</Typography>
                <Typography>{item.file_name}</Typography>
              </CustomAccordion>
            ))}
            <Pagination
              count={Math.ceil(accInfoData.active_lay.length / ITEMS_PER_PAGE)}
              page={activePage}
              onChange={(_, value) => setActivePage(value)}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                '& .MuiPaginationItem-root': {
                  color: 'white',
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  color: 'white',
                  fontWeight: 'bold',
                },
              }}
            />
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
            {paginatedHistory.map((item: ActiveHistoryTypes, index: number) => (
              <CustomAccordion
                key={item.id}
                title={`B20251407112500${
                  index + 1 + (historyPage - 1) * ITEMS_PER_PAGE
                }`}
              >
                <Typography>Total Odds: {item.total_odds}</Typography>
                <Typography>Stake Amount: {item.stake_amount} USDT</Typography>
                <Typography>Win Payout: {item.win_payout} USDT</Typography>
                <Typography>Loss Payout: {item.loss_payout} USDT</Typography>
                <Typography>{item.file_name}</Typography>
              </CustomAccordion>
            ))}

            <Pagination
              count={Math.ceil(accInfoData.history.length / ITEMS_PER_PAGE)}
              page={historyPage}
              onChange={(_, value) => setHistoryPage(value)}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                '& .MuiPaginationItem-root': {
                  color: 'white',
                },
                '& .MuiPaginationItem-root.Mui-selected': {
                  color: 'white',
                  fontWeight: 'bold',
                },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
