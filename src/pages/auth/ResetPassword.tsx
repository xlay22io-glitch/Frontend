import { useSearchParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type ResetPasswordFormInputs,
  resetPasswordSchema,
} from "../../utils/validation";
import { useResetPassword } from "../../hooks/auth-hook";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get("uid");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPassword, isPending } = useResetPassword();

  const onSubmit = (data: ResetPasswordFormInputs) => {
    if (uid && token) {
      resetPassword({ ...data, uid, token });
    }
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
        <Typography
          variant="body1"
          sx={{ opacity: "70%", marginBottom: "20px" }}
        >
          Final step!
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
            <CustomInput
              label="Password"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.password.message}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <CustomInput
              label="Confirm Password"
              type="password"
              {...register("confirm_password")}
            />
            {errors.confirm_password && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.confirm_password.message}
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
                px: 3,
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

export default ResetPassword;
