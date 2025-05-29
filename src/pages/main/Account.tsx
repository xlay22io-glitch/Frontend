import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';
import CustomButton from '../../components/common/CustomButton';
import CustomAccordion from '../../components/common/CustomAccordion';
import type { ActiveHistoryTypes } from '../../types/AccountTypes.tsx';
import Pagination from '@mui/material/Pagination';
import { useAccountInfo } from '../../hooks/auth-hook.tsx';

const Account = () => {
  const navigate = useNavigate();
  const { data, isPending, error } = useAccountInfo();

  const [activePage, setActivePage] = useState(1);
  const [historyPage, setHistoryPage] = useState(1);

  const ITEMS_PER_PAGE = 6;

  const paginatedActive = data?.active_lay.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const paginatedHistory = data?.history.slice(
    (historyPage - 1) * ITEMS_PER_PAGE,
    historyPage * ITEMS_PER_PAGE
  );

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
          Failed to load account info. Please try again later.
        </Typography>
      </Box>
    );
  }

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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          '@media (max-width: 900px)': {
            flexDirection: 'column',
            gap: 5,
          },
        }}
      >
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
                {data?.balance || 0} BTC
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
                {data?.weekly_cashback || 0} BTC
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: '400px',
            '@media (max-width: 900px)': { width: '100%' },
          }}
        >
          <Typography
            sx={{
              fontSize: '32px',
              fontWeight: 800,
              mb: 1,
              '@media (max-width: 640px)': { fontSize: '24px' },
            }}
          >
            Wallet
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2.5,
              '@media (max-width: 900px)': { gap: 1.5 },
              '@media (max-width: 640px)': {
                justifyContent: 'space-between',
                gap: 1,
              },
            }}
          >
            <CustomButton
              onClick={() => navigate('/deposit')}
              variant='primary'
              sx={{
                width: '100%',
                maxWidth: '164px',
                '@media (max-width: 640px)': {
                  maxWidth: '100%',
                  fontSize: '14px',
                },
              }}
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
                '@media (max-width: 640px)': {
                  maxWidth: '100%',
                  fontSize: '14px',
                },
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
              '@media (max-width: 640px)': { fontSize: '24px' },
            }}
          >
            Active
          </Typography>
          <Box sx={{ mb: 4 }}>
            {paginatedActive.length === 0 ? (
              <Typography
                sx={{
                  color: '#9CA3AF',
                  textAlign: 'center',
                  fontWeight: 500,
                  fontSize: '14px',
                  mt: 2,
                }}
              >
                No active bets found.
              </Typography>
            ) : (
              paginatedActive.map((item: ActiveHistoryTypes, index: number) => (
                <CustomAccordion
                  key={item.id}
                  title={`B20251407112500${
                    index + 1 + (activePage - 1) * ITEMS_PER_PAGE
                  }`}
                >
                  <Typography>Total Odds: {item.total_odds}</Typography>
                  <Typography>
                    Stake Amount: {item.stake_amount} USDT
                  </Typography>
                  <Typography>Win Payout: {item.win_payout} USDT</Typography>
                  <Typography>Loss Payout: {item.loss_payout} USDT</Typography>
                  <Typography>{item.file_name}</Typography>
                </CustomAccordion>
              ))
            )}

            {paginatedActive.length > 0 && (
              <Pagination
                count={Math.ceil(data.active_lay.length / ITEMS_PER_PAGE)}
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
              '@media (max-width: 640px)': { fontSize: '24px' },
            }}
          >
            History
          </Typography>
          <Box sx={{ mb: 4 }}>
            {paginatedHistory.length === 0 ? (
              <Typography
                sx={{
                  color: '#9CA3AF',
                  textAlign: 'center',
                  fontWeight: 500,
                  fontSize: '14px',
                  mt: 2,
                }}
              >
                No history found.
              </Typography>
            ) : (
              paginatedHistory.map(
                (item: ActiveHistoryTypes, index: number) => (
                  <CustomAccordion
                    key={item.id}
                    title={`B20251407112500${
                      index + 1 + (historyPage - 1) * ITEMS_PER_PAGE
                    }`}
                  >
                    <Typography>Total Odds: {item.total_odds}</Typography>
                    <Typography>
                      Stake Amount: {item.stake_amount} USDT
                    </Typography>
                    <Typography>Win Payout: {item.win_payout} USDT</Typography>
                    <Typography>
                      Loss Payout: {item.loss_payout} USDT
                    </Typography>
                    <Typography>{item.file_name}</Typography>
                  </CustomAccordion>
                )
              )
            )}

            {paginatedHistory.length > 0 && (
              <Pagination
                count={Math.ceil(data.history.length / ITEMS_PER_PAGE)}
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
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
