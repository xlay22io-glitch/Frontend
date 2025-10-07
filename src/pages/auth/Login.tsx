import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginFormInputs, loginSchema } from "../../utils/validation";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/auth-hook";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = (data: LoginFormInputs) => {
    loginUser(data);
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
        <Box
          sx={{
            textAlign: "center",
            margin: "2.4em 0",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
            }}
          >
            Welcome Back! 👋
          </Typography>
          <Typography variant="body1" sx={{ opacity: "70%" }}>
            Please Enter your login details.
          </Typography>
        </Box>
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
              label="Email"
              placeholder="Enter your Email"
              {...register("email")}
            />
            {errors.email && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.email.message}
              </Typography>
            )}
          </Box>

          <Box
            sx={{
              position: "relative",
            }}
          >
            <CustomInput
              label="Password"
              type="password"
              variantStyle="password"
              placeholder="Enter your Password"
              {...register("password")}
            />

            {errors.password && (
              <Typography sx={{ color: "red", fontSize: "12px", mt: 0.5 }}>
                {errors.password.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "right", mb: 1 }}>
            <Link
              to="/forgot-password"
              style={{
                color: "#B7B8BB",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.2rem",
            }}
          >
            <CustomButton
              type="submit"
              variant="primary"
              disabled={isPending}
              sx={{
                ml: 2,
                textTransform: "none",
                px: 4,
                py: "20px",

                width: "100%",
              }}
            >
              {isPending ? "Logging in..." : "Login"}
            </CustomButton>
            <Typography
              sx={{
                opacity: "70%",
              }}
            >
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  color: "#D9FD08",
                }}
              >
                Sign up
              </Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
