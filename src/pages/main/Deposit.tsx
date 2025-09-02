import { Box, CircularProgress, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import { useGenerateDepositAddress } from "../../hooks/lay-hook";
import CustomButton from "../../components/common/CustomButton";

const Deposit = () => {
  const { data, isPending, error } = useGenerateDepositAddress();

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

      <CustomInput
        sx={{
          borderRadius: "50px",
        }}
        label="Generated Bitcoin Address"
        variantStyle="boxed"
        value={data?.address || ""}
        copyable
        InputProps={{ readOnly: true }}
      />
      <CustomButton variant="primary" fullWidth sx={{ mt: 5, mb: 1, p: 3.5, borderRadius: "50px" }}>
        Copy Address
      </CustomButton>
    </Box>
  );
};

export default Deposit;
