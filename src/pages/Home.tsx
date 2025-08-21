import { useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import CustomButton from "../components/common/CustomButton";
import useAuthStore from "../store/auth-store";
import registerIcon from "../assets/icons/register.png";
import depositIcon from "../assets/icons/deposit.png";
import backIcon from "../assets/icons/back.png";
import withdrawIcon from "../assets/icons/withdraw.png";
import mobileImg from "../assets/images/mobilepicture 1.png";
import RedirectIcon from "../assets/icons/redirect-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import PhoneLeftImg from "../assets/images/home-left-phone.svg";
import PhoneRightImg from "../assets/images/home-right-phone.svg";
import PhoneCenterImg from "../assets/images/home-middle-phone.svg";
import theme from "../ui/theme/theme";

const Home = () => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Box
      sx={{
        py: 10,
        px: 6,
        "@media (max-width: 900px)": {
          px: 4,
        },
        "@media (max-width: 640px)": {
          px: 2,
          py: 8,
        },
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Back Lays
        </Typography>
        <Typography variant="h1" sx={{ textAlign: "center" }}>
          Transfer Risk
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          opacity: "0.7",
        }}
      >
        Bulid your bank by safely transfering risk! Back prematch your lays under 0.5 goals for your
        lay odds and enjoy up to 40% cashback with no hidden terms.
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          marginTop: "1.5em",
        }}
      >
        <CustomButton
          variant="primary"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "3px",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.black.dark,
            }}
          >
            Get Started
          </Typography>
          <Box component={"img"} src={RedirectIcon} sx={{ width: "15px", height: "15px" }} />
        </CustomButton>
        <CustomButton variant="outlined">
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.primary.main,
            }}
          >
            Watch Tutorial
          </Typography>
          <Box component={"img"} src={PlayIcon} sx={{ width: "20px", height: "20px" }} />
        </CustomButton>
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "120px",
        }}
      >
        {/* <Box
          component={"img"}
          src={PhoneLeftImg}
          alt="phone"
          sx={{
            position: "absolute",
          }}
        />
        <Box
          component={"img"}
          src={PhoneCenterImg}
          alt="phone"
          sx={{
            position: "absolute",
          }}
        />
        <Box
          component={"img"}
          src={PhoneRightImg}
          alt="phone"
          sx={{
            position: "absolute",
          }}
        /> */}
        <Box
          sx={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "13px 22px",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "Roboto",
                fontWeight: "700",
                fontStyle: "Bold",
                fontSize: "1.2rem",
              }}
            >
              Under 0.5
            </Typography>
            <Typography>Back Full lay odds</Typography>
          </Box>
          <Box>
            <Typography>
              20% <Box component={"span"}>Cashback</Box>
            </Typography>
            <Typography>Instant Real Money</Typography>
          </Box>
          <Box>
            <Typography>
              20% <Box component={"span"}>Rewards</Box>
            </Typography>
            <Typography>On Weekly Negatives</Typography>
          </Box>
        </Box>
      </Box>

      {!isAuthenticated && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 1.5,
            mt: 8,
          }}
        >
          <CustomButton
            onClick={() => navigate("/register")}
            variant="primary"
            sx={{ borderRadius: "10px", maxWidth: "400px", width: "100%" }}
          >
            Open Account
          </CustomButton>
          <CustomButton
            onClick={() => navigate("/login")}
            variant="primary"
            sx={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid white",
              borderRadius: "20px",
              maxWidth: "400px",
              width: "100%",
            }}
          >
            Sign in
          </CustomButton>
        </Box>
      )}

      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            NO BAD LUCK
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: "white",
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            TAKE CONTROL OF YOUR ACTION
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            background: "linear-gradient(359.34deg, #111111 0.55%, rgba(63, 86, 0, 0.2) 99.45%)",
            px: 3,
            py: 5,
            borderRadius: "50px",
            mt: 8,
            width: "100%",
            maxWidth: "668px",
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              color: (theme) => theme.palette.primary.main,
              fontFamily: "Inter",
              lineHeight: "44px",
            }}
          >
            CASHBACK{" "}
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: 900,
                color: "white",
                fontFamily: "Inter",
                lineHeight: "44px",
              }}
              component="span"
            >
              30%
            </Typography>
          </Typography>
          <Typography
            sx={{
              color: "#B2B2B2",
              fontWeight: 400,
              fontSize: "20px",
              fontFamily: "Inter",
              lineHeight: "28px",
              mt: 5,
            }}
          >
            Back your prematch lay for full odds and get cash back for weekly negative balance up to
            30%. Back your lays and transfer risk to us.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "668px", width: "100%" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            INSTANCE
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: "white",
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            ACCEPTANCE
          </Typography>

          <Box
            component="img"
            src={mobileImg}
            alt="Mobile Image"
            sx={{
              width: "100%",
              maxWidth: "506px",
              filter: "drop-shadow(0 0 80px rgba(63, 86, 0, 0.5))",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "668px", width: "100%" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            INSTANCE
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: "white",
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            ACCEPTANCE
          </Typography>
          <Typography
            sx={{
              color: "#B2B2B2",
              fontWeight: 400,
              fontSize: "20px",
              fontFamily: "Inter",
              lineHeight: "28px",
              mt: 1.5,
            }}
          >
            Back your prematch lay for full odds and get cash back for weekly negative balance up to
            30%. Back your lays and transfer risk to us.
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "668px", width: "100%" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            STEPS TO
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: "white",
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            GET STARTED
          </Typography>

          <Box sx={{ mt: 5, display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box component="img" src={registerIcon} alt="Register Icon" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Register
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    lineHeight: "24px",
                    color: "#B2B2B2",
                  }}
                >
                  Sign up to create your account.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderLeft: "1px solid #AAA", height: "58px", ml: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box component="img" src={depositIcon} alt="Register Icon" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Deposit
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    lineHeight: "24px",
                    color: "#B2B2B2",
                  }}
                >
                  Deposit funds to back your lay.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderLeft: "1px solid #AAA", height: "58px", ml: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box component="img" src={backIcon} alt="Register Icon" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Back
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    lineHeight: "24px",
                    color: "#B2B2B2",
                  }}
                >
                  Back your lay and profit without risk.
                </Typography>
              </Box>
            </Box>

            <Box sx={{ borderLeft: "1px solid #AAA", height: "58px", ml: 2 }} />

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box component="img" src={withdrawIcon} alt="Register Icon" />
              <Box>
                <Typography
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    fontFamily: "Inter",
                  }}
                >
                  Withdraw
                </Typography>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontFamily: "Inter",
                    lineHeight: "24px",
                    color: "#B2B2B2",
                  }}
                >
                  Withdraw your earnings.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: 12,
          mb: 8,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ maxWidth: "668px", width: "100%" }}>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: (theme) => theme.palette.primary.main,
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            CRYPTO
          </Typography>
          <Typography
            sx={{
              fontSize: "40px",
              fontWeight: 900,
              fontFamily: "Inter",
              color: "white",
              lineHeight: "44px",
              "@media (max-width: 400px)": {
                lineHeight: "50px",
              },
            }}
          >
            PAYMENT
          </Typography>
          <Typography
            sx={{
              color: "#B2B2B2",
              fontWeight: 400,
              fontSize: "20px",
              fontFamily: "Inter",
              lineHeight: "28px",
              mt: 4,
            }}
          >
            Safe and secure crypto payments to fund your account. TradeLayBack accepts only BTC.
            Minimum deposit and withdrawal amount equal to 10USD with no extra fees.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
