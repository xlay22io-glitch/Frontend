import { Box, Typography } from "@mui/material";
import CustomButton from "../components/common/CustomButton";

import RedirectIcon from "../assets/icons/redirect-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import PhoneLeftImg from "../assets/images/home-left-phone.png";
import PhoneRightImg from "../assets/images/home-right-phone.png";
import PhoneCenterImg from "../assets/images/home-middle-phone.png";
import SmallBtcIcon from "../assets/icons/small-btc-icon.svg";
import ArrowBottomIconRight from "../assets/icons/arrow-bottom-icon-right.svg";
import ArrowBottomIconLeft from "../assets/icons/arrow-bottom-icon-left.svg";
import BackOnXLayIcon from "../assets/icons/back-on-x-lay.svg";
import BtcOneSmallIcon from "../assets/icons/one-btc-small-icon.svg";
import WinOrLoseIcon from "../assets/icons/win-or-lose-btn-icon.svg";
import WhiteRedirectIcon from "../assets/icons/white-redirect-icon.svg";
import UpToDiscount from "../assets/icons/up-to-40-discount-icon.svg";
import InstantCashbackIcon from "../assets/icons/instant-cashback-icon.svg";
import WeeklyCashbackIcon from "../assets/icons/weekly-cashback-icon.svg";
import WithdrawAnytimeIcon from "../assets/icons/withdraw-anytime-icon.svg";
import NoLuckTransparentIcon from "../assets/icons/no-luck-transparent-icon.svg";
import theme from "../ui/theme/theme";
import FAQ from "../components/home/FAQ";
import Logo from "../components/common/Logo";

const EXPLANATION_CONTENT = [
  {
    title: "Lay The Market",
    description:
      "Place a lay bet on your favorite exchange, like Betfair, focusing on higher-risk outcomes for better returns. It’s your first step to smarter, safer betting.",
  },
  {
    title: "Back On XLAY",
    description:
      "Lock in your cashback by backing XLY. Activate rewards that protect your bankroll, tailored for sharp bettors.",
  },
  {
    title: "Get Paid Always",
    description:
      "Get 20% cashback instantly and up to 20% more weekly. With XLY, your balance grows steadily, win or lose.",
  },
];

const YOUR_CASHBACK_STRUCTURE_CONTENT = [
  {
    title: "20% Instant Cashback",
    description:
      "Get 20% instant cashback the moment you back on XLY, boosting your balance right away with no extra steps needed.",
    icon: InstantCashbackIcon,
  },
  {
    title: "Up to 20% Weekly Cashback",
    description:
      "Get 20% instant cashback the moment you back on XLY, boosting your balance right away with no extra steps needed.",
    icon: WeeklyCashbackIcon,
  },
  {
    title: "Withdraw Anytime",
    description:
      "You can easily withdraw your cashback as real money whenever you want, with no wagering requirements, no lock-ins, and no confusing bonus rules",
    icon: WithdrawAnytimeIcon,
  },
];

