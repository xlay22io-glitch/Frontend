import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type RegisterFormInputs, registerSchema } from "../../utils/validation";
import { useRegister } from "../../hooks/auth-hook";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: RegisterFormInputs) => {
    registerUser(data);
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
          Welcome! 👋
        </Typography>
        <Typography variant="body1" sx={{ opacity: "70%", marginBottom: "20px" }}>
          Please Register to open your own personal account!
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

          <Box
            sx={{
              position: "relative",
            }}
          >
            <CustomInput
              label="Password"
              type="password"
              variantStyle="password"
              placeholder="Enter Your Password"
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
                textTransform: "none",
                px: 3,
                py: 3.5,
                borderRadius: "50px",
                mt: 3,
                height: "36px",
                width: "100%",
              }}
            >
              {isPending ? "Registering..." : "Register"}
            </CustomButton>
            <Typography
              sx={{
                opacity: "70%",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  color: "#E8D710",
                }}
              >
                Sign in
              </Link>{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
