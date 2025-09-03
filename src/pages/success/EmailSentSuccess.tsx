import { Box } from "@mui/material";
import Success from "../../components/common/Success";

const EmailSentSuccess = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 6, px: 2 }}>
      <Success successText="Email Sent Successfully" />
    </Box>
  );
};

export default EmailSentSuccess;
