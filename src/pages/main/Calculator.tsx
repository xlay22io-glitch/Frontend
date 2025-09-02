import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PercentIcon from "@mui/icons-material/Percent";
import SavingsIcon from "@mui/icons-material/Savings";
import { useCalculator } from "../../hooks/lay-hook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { calculatorSchema, type CalculatorFormInputs } from "../../utils/validation";
import { useAccountInfo } from "../../hooks/auth-hook";

import MatchIcon from "../../assets/icons/enter-match.svg";
import TipIcon from "../../assets/icons/tip-icon.svg";
import OddIcon from "../../assets/icons/ods.svg";
import StakeIcon from "../../assets/icons/stake-icon.svg";
import uploadIcon from "../../assets/icons/upload-icon.svg";
import { useNavigate } from "react-router-dom";

const Calculator = () => {
  const theme = useTheme();

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CalculatorFormInputs>({
    resolver: zodResolver(calculatorSchema),
  });

  const totalOdd = watch("total_odd");
  const stakeAmount = watch("stake_amount");
  const file = watch("file");

  const { data: account, isPending: isAccPending } = useAccountInfo();

  useEffect(() => {
    const odd = parseFloat(totalOdd);
    const stake = parseFloat(stakeAmount);
    const result = !isNaN(odd) && !isNaN(stake) ? (odd * stake).toFixed(6) : "0.000000";
    setValue("win_payout", result);
  }, [totalOdd, stakeAmount, setValue]);

  // simple "lose payout" display (not submitted): shows stake as in many UIs
  const losePayout =
    stakeAmount && !isNaN(parseFloat(stakeAmount)) ? Number(stakeAmount).toFixed(6) : "0.000000";

  const { mutate: calculatorMutate, isPending } = useCalculator();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPicture = () => fileInputRef.current?.click();

  const onSubmit = (data: CalculatorFormInputs) => {
    const payload = new FormData();
    payload.append("total_odd", data.total_odd);
    payload.append("stake_amount", data.stake_amount);
    payload.append("win_payout", data.win_payout);
    if (data.file) payload.append("file", data.file);
    payload.append("all_data_true", String(data.all_data_true));
    calculatorMutate(payload);
  };

  // tokens to match the screenshot
  const cardBg = theme.palette.grey[900];
  const fieldBg = "#2A2A2A";
  const borderSoft = "1px solid rgba(255,255,255,0.08)";
  const accent = theme.palette.primary.main; // your lime
  const labelColor = "#B3B3B3";
  const subText = "#909A9F";

  const Labeled = ({
    children,
    label,
    rightLabel,
  }: {
    children: React.ReactNode;
    label: string;
    rightLabel?: React.ReactNode;
  }) => (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 1,
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: labelColor }}>{label}</Typography>
        {rightLabel}
      </Box>
      {children}
    </Box>
  );

  const Field = ({
    placeholder,
    icon,
    inputProps,
    type = "text",
    error,
  }: {
    placeholder: string;
    icon: string;
    inputProps?: any;
    type?: string;
    error?: string;
  }) => (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        component={"img"}
        src={icon}
        sx={{
          position: "absolute",
          zIndex: 1,
          left: "15px",
          top: "30%",
        }}
      />
      <TextField
        fullWidth
        type={type}
        placeholder={placeholder}
        {...inputProps}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "28px",
            bgcolor: fieldBg,
            color: "#fff",
            paddingLeft: "30px",
            "& fieldset": { border: borderSoft },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.16)" },
            "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.24)" },
          },
          "& .MuiInputBase-input::placeholder": { color: subText, opacity: 1 },
        }}
      />
      {error && <Typography sx={{ color: "#ff6b6b", fontSize: 12, mt: 0.5 }}>{error}</Typography>}
    </Box>
  );

  const Row = ({ label, value }: { label: string; value: React.ReactNode }) => (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        "& + &": { borderTop: borderSoft },
      }}
    >
      <Typography sx={{ color: "#E3E3E3", fontWeight: 600, fontSize: 14 }}>{label}</Typography>
      <Typography sx={{ color: accent, fontWeight: 800, fontSize: 16 }}>{value}</Typography>
    </Box>
  );

  return (
    <Box
      sx={{
        minHeight: "100%",
        py: 3,
        px: 2,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          width: "100%",
          maxWidth: 420,
        }}
      >
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <IconButton
            size="small"
            sx={{
              mr: 1,
              border: borderSoft,
              padding: "10px",
              "&:hover": { bgcolor: "#333" },
            }}
            onClick={() => navigate(-1)} // wire up if needed
          >
            <ArrowBackIosNewIcon sx={{ fontSize: 18, color: "#fff" }} />
          </IconButton>
          <Typography variant="h5" sx={{ fontWeight: 800, color: "#fff", letterSpacing: 0.2 }}>
            Place Back
          </Typography>
          <Box></Box>
        </Box>

        {/* Match */}
        <Labeled label="Match">
          <Field
            placeholder="Enter Match"
            icon={MatchIcon}
            inputProps={register("match" as any)} // optional: ignore if not in schema
          />
        </Labeled>

        {/* Tip */}
        <Labeled label="Tip">
          <Field
            placeholder="Under 0.5 or Correct Score 0:0"
            icon={TipIcon}
            inputProps={register("tip" as any)}
          />
        </Labeled>

        {/* Odds */}
        <Labeled label="Odds">
          <Field
            placeholder="0.00"
            type="number"
            icon={OddIcon}
            inputProps={{
              ...register("total_odd"),
              inputMode: "decimal",
            }}
            error={errors.total_odd?.message}
          />
        </Labeled>

        {/* Stake + available */}
        <Labeled
          label="Stake (BTC)"
          rightLabel={
            <Typography sx={{ color: "#B3B3B3", fontSize: 12 }}>
              Available:{" "}
              <Box component="span" sx={{ color: accent, fontWeight: 800 }}>
                {isAccPending ? "0.00000" : account?.balance ?? "0.00000"} BTC
              </Box>
            </Typography>
          }
        >
          <Field
            placeholder="0.000000"
            type="number"
            icon={StakeIcon}
            inputProps={{
              ...register("stake_amount"),
              inputMode: "decimal",
            }}
            error={errors.stake_amount?.message}
          />
        </Labeled>

        {/* Upload card */}
        <Box sx={{ my: 3 }}>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: labelColor, mb: 1 }}>
            Screenshot Of Your Original Lay
          </Typography>

          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(e) => {
              const selectedFile = e.target.files?.[0];
              if (selectedFile) setValue("file", selectedFile);
            }}
            style={{ display: "none" }}
          />

          <Box
            onClick={uploadPicture}
            sx={{
              border: "2px dashed rgba(255,255,255,0.12)",
              borderRadius: "20px",
              bgcolor: cardBg,
              py: 5,
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <Box
              component="img"
              src={uploadIcon}
              alt="Upload"
              sx={{
                width: 60,
                height: 60,
                mb: 1,
                bgcolor: theme.palette.primary.main,
                borderRadius: "50%",
                p: "10px",
              }}
            />
            <Typography sx={{ fontWeight: 800, color: accent, mb: 0.5 }}>
              Click to Upload
            </Typography>
            <Typography sx={{ color: subText, fontSize: 12 }}>(Max. File size: 25 MB)</Typography>
            {file && (
              <Typography sx={{ color: "#e5e5e5", fontSize: 12, mt: 1 }}>{file.name}</Typography>
            )}
          </Box>

          {errors.file && (
            <Typography sx={{ color: "#ff6b6b", fontSize: 12, mt: 0.5 }}>
              {errors.file.message}
            </Typography>
          )}
        </Box>

        {/* Payout summary box */}
        <Box
          sx={{
            borderRadius: "16px",
            bgcolor: fieldBg,
            p: 2,
            mb: 3,
          }}
        >
          <Row label="Win Payout:" value={`${watch("win_payout") || "0.000000"} BTC`} />
          <Row label="Lose Payout:" value={`${losePayout} BTC`} />
        </Box>

        {/* Big lime button */}
        <Box sx={{ mt: 1 }}>
          <button
            type="submit"
            disabled={isPending}
            style={{
              width: "100%",
              height: 56,
              borderRadius: 999,
              border: "none",
              fontWeight: 800,
              fontSize: 16,
              background: String(accent),
              color: "#000",
              cursor: isPending ? "default" : "pointer",
            }}
          >
            {isPending ? "Submitting..." : "Back"}
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
