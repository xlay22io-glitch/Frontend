import { useState } from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

import CustomAccordion from "../../components/common/CustomAccordion";
import type { ActiveHistoryTypes } from "../../types/AccountTypes.tsx";
import Pagination from "@mui/material/Pagination";
import { useAccountInfo } from "../../hooks/auth-hook.tsx";
import BackIcon from "../../assets/icons/arrow-left.svg";
import CustomButton from "../../components/common/CustomButton.tsx";
import BetDetails from "../../components/home/BetDetails.tsx";
import { useNavigate } from "react-router-dom";

const MyBacks = () => {
  const { data, isPending, error } = useAccountInfo();
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState(1);
  const ITEMS_PER_PAGE = 20;

  const paginatedData = data?.active_lay.slice(
    (activePage - 1) * ITEMS_PER_PAGE,
    activePage * ITEMS_PER_PAGE
  );

  const goBack = () => {
    navigate(-1);
  };

  if (isPending) {
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 90px - 78px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={40} sx={{ color: "white" }} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 90px - 78px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          sx={{
            color: "white",
            fontSize: "16px",
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
      sx={{ width: "100%", maxWidth: { xs: "602px", md: "80%" }, mx: "auto", my: 8, px: "20px" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
          mb: 4,
        }}
      >
        <CustomButton
          onClick={goBack}
          variant="outlined"
          sx={{
            padding: "10px",
            borderRadius: "50%",
            width: 40,
            height: 40,
            minWidth: "unset",
          }}
        >
          <Box component={"img"} src={BackIcon} />
        </CustomButton>
        <Typography sx={{ fontSize: "1.5rem", fontWeight: 400 }}>My Backs</Typography>
        <Box
          sx={{
            width: "10%",
          }}
        ></Box>
      </Box>
      <Box>
        <Box sx={{ mb: 4 }}>
          {paginatedData.length === 0 ? (
            <Typography
              sx={{
                color: "#9CA3AF",
                textAlign: "center",
                fontWeight: 500,
                fontSize: "14px",
                mt: 2,
              }}
            >
              No active bets found.
            </Typography>
          ) : (
            paginatedData.map((item: ActiveHistoryTypes, index: number) => (
              <CustomAccordion
                key={item.id}
                created_at={item.created_at}
                status={item.status}
                title={`B20251407112500${index + 1 + (activePage - 1) * ITEMS_PER_PAGE}`}
              >
                <BetDetails
                  item={{
                    match: `${item.match}`, // TODO: missing
                    tip: item.tip, // e.g. "Correct Score 0:0"
                    odds: item.total_odds,
                    total_odds: item.total_odds,
                    stake_amount: item.stake_amount,
                    win_payout: item.win_payout,
                    loss_payout: item.loss_payout,
                    file_name: item.file_name,

                    stake_unit: "BTC",
                    payout_unit: "BTC",
                  }}
                />
              </CustomAccordion>
            ))
          )}

          {paginatedData.length > 0 && (
            <Pagination
              count={Math.ceil(data.active_lay.length / ITEMS_PER_PAGE)}
              page={activePage}
              onChange={(_, value) => setActivePage(value)}
              sx={{
                display: "flex",
                justifyContent: "center",
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
                "& .MuiPaginationItem-root.Mui-selected": {
                  color: "black !important",

                  backgroundColor: (theme) => theme.palette.primary.main,
                },
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default MyBacks;
