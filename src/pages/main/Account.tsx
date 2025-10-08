import { Box, CircularProgress, Typography } from "@mui/material";
import CustomButton from "../../components/common/CustomButton";
import RedirectIcon from "../../assets/icons/redirect-icon.svg";
import PlusIcon from "../../assets/icons/plus-icon.svg";
import WithdrawIcon from "../../assets/icons/withdraw-icon.svg";
import MyBack from "../../assets/icons/my-back-icon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CustomModal from "../../components/common/CustomModal";
import Withdraw from "./Withdraw";
import Deposit from "./Deposit";
import { useAccountInfo, useLogout } from "../../hooks/auth-hook";
import useAuthStore from "../../store/auth-store";
import { useCloseWhenUserLeaves } from "../../hooks/lay-hook";

const Account = () => {
  const navigate = useNavigate();
  const [withdrawModalVisible, setWithdrawModalVisible] = useState(false);
  const [depositModalVisible, setDepositModalVisible] = useState(false);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const { mutate: logoutUser } = useLogout();
  const { data, isPending } = useAccountInfo();
  console.log(data);
  useCloseWhenUserLeaves(() => setDepositModalVisible(false));

  const handleWithdrawClick = () => {
    setWithdrawModalVisible((c) => !c);
  };

  const handleDepositClick = () => {
    setDepositModalVisible((c) => !c);
  };

  const handleLogout = () => {
    logoutUser();
    clearAuth();
    navigate("/login");
  };
  const dateFormatter = (dateStr: string) => {
    const date = new Date(dateStr);
    const formatted = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
    });
    return formatted;
  };

  if (isPending) {
    return (
      <Box
        sx={{
          minHeight: "calc(100vh - 90px - 78px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress size={40} sx={{ color: "white" }} />
      </Box>
    );
  }

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
          flexDirection: "column",
          gap: 5,
          justifyContent: "center",
          alignItems: { md: "center", xs: "flex-start" },
        }}
      >
        {withdrawModalVisible && (
          <CustomModal
            isOpen={withdrawModalVisible}
            onClose={handleWithdrawClick}
          >
            <Withdraw />
          </CustomModal>
        )}

        {depositModalVisible && (
          <CustomModal
            isOpen={depositModalVisible}
            onClose={handleDepositClick}
          >
            <Deposit />
          </CustomModal>
        )}
        <Box>
          <Box
            sx={{
              backgroundColor: (theme) => theme.palette.background.default,
              borderRadius: "20px",
              px: 1,
              textAlign: { md: "center", xs: "left" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: (theme) => theme.palette.customColors.deadGray,
                fontWeight: 400,
              }}
            >
              Hello, Welcome
            </Typography>
            <Typography
              component="span"
              sx={{ color: "white", fontSize: "16px", fontWeight: 600 }}
            >
              {/* missing data */}
              {data.email}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            // width: "400px",
            width: { xs: "100%", md: "50%" },
            margin: "auto",
          }}
        >
          <Box
            sx={{
              padding: "15px",
              border: "1px solid #3A3A3A",
              borderRadius: "16px",
              backgroundColor: (theme) => theme.palette.gray.dark,
            }}
          >
            <Typography
              sx={{
                color: "#F0E7E7",
                marginBottom: "20px",
              }}
            >
              Available Balance
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: "2rem",
                color: (theme) => theme.palette.primary.main,
                fontWeight: "400",
                fontFamilry: "Roboto",
              }}
            >
              {/* missing data */}
              {data.balance}
              <Box component="span" sx={{ fontSize: "10px", fontWeight: 500 }}>
                BTC
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "2em 0",
            }}
          >
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CustomButton
                onClick={() => navigate("/calculator")}
                variant="primary"
                sx={{
                  borderRadius: "50%",
                  width: 55,
                  height: 55,
                  minWidth: "unset",
                }}
              >
                <img
                  src={RedirectIcon}
                  alt="redirect icon"
                  width={27}
                  height={27}
                />
              </CustomButton>
              <Typography
                sx={{
                  color: "#F0E7E7",
                  marginTop: "5px",
                }}
              >
                Place Back
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CustomButton
                onClick={handleDepositClick}
                sx={{
                  borderRadius: "50%",
                  width: 55,
                  height: 55,
                  minWidth: "unset",
                  backgroundColor: "#272727",
                }}
              >
                <img
                  src={PlusIcon}
                  alt="redirect icon"
                  width={27}
                  height={27}
                />
              </CustomButton>
              <Typography
                sx={{
                  color: "#F0E7E7",
                  marginTop: "5px",
                }}
              >
                Deposit
              </Typography>
            </Box>

            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CustomButton
                onClick={handleWithdrawClick}
                sx={{
                  borderRadius: "50%",
                  width: 55,
                  height: 55,
                  minWidth: "unset",
                  backgroundColor: "#272727",
                }}
              >
                <img
                  src={WithdrawIcon}
                  alt="redirect icon"
                  width={27}
                  height={27}
                />
              </CustomButton>
              <Typography
                sx={{
                  color: "#F0E7E7",
                  marginTop: "5px",
                }}
              >
                Withdraw
              </Typography>
            </Box>
            <Box
              sx={{
                textAlign: "center",
              }}
            >
              <CustomButton
                onClick={() => navigate("/my-backs")}
                sx={{
                  borderRadius: "50%",
                  width: 55,
                  height: 55,
                  minWidth: "unset",
                  backgroundColor: "#272727",
                }}
              >
                <img src={MyBack} alt="redirect icon" width={27} height={27} />
              </CustomButton>
              <Typography
                sx={{
                  color: "#F0E7E7",
                  marginTop: "5px",
                }}
              >
                My Backs
              </Typography>
            </Box>
          </Box>

          {/*  */}
          <Box>
            <Box
              sx={{
                padding: "15px",
                border: "1px solid #3A3A3A",
                borderRadius: "16px",
                backgroundColor: (theme) => theme.palette.gray.dark,
              }}
            >
              <Typography
                sx={{
                  fontSize: "24px",
                }}
              >
                Bonus Program
              </Typography>
              <Typography
                sx={{
                  color: "#F0E7E7",
                  fontSize: "14px",
                  marginTop: "5px",
                }}
              >
                {`${dateFormatter(
                  data?.weekly_bonus?.[0]?.week_start
                )} - ${dateFormatter(data?.weekly_bonus?.[0]?.week_end)}`}
              </Typography>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                    mb: 1,
                    borderBottom: "1px solid #3F3F3F",
                    pb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#BEBEBE",
                    }}
                  >
                    Weekly Reward:
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  >
                    {data?.weekly_bonus?.[0]?.weekly_reward}
                    <Box
                      component={"span"}
                      sx={{
                        color: "#BEBEBE",
                      }}
                    >
                      BTC
                    </Box>
                  </Typography>
                </Box>

                {/*  */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 3,
                    mb: 1,
                    borderBottom: "1px solid #3F3F3F",
                    pb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#BEBEBE",
                    }}
                  >
                    Weekly Balance:
                  </Typography>
                  <Typography
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      fontWeight: 600,
                    }}
                  >
                    {data?.weekly_bonus?.[0]?.weekly_balance}
                    <Box
                      component={"span"}
                      sx={{
                        color: "#BEBEBE",
                      }}
                    >
                      BTC
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Box>
            <CustomButton
              onClick={handleLogout}
              variant="primary"
              fullWidth
              sx={{ mt: 4, mb: 1, p: 3.5, borderRadius: "50px" }}
            >
              Log out
            </CustomButton>
          </Box>
          {/*  */}
        </Box>
      </Box>
    </Box>
  );
};

export default Account;
