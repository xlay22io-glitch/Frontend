import { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomInput from "../../components/common/CustomInput";
import CustomButton from "../../components/common/CustomButton";
import { useWithdraw } from "../../hooks/lay-hook";
import { useAccountInfo } from "../../hooks/auth-hook";
import EmailIcon from "../../assets/icons/login-email-icon.svg";
import BtcIcon from "../../assets/icons/btc-icon.svg";

const Withdraw = () => {
  const [amount, setAmount] = useState("");
  const [address, setAddress] = useState("");
  const { mutate: withdraw, isPending } = useWithdraw();
  const { data, isPending: isAccPending } = useAccountInfo();

  return (
    <Box
      sx={{
        padding: "29px 17px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        Withdraw Bitcoin
      </Typography>

      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            alignItems: "center",
            maxWidth: "616px",
            width: "100%",
            borderRadius: "20px",
            py: 4,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                marginBottom: "8px",
              }}
            >
              Bitcoin Address:
            </Typography>
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
                top: "55%",
              }}
            />

            <CustomInput
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              label="Bitcoin Address"
              placeholder="Enter Your Bitcoin Address"
              sx={{
                backgroundColor: "#272727",
                border: "1px solid #3A3A3A ",
                "& fieldset": {
                  borderColor: "#3A3A3A !important",
                },
                "&:hover fieldset": {
                  border: "1px solid #3A3A3A",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid #3A3A3A",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              position: "relative",
              width: "100%",
            }}
          >
            <Typography
              sx={{
                marginBottom: "8px",
              }}
            >
              Amount (BTC):
            </Typography>
            <Box
              src={BtcIcon}
              component={"img"}
              width={20}
              height={20}
              alt="email"
              sx={{
                position: "absolute",
                left: "20px",
                zIndex: 1,
                top: "55%",
              }}
            />

            <CustomInput
              value={address}
              onChange={(e) => setAmount(e.target.value)}
              label="Bitcoin Address"
              placeholder="0.00000000"
              sx={{
                backgroundColor: "#272727",
                border: "1px solid #3A3A3A ",
                "& fieldset": {
                  borderColor: "#3A3A3A !important",
                },
                "&:hover fieldset": {
                  border: "1px solid #3A3A3A",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid #3A3A3A",
                },
              }}
            />
          </Box>

          {/*  */}

          <Box
            sx={{
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 3,
                mb: 1,
                borderBottom: "1px solid #3F3F3F",
                pb: 1,
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  color: "#BEBEBE",
                }}
              >
                Available:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                {isAccPending ? (
                  "Loading..."
                ) : (
                  <>
                    {data?.balance || "0.00000"}{" "}
                    <Box
                      component={"span"}
                      sx={{
                        color: "#BEBEBE",
                      }}
                    >
                      BTC
                    </Box>
                  </>
                )}
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
                Network Fee:
              </Typography>
              <Typography
                sx={{
                  color: (theme) => theme.palette.primary.main,
                  fontWeight: 600,
                }}
              >
                ~0.00001{" "}
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
          {/*  */}

          <Box sx={{ mt: 4, width: "100%" }}>
            <CustomButton
              variant="primary"
              sx={{ px: 3, py: 4, borderRadius: "50px", width: "100%" }}
              disabled={isPending}
              onClick={() => {
                const parsedAmount = parseFloat(amount);
                if (!parsedAmount || !address) {
                  return;
                }
                withdraw({ amount: parsedAmount, address });
              }}
            >
              {isPending ? "Sending..." : "WITHDRAW"}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Withdraw;