const NO_LUCK_TRANSPARENT_CONTENT = [
  {
    title: "Wagering Required",
    description: "No wagering required, real money instantly.",
  },
  {
    title: "Cash Back",
    description: "Real cashback, not credits, goes straight into your balance.",
  },
  {
    title: "Earning Rewards",
    description: "Works with any exchange, keep earning rewards.",
  },
  {
    title: "Automatic Rewards",
    description: "Instant, automatic rewards instantly in your account.",
  },
];
const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
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
          Bulid your bank by safely transfering risk! Back prematch your lays under 0.5 goals for
          your lay odds and enjoy up to 40% cashback with no hidden terms.
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "1.5em",
            marginBottom: "13em",
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
          }}
        >
          <Box
            component={"img"}
            src={PhoneLeftImg}
            alt="phone"
            sx={{
              position: "absolute",
              top: "-190px",
              left: "-50px",
              width: "100%",
            }}
          />
          <Box
            component={"img"}
            src={PhoneCenterImg}
            alt="phone"
            sx={{
              position: "absolute",
              top: "-230px",
              left: "-20px",
              zIndex: 1,
              width: "100%",
            }}
          />
          <Box
            component={"img"}
            src={PhoneRightImg}
            alt="phone"
            sx={{
              position: "absolute",
              top: "-200px",
              right: "-50px",

              zIndex: 0,
              width: "100%",
            }}
          />
          <Box
            sx={{
              border: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "13px 22px",
              zIndex: 9999,
              position: "relative",
              backgroundColor: (theme) => theme.palette.background.default,
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
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.5rem",
                  color: (theme) => theme.palette.gray.medium,
                }}
              >
                Back Full lay odds
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontStyle: "Bold",
                  fontSize: "1.2rem",
                }}
              >
                20%{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontSize: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  Cashback
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.5rem",
                  color: (theme) => theme.palette.gray.medium,
                }}
              >
                Instant Real Money
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Roboto",
                  fontWeight: "700",
                  fontStyle: "Bold",
                  fontSize: "1.2rem",
                }}
              >
                20%{" "}
                <Box
                  component={"span"}
                  sx={{
                    fontSize: "0.5rem",
                    fontWeight: "500",
                  }}
                >
                  Rewards
                </Box>
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.5rem",
                  color: (theme) => theme.palette.gray.medium,
                }}
              >
                On Weekly Negatives
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              height: "120px",
              zIndex: 9,
              position: "absolute",
              right: 0,
              left: 0,
            }}
          ></Box>
        </Box>

        {/* How It Works */}
        <Box
          sx={{
            marginTop: "130px",
          }}
        >
          <CustomButton
            variant="primary"
            sx={{
              fontSize: "0.5rem",
              height: "fit-content",
              margin: "25px 0",
            }}
          >
            How it Works
          </CustomButton>
          <Typography variant="h1">Get Immediately And Weekly Cashback</Typography>
          <Box
            sx={{
              marginTop: "3em",
              marginLeft: "2em",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <CustomButton
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "30px",
                }}
              >
                <Box component={"img"} src={SmallBtcIcon} alt="btc icon" />
                <Typography>Lay On Exchange</Typography>
              </CustomButton>

              <Box
                component={"img"}
                src={ArrowBottomIconRight}
                alt="arrow bottom icon"
                sx={{
                  marginTop: "10px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <Box
                component={"img"}
                src={ArrowBottomIconLeft}
                alt="arrow bottom icon"
                sx={{
                  marginTop: "10px",
                }}
              />

              <CustomButton
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "30px",
                }}
              >
                <Box component={"img"} src={BackOnXLayIcon} alt="btc icon" />
                <Typography>Back On XLAY</Typography>
              </CustomButton>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "8px",
              }}
            >
              <CustomButton
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "30px",
                }}
              >
                <Box component={"img"} src={BtcOneSmallIcon} alt="btc icon" />
                <Typography>Get Cashback</Typography>
              </CustomButton>

              <Box
                component={"img"}
                src={ArrowBottomIconRight}
                alt="arrow bottom icon"
                sx={{
                  marginTop: "10px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                marginTop: "10px",
                gap: "8px",
              }}
            >
              <Box
                component={"img"}
                src={ArrowBottomIconLeft}
                alt="arrow bottom icon"
                sx={{
                  marginTop: "10px",
                }}
              />

              <CustomButton
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  borderRadius: "30px",
                }}
              >
                <Box component={"img"} src={WinOrLoseIcon} alt="btc icon" />
                <Typography>Win Or Lose On XLAY</Typography>
              </CustomButton>
            </Box>
            <CustomButton
              variant="outlined"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                borderRadius: "30px",
              }}
            >
              <Box component={"img"} src={UpToDiscount} alt="btc icon" />
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                Up to 40% Cashback
              </Typography>
            </CustomButton>
          </Box>
        </Box>
        {/* Explanation on How It Works */}
        <Box
          sx={{
            marginTop: "2.5em",
            display: "flex",
            flexDirection: "column",
            gap: "3em",
          }}
        >
          {EXPLANATION_CONTENT.map((item, i) => (
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
              }}
            >
              <Typography>0{i + 1}</Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <Box>
                  <Typography variant="body2">{item.title}</Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      opacity: "70%",
                      marginTop: "5px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box component={"img"} src={WhiteRedirectIcon} alt="redirect" />
              </Box>
            </Box>
          ))}
        </Box>

        {/* CASHBACK STRUCTURE */}
        <Box>
          <CustomButton
            variant="primary"
            sx={{
              fontSize: "0.5rem",
              height: "fit-content",
              margin: "25px 0",
            }}
          >
            Cashback Structure
          </CustomButton>
          <Typography variant="h1">Your Cashback Structure</Typography>
          <Typography
            sx={{
              marginTop: "1.5em",
              opacity: "70%",
              marginBottom: "25px",
            }}
          >
            Here’s exactly how XLY rewards you for backing your lay bets. Enjoy instant payouts,
            weekly protection, and total freedom to withdraw anytime.
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.1em",
            }}
          >
            {YOUR_CASHBACK_STRUCTURE_CONTENT.map((item) => (
              <Box
                sx={{
                  padding: "15px",
                  borderRadius: "16px",
                  backgroundColor: (theme) => theme.palette.gray.dark,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography>{item.description}</Typography>
                  <Box component={"img"} src={item.icon} alt={item.title} />
                </Box>
                <Typography
                  variant="h2"
                  sx={{
                    marginTop: "2em",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* HOW IT WORKS 2 */}
        <Box>
          <CustomButton
            variant="primary"
            sx={{
              fontSize: "0.5rem",
              height: "fit-content",
              margin: "25px 0",
            }}
          >
            How it Works
          </CustomButton>
          <Typography variant="h1">100% Transparent, 0% Luck Needed</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {NO_LUCK_TRANSPARENT_CONTENT.map((item) => (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",

                  justifyContent: "space-between",
                  borderBottom: "1px solid #262626",
                  padding: "20px 0",
                }}
              >
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1.4em",
                    }}
                  >
                    <Box src={NoLuckTransparentIcon} alt="icon" component={"img"} />
                    <Typography
                      sx={{
                        fontWeight: "500",
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      opacity: "70%",
                      marginLeft: "46px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box component={"img"} alt="redirect" src={WhiteRedirectIcon} />
              </Box>
            ))}
          </Box>
        </Box>

        {/* FAQ */}
        <Box>
          <CustomButton
            variant="primary"
            sx={{
              fontSize: "0.5rem",
              height: "fit-content",
              margin: "25px 0",
            }}
          >
            Cashback Structure
          </CustomButton>
          <Typography variant="h1">Find Quick Answers to Common Questions</Typography>
          <Typography
            sx={{
              opacity: "70%",
              marginBottom: "1.5em",
            }}
          >
            Before we start, it’s important to answer these questions to avoid any confusion later.
            If you have any other questions, just let me know!
          </Typography>
          <FAQ />
        </Box>
      </Box>
      {/* FOOTER */}
      <Box
        component={"footer"}
        sx={{
          backgroundColor: "#2A2929",
          padding: "13px",
        }}
      >
        <Logo />
        <Typography
          sx={{
            margin: "15px 0",
            opacity: "70%",
          }}
        >
          Smarter betting starts here. Back your lay bets on XLY, unlock instant cashback, and
          protect your bankroll — win or lose.
        </Typography>
        <Typography
          sx={{
            marginBottom: "15px",
          }}
        >
          More about us
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: "70%",
          }}
        >
          <Typography>How it Works</Typography>
          <Typography>Testimonials</Typography>
          <Typography>Why XLY</Typography>
          <Typography>FAQ</Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 500,
            fontFamily: "Manrope",
            margin: "15px 0",
          }}
        >
          Support
        </Typography>
        <Typography
          sx={{
            opacity: "70%",
          }}
        >
          support@xlyplatform.com
        </Typography>
        <Typography
          sx={
            {
              // TODO add gradient
            }
          }
        >
          © 2025 — Copyright AllRights reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
