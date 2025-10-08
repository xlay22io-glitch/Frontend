import { Box, Typography } from "@mui/material";
import CustomButton from "../components/common/CustomButton";

import RedirectIcon from "../assets/icons/redirect-icon.svg";
import PlayIcon from "../assets/icons/play-icon.svg";
import Player from "../assets/images/player.png";
import WhiteRedirectIcon from "../assets/icons/white-redirect-icon.svg";
import InstantCashbackIcon from "../assets/icons/instant-cashback-icon.svg";
import WeeklyCashbackIcon from "../assets/icons/weekly-cashback-icon.svg";
import WithdrawAnytimeIcon from "../assets/icons/withdraw-anytime-icon.svg";
import NoLuckTransparentIcon from "../assets/icons/no-luck-transparent-icon.svg";
import FAQ from "../components/home/FAQ";
import Logo from "../components/common/Logo";
import Footer from "../components/navigation/Footer";

const EXPLANATION_CONTENT = [
  {
    title: "Place a Lay Bet on the Exchange",
    description:
      "Start by placing a lay bet on Under 0.5 Goals at a betting exchange (like Betfair or Smarkets). This means you're betting that at least one goal will be scored in the match. Make sure you do this before kickoff and take note of your odds and stake.",
  },
  {
    title: "Back the Same Bet on  XLAY",
    description:
      "Return here and place a back bet on Under 0.5 Goals using the same odds and stake as your lay bet. Fill in the form with the match details (ex: Ajax – Feyenoord), odds, stake, and upload a screenshot of your original exchange lay for verification.",
  },
  {
    title: "Wait for the Match Result",
    description:
      "After the match finishes, we compare the outcome. If it ends 0–0, your lay bet loses but your back bet on our site wins — resulting in no profit or loss overall. If there’s a goal, your exchange bet wins and our bet loses — that’s where the bonus comes in.",
  },
  {
    title: "Get Cashback and Weekly Bonus",
    description:
      "If your exchange bet wins (a goal is scored), we give you 20% cashback on your stake — no questions asked. Plus, we track your total weekly results and add an extra 20% cashback on any net losses you’ve had with us during that week. For more details, please see our FAQs section.",
  },
];

const YOUR_CASHBACK_STRUCTURE_CONTENT = [
  {
    title: "20% Instant Cashback",
    description:
      "If a goal is scored and your bet on our site loses, we immediately refund 20% of your stake — no waiting, no conditions. It's a guaranteed bonus for sticking to the system.",
    icon: InstantCashbackIcon,
  },
  {
    title: "Another 20% Weekly Reward",
    description:
      "At the end of each week, we check your overall performance with us. If your total balance is negative, we return another 20% of those losses ",
    icon: WeeklyCashbackIcon,
  },
  {
    title: "Withdraw Anytime",
    description:
      "All cashback rewards are added to your account and can be withdrawn anytime, with no rollover requirements or restrictions. It's your money — take it when you want.",
    icon: WithdrawAnytimeIcon,
  },
];

