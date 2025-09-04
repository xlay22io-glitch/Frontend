import { Box, Typography, Link as MuiLink, useTheme } from "@mui/material";

type BetItem = {
  total_odds: number | string;
  stake_amount: number | string;
  win_payout: number | string;
  loss_payout: number | string;
  file_name?: string;
  match?: string;
  tip?: string;
  odds?: number | string;
  stake_unit?: string;
  payout_unit?: string;
};

const BetDetails = ({ item }: { item: BetItem }) => {
  const theme = useTheme();

  // colors & lines similar to the screenshot
  const valueColor = "#B7E63B"; // lime/acid green
  const rowBorder = "1px solid rgba(255,255,255,0.08)";

  // build rows; include only if you have the data
  const rows: Array<{ label: string; value: React.ReactNode }> = [
    item.match ? { label: "Match", value: item.match } : null,
    item.tip ? { label: "Tip", value: item.tip } : null,
    item.odds != null ? { label: "Odds", value: item.odds } : null,
    {
      label: "Stake",
      value: `${item.stake_amount} ${item.stake_unit ?? "USDT"}`,
    },
    item.file_name
      ? {
          label: "Original Lay",
          value: (
            <MuiLink underline="hover" sx={{ color: valueColor, cursor: "pointer" }}>
              {item.file_name}
            </MuiLink>
          ),
        }
      : null,
    {
      label: "Win Payout",
      value: `${item.win_payout} ${item.payout_unit ?? "USDT"}`,
    },
    {
      label: "Lose Payout",
      value: `${item.loss_payout} ${item.payout_unit ?? "USDT"}`,
    },
  ].filter(Boolean) as Array<{ label: string; value: React.ReactNode }>;

  return (
    <Box
      sx={{
        borderRadius: "24px",
        overflow: "hidden",
        bgcolor: theme.palette.grey[900], // sits on your dark accordion
      }}
    >
      {rows.map((row, i) => (
        <Box
          key={row.label}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            px: 2,
            py: 1.25,
            borderTop: i === 0 ? "none" : rowBorder,
          }}
        >
          <Typography variant="body2" sx={{ opacity: 0.9, fontWeight: 500, letterSpacing: 0.2 }}>
            {row.label}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: valueColor, fontWeight: 600, textAlign: "right" }}
          >
            {row.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default BetDetails;
