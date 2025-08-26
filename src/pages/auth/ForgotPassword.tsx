import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, type ForgotPasswordInputs } from "../../utils/validation";
import { useRequestPasswordReset } from "../../hooks/auth-hook";
import EmailIcon from "../../assets/icons/login-email-icon.svg";

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordInputs>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutate: requestReset, isPending } = useRequestPasswordReset();

  const onSubmit = (data: ForgotPasswordInputs) => {
    requestReset(data);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 6,
        "@media (max-width: 900px)": {
          px: 4,
        },
        "@media (max-width: 640px)": {
          px: 2,
          py: 4,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: "2rem",
          }}
        >
          Reset Your Password
        </Typography>
        <Typography variant="body1" sx={{ opacity: "70%", marginBottom: "20px" }}>
          Securely Reset Your Password
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: "332px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Box
              src={EmailIcon}
              component={"img"}
              width={20}
              height={20}
              alt="email"
              sx={{
                position: "absolute",
                left: "20px",
                zIndex: 1,
                top: "35%",
              }}
            />
            <CustomInput
              label="Email"
              placeholder="Enter Your Email Address"
              {...register("email")}
            />
            {errors.email && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.email.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <CustomButton
              type="submit"
              variant="primary"
              disabled={isPending}
              sx={{
                mt: 2,
                textTransform: "none",
                px: 4,
                height: "36px",
                width: "100%",
              }}
            >
              {isPending ? "Submitting..." : "Submit"}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