const NO_LUCK_TRANSPARENT_CONTENT = [
  {
    title: "Risk-Free Model",
    description: "You break even on 0–0 — no profit, no loss.",
  },
  {
    title: "Verified Bets",
    description: "Every bet must include a screenshot — fair and trusted.",
  },
  {
    title: "Clear Limits",
    description:
      "Simple rules for stakes, winnings, deposits, and withdrawals.",
  },
  {
    title: "Skill Over Luck",
    description: "Pick smart matches, get rewarded — no guessing games.",
  },
  {
    title: "Fast Checks",
    description: "We verify odds, stakes, and results in real time.",
  },
  {
    title: "Instant Bonuses",
    description: "Cashback and weekly rewards with zero rollovers.",
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
          <Typography
            variant="h1"
            sx={{ textAlign: { xs: "unset", md: "center" } }}
          >
            Back Lays
          </Typography>
          <Typography
            variant="h1"
            sx={{ textAlign: { xs: "unset", md: "center" } }}
          >
            Transfer Risk
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            textAlign: { xs: "unset", md: "center" },
            opacity: "0.7",
            width: { md: "50%", xs: "unset" },
            margin: { md: "auto", xs: "unset" },
          }}
        >
          Build your bank by safely transferring risk! Back prematch your soccer
          lays under 0.5 goals for your lay odds and enjoy up to 40% cashback
          with no hidden terms.
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 4,
            mb: 2,
          }}
        >
          <Box
            component="img"
            src={Player}
            alt="Player"
            sx={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "1.5em",
            marginBottom: "5em",
          }}
        >
          <CustomButton
            variant="primary"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "3px",
              padding: { md: "20px 40px" },
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
            <Box
              component={"img"}
              src={RedirectIcon}
              sx={{ width: "15px", height: "15px" }}
            />
          </CustomButton>
          <CustomButton
            variant="outlined"
            sx={{
              padding: { md: "20px 40px" },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: (theme) => theme.palette.primary.main,
              }}
            >
              Watch Tutorial
            </Typography>
            <Box
              component={"img"}
              src={PlayIcon}
              sx={{ width: "20px", height: "20px" }}
            />
          </CustomButton>
        </Box>

        {/* How It Works */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              zIndex: 9999,
              marginTop: { md: "50px", xs: "unset" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                width: { md: "50%", xs: "unset" },
                mb: 6,
              }}
            >
              How It Works
            </Typography>

            <Box
              sx={{
                display: { xs: "flex", md: "grid" },
                flexDirection: { xs: "column" },
                gap: { xs: "1.5em", md: 18 },

                gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" },
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
                    <Box
                      component={"img"}
                      src={WhiteRedirectIcon}
                      alt="redirect"
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          {/* Explanation on How It Works */}
        </Box>

        {/* CASHBACK STRUCTURE */}
        <Box sx={{ mt: 15 }}>
          <Typography variant="h1">Your Cashback Structure</Typography>
          <Typography
            sx={{
              marginTop: "1.5em",
              opacity: "70%",
              marginBottom: "25px",
            }}
          >
            Here’s exactly how XLAY rewards you for backing your lay bets. Enjoy
            instant payouts, weekly protection, and total freedom to withdraw
            anytime.
          </Typography>

          <Box
            sx={{
              display: { xs: "flex", md: "grid" },
              flexDirection: { xs: "column" },
              gap: { xs: "1.1em", md: 3 },

              gridTemplateColumns: { md: "repeat(2, minmax(0, 1fr))" },
            }}
          >
            {YOUR_CASHBACK_STRUCTURE_CONTENT.map((item, idx) => (
              <Box
                sx={{
                  padding: "15px",
                  border: "1px solid #3A3A3A",
                  borderRadius: "16px",
                  backgroundColor: (theme) => theme.palette.gray.dark,
                  gridColumn: { md: idx === 2 ? "1 / -1" : "auto" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ opacity: "70%" }}>
                    {item.description}
                  </Typography>
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
        <Box
          sx={{
            mt: 15,
          }}
        >
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
                    <Box
                      src={NoLuckTransparentIcon}
                      alt="icon"
                      component={"img"}
                    />
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
        <Box
          sx={{
            marginTop: "100px",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              width: { md: "50%", xs: "unset" },
              margin: "auto",
              marginBottom: { xs: "unset", md: "50px" },
            }}
          >
            Find Quick Answers to Common Questions
          </Typography>
          <Typography
            sx={{
              opacity: "70%",

              width: { md: "50%", xs: "unset" },
              margin: "1.5em auto",
              textAlign: "center",
            }}
          >
            Before we start, it’s important to answer these questions to avoid
            any confusion later. If you have any other questions, just let me
            know!
          </Typography>
          <FAQ />
        </Box>
      </Box>
      {/* FOOTER */}
      <Box
        component={"footer"}
        sx={{
          backgroundColor: "#2A2929",

          padding: { md: "30px 10vw", xs: "13px" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: { md: "30%" },
            }}
          >
            <Logo />
            <Typography
              sx={{
                margin: "15px 0",
                opacity: "70%",
              }}
            >
              Smarter betting starts here. Back your lay bets on XLY, unlock
              instant cashback, and protect your bankroll — win or lose.
            </Typography>
            <Typography
              sx={{
                marginBottom: "15px",
              }}
            >
              More about us
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              opacity: "70%",
              width: { md: "50%", xs: "100%" },
            }}
          >
            <Typography>How it Works</Typography>
            <Typography>Testimonials</Typography>
            <Typography>Why XLY</Typography>
            <Typography>FAQ</Typography>
          </Box>
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
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
