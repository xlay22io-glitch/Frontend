import { Box } from "@mui/system";
import LogoIcon from "../../assets/images/logo-icon.svg";
import LogoText from "../../assets/images/logo-text.svg";

const Logo = () => {
  return (
    <Box
      component={"a"}
      href="/"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "cetner",
      }}
    >
      <Box
        component={"img"}
        src={LogoIcon}
        alt="logo"
        sx={{
          maxWidth: "70px",
          maxHeight: "20px",
        }}
      />
      <Box
        component={"img"}
        src={LogoText}
        alt="logo"
        sx={{
          maxWidth: "64px",
          maxHeight: "28px",
        }}
      />
    </Box>
  );
};

export default Logo;
