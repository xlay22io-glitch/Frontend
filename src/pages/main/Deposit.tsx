import { Box, CircularProgress, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import { useGenerateDepositAddress, useNotifyDepositClick } from "../../hooks/lay-hook";
import CustomButton from "../../components/common/CustomButton";

const Deposit = () => {
  const { data, isPending, error } = useGenerateDepositAddress();
  const { mutate: notifyDepositClick } = useNotifyDepositClick();

  const handleCopyAddress = () => {
    if (data?.address) navigator.clipboard.writeText(data.address);
    notifyDepositClick(data.address);
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
          Failed to generate deposit address. Please try again later.
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "616px",
        width: "100%",
        borderRadius: "20px",
        px: 2,
        py: 4,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "20px",
          marginBottom: "24px",
        }}
      >
        Deposit
      </Typography>

      <Typography
        sx={{
          marginBottom: "8px",
        }}
      >
        Generated Bitcoin Address:
      </Typography>

      <CustomInput
        sx={{
          backgroundColor: "#272727",
          border: "1px solid #3A3A3A ",
          "& fieldset": {
            borderColor: "#3A3A3A !important",
          },
          "&:hover fieldset": {
            border: "1px solid #3A3A3A",
          },
          "&.Mui-focused fieldset": {
            border: "1px solid #3A3A3A",
          },
          "& .MuiInputBase-input": {
            fontSize: { xs: "9px", md: "unset" },
          },
        }}
        label="Generated Bitcoin Address"
        value={data?.address || ""}
      />
      <CustomButton
        variant="primary"
        fullWidth
        sx={{ mt: 5, mb: 1, p: 3.5, borderRadius: "50px" }}
        onClick={handleCopyAddress}
      >
        Copy Address
      </CustomButton>
    </Box>
  );
};

export default Deposit;
