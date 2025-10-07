import { useEffect, useRef } from "react";
import {
  Box,
  Typography,
  TextField,
  IconButton,
  useTheme,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { useCalculator } from "../../hooks/lay-hook";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  calculatorSchema,
  type CalculatorFormInputs,
} from "../../utils/validation";
import { useAccountInfo } from "../../hooks/auth-hook";

import uploadIcon from "../../assets/icons/upload-icon.svg";
import { useNavigate } from "react-router-dom";

// --- move these ABOVE Calculator() ---

const toNum = (v?: string) => {
  if (!v) return NaN;
  const normalized = v.replace(",", ".").trim();
  const n = Number(normalized);
  return Number.isFinite(n) ? n : NaN;
};

const normalizeForApi = (v: string) => v.replace(",", ".").trim();

type LabeledProps = {
  children: React.ReactNode;
  label: string;
  rightLabel?: React.ReactNode;
};

export const Labeled = ({ children, label, rightLabel }: LabeledProps) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          mb: 1,
        }}
      >
        <Typography sx={{ fontSize: 12, fontWeight: 700, color: "#B3B3B3" }}>
          {label}
        </Typography>
        {rightLabel}
      </Box>
      {children}
    </Box>
  );
};

type FieldProps = {
  placeholder: string;
  inputProps?: any; // from react-hook-form register(...)
  type?: string;
  error?: string;
  readOnly?: boolean;
};

export const Field = ({
  placeholder,
  inputProps,
  type = "text",
  error,
  readOnly,
}: FieldProps) => {
  const fieldBg = "#2A2A2A";
  const borderSoft = "1px solid rgba(255,255,255,0.08)";
  const subText = "#909A9F";

  // map RHF ref correctly for MUI
  const { ref, ...rest } = inputProps ?? {};

  return (
    <Box sx={{ position: "relative" }}>
      <TextField
        fullWidth
        type={type}
        placeholder={placeholder}
        inputRef={ref}
        {...rest}
        InputProps={{ readOnly: readOnly }}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "28px",
            bgcolor: fieldBg,
            color: "#fff !important",
            "& fieldset": { border: borderSoft },
            "&:hover fieldset": { borderColor: "rgba(255,255,255,0.16)" },
            "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.24)" },
          },
          "& .MuiInputBase-input::placeholder": { color: subText, opacity: 1 },
        }}
      />
      {error && (
        <Typography sx={{ color: "#ff6b6b", fontSize: 12, mt: 0.5 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

type RowProps = { label: string; value: React.ReactNode };
export const Row = ({ label, value }: RowProps) => {
  const borderSoft = "1px solid rgba(255,255,255,0.08)";
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        "& + &": { borderTop: borderSoft },
      }}
    >
      <Typography sx={{ color: "#E3E3E3", fontWeight: 600, fontSize: 14 }}>
        {label}
      </Typography>
      <Typography
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 800,
          fontSize: 16,
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};

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
    const odd = toNum(totalOdd);
    const stake = toNum(stakeAmount);
    const result =
      !isNaN(odd) && !isNaN(stake) ? (odd * stake).toFixed(6) : "0.000000";
    setValue("win_payout", result);
  }, [totalOdd, stakeAmount, setValue]);

  // lose payout
  const losePayout =
    stakeAmount && !isNaN(toNum(stakeAmount))
      ? (toNum(stakeAmount) / 5).toFixed(6)
      : "0.000000";

  useEffect(() => {
    setValue("tip", "Under 0,5g or Correct score 0:0");
  }, [setValue]);

  // simple "lose payout" display (not submitted): shows stake as in many UIs

  const { mutate: calculatorMutate, isPending } = useCalculator();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPicture = () => fileInputRef.current?.click();

  const onSubmit = (data: CalculatorFormInputs) => {
    const payload = new FormData();
    payload.append("total_odd", normalizeForApi(data.total_odd));
    payload.append("stake_amount", normalizeForApi(data.stake_amount));
    payload.append("win_payout", normalizeForApi(data.win_payout));
    payload.append("tip", data.tip);
    payload.append("loss_payout", normalizeForApi(String(losePayout)));
    payload.append("match", data.match);
    if (data.file) payload.append("file", data.file);
    calculatorMutate(payload);
  };

  console.log(errors);
  // tokens to match the screenshot
  const cardBg = theme.palette.grey[900];
  const fieldBg = "#2A2A2A";
  const borderSoft = "1px solid rgba(255,255,255,0.08)";
  const accent = theme.palette.primary.main; // your lime
  const labelColor = "#B3B3B3";
  const subText = "#909A9F";

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
          maxWidth: { xs: 420, md: "50%" },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 3,
          }}
        >
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
          <Typography
            variant="h5"
            sx={{ fontWeight: 800, color: "#fff", letterSpacing: 0.2 }}
          >
            Place Back
          </Typography>
          <Box></Box>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { md: "repeat(2, 1fr)", xs: "repeat(1, 1fr)" },
            gap: "10px",
          }}
        >
          {/* Match */}
          <Labeled label="Match">
            <Field
              placeholder="Enter Match"
              inputProps={register("match")} // optional: ignore if not in schema
            />
          </Labeled>

          {/* Tip */}
          <Labeled label="Tip">
            <Field
              placeholder="Under 0.5 or Correct Score 0:0"
              inputProps={register("tip")}
              readOnly={true}
            />
          </Labeled>

          {/* Odds */}
          <Labeled label="Odds">
            <Field
              placeholder="0.00"
              type="text"
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
              type="text"
              inputProps={{
                ...register("stake_amount"),
                inputMode: "decimal",
              }}
              error={errors.stake_amount?.message}
            />
          </Labeled>
        </Box>
        {/* Upload card */}
        <Box sx={{ my: 3 }}>
          <Typography
            sx={{ fontSize: 14, fontWeight: 500, color: labelColor, mb: 1 }}
          >
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
            <Typography sx={{ color: subText, fontSize: 12 }}>
              (Max. File size: 25 MB)
            </Typography>
            {file && (
              <Typography sx={{ color: "#e5e5e5", fontSize: 12, mt: 1 }}>
                {file.name}
              </Typography>
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
          <Row
            label="Win Payout:"
            value={`${watch("win_payout") || "0.000000"} BTC`}
          />
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
