import {
  TextField,
  type TextFieldProps,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { alpha, styled } from "@mui/system";
import copyIcon from "../../assets/icons/copy.png";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type CustomInputProps = TextFieldProps & {
  label?: string;
  variantStyle?: "default" | "boxed" | "password";
  copyable?: boolean;
};

const DefaultStyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: "#1E2123",
  borderRadius: "50px",
  "& .MuiOutlinedInput-root": {
    padding: "0 20px",
    paddingLeft: "20px",
    borderRadius: "inherit",
    color: "#FFFFFF",
    "& fieldset": {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
    "&:hover fieldset": {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
    "&.Mui-focused fieldset": {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
  },
  "& .MuiInputBase-input": {
    color: "white",
    fontWeight: 400,
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
  },
  "& input::placeholder": {
    color: "#C1C2C5",
    opacity: 1,
  },
}));

const BoxedStyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.smoothGray,
  borderRadius: "50px",
  "& .MuiOutlinedInput-root": {
    color: "#fff",
    borderRadius: "50px",

    "& fieldset": {
      borderColor: "#2D3437",
    },
    "&:hover fieldset": {
      borderColor: "#2D3437",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2D3437",
    },
    "&.Mui-focused": {
      outline: "none",
      boxShadow: "none",
    },
    "& input": {
      outline: "none",
    },
    "& input:focus": {
      outline: "none",
    },
  },
  "& .MuiInputBase-root": {
    outline: "none",
    boxShadow: "none",
  },
  "& .MuiInputBase-input": {
    padding: "20px 20px",
    color: "white",
    fontSize: "16px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderWidth: "1px",
  },
}));

const CustomInput = ({
  label,
  variantStyle = "default",
  copyable = false,
  ...props
}: CustomInputProps) => {
  const InputComponent =
    variantStyle === "boxed" ? BoxedStyledInput : DefaultStyledInput;

  const [showPassword, setShowPassword] = useState(false);

  // Decide if this field should behave as password
  const isPasswordField =
    variantStyle === "password" ||
    props.type === "password" ||
    (props.name?.toLowerCase().includes("password") ?? false);

  const inputType = isPasswordField
    ? showPassword
      ? "text"
      : "password"
    : props.type;

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleCopy = () => {
    if (typeof props.value === "string") {
      void navigator.clipboard.writeText(props.value);
    }
  };

  // Build endAdornment safely
  let endAdornment: React.ReactNode | undefined;
  console.log("IS PASSWORD", isPasswordField);

  if (isPasswordField) {
    endAdornment = (
      <InputAdornment position="end" sx={{ mr: 2 }}>
        <IconButton
          onClick={handleTogglePassword}
          edge="end"
          disableRipple
          sx={{ position: "relative", zIndex: 2, pointerEvents: "auto" }}
        >
          {showPassword ? (
            <VisibilityOff sx={{ color: "white", fontSize: 18 }} />
          ) : (
            <Visibility sx={{ color: "white", fontSize: 18 }} />
          )}
        </IconButton>
      </InputAdornment>
    );
  } else if (variantStyle === "boxed" && copyable) {
    endAdornment = (
      <InputAdornment position="end">
        <IconButton onClick={handleCopy} edge="end">
          <img src={copyIcon} alt="copy" style={{ width: 16, height: 16 }} />
        </IconButton>
      </InputAdornment>
    );
  }

  // Merge with any caller-provided InputProps (if needed)
  const mergedInputProps = {
    ...(props.InputProps ?? {}),
    ...(endAdornment ? { endAdornment } : {}),
  };

  return (
    <Box sx={{ width: "100%", position: "relative" }}>
      {variantStyle === "boxed" && label && (
        <Typography
          sx={{
            color: "#697377",
            fontSize: "12px",
            textTransform: "uppercase",
            fontWeight: 700,
            mb: "4px",
          }}
        >
          {label}
        </Typography>
      )}

      <InputComponent
        {...props}
        type={inputType}
        variant="outlined"
        fullWidth
        placeholder={props.placeholder ?? label}
        InputLabelProps={
          variantStyle === "boxed" ? { shrink: true } : undefined
        }
        InputProps={mergedInputProps}
      />
    </Box>
  );
};

export default CustomInput;
