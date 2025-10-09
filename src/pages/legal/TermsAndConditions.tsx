import { Box, Typography } from "@mui/material";
import type { Theme } from "@mui/material/styles";

const TermsAndConditions = () => {
  const sections = [
    {
      title: "Last updated 01.09.2025",
      content: [
        "Welcome to XLAY. By using our service, you agree to the following terms and conditions. Please read them carefully.",
      ],
    },
    {
      title: "1. Eligibility",
      content: [
        "• You must be at least 18 years old (or legal age in your jurisdiction) to participate.",
        "• You must have an active account with us and a verified account on a betting exchange where you place lay bets.",
        "• We reserve the right to perform Know Your Customer (KYC) verification to confirm your identity and protect against fraud or misuse. Failure to complete KYC may result in suspension or closure of your account.",
      ],
    },
    {
      title: "2. How the Service Works",
      content: [
        "• You agree to place a lay bet on Under 0.5 Goals market on a recognized betting exchange before kickoff of the match.",
        "• You then place a corresponding back bet on Under 0.5 Goals on our site using the same odds and stake.",
        "• You must submit the required match details and upload a clear, unedited screenshot of your original lay bet as proof.",
        "• Only bets verified by the screenshot and matching details will be accepted.",
        "• All bets, stakes, cashback, and bonuses on our platform are handled exclusively in Bitcoin (BTC).",
      ],
    },
    {
      title: "3. Betting and Account Limits",
      content: [
        "• The minimum stake for back bets on our site is 10 EUR.",
        "• The maximum amount you can win per bet is 1000 EUR.",
        "• The minimum deposit amount to fund your account is 10 EUR in BTC.",
        "• The minimum withdrawal amount is 20 EUR in BTC.",
      ],
    },
    {
      title: "4. Verification and Acceptance",
      content: [
        "• We reserve the right to reject any submission that:",
        "o Does not include a valid screenshot.",
        "o Shows mismatched odds, stake, or match details.",
        "o Is submitted after the match has started.",
        "o Appears fraudulent or manipulated.",
        "• Our decision on bet verification is final.",
      ],
    },
    {
      title: "5. Cashback and Bonuses",
      content: [
        "• If the match ends with one or more goals scored, you will receive:",
        "o An instant 20% cashback on your stake.",
        "o A weekly bonus of 20% on your net losses with us, calculated from Monday to Sunday.",
        "• Cashback and bonuses are credited to your account balance in Bitcoin and can be withdrawn at any time with no rollover requirements.",
        "• If the match ends 0:0, you win your back bet on our site but lose your lay bet on the exchange, resulting in a breakeven outcome overall (no cashback applies).",
      ],
    },
    {
      title: "6. Withdrawals",
      content: [
        "• Cashback and bonus funds are withdrawable without restrictions and will be paid in Bitcoin (BTC).",
        "• Withdrawals are subject to our standard withdrawal policies.",
      ],
    },
    {
      title: "7. Risks and Liability",
      content: [
        "• By using this service, you acknowledge that all betting carries risk.",
        "• We do not guarantee profits; outcomes depend on actual match results and betting market conditions.",
        "• We are not responsible for any losses incurred on betting exchanges.",
        "• It is your responsibility to ensure your lay bet is placed and documented correctly.",
      ],
    },
    {
      title: "8. Fair Use and Anti-Fraud Measures",
      content: [
        "• Abuse of the system, including but not limited to falsifying screenshots, multiple accounts, or manipulating bets, may result in account suspension or closure and forfeiture of bonuses.",
        "• We may require additional identity verification (KYC) to prevent fraud and protect the integrity of the platform.",
        "• We monitor activity to ensure fairness and integrity.",
      ],
    },
    {
      title: "9. Changes to Terms",
      content: [
        "• We reserve the right to update or modify these terms at any time.",
        "• Changes will be posted on this page with an updated effective date.",
        "• Continued use of the service constitutes acceptance of the new terms.",
      ],
    },
    {
      title: "10. Governing Law",
      content: [
        "• These terms are governed by the laws of Belize",
        "• Any disputes will be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].",
      ],
    },
  ];

  const commonFontSize = (theme: Theme) => ({
    fontSize: {
      xs: theme.typography.body2.fontSize,
      md: theme.typography.body1.fontSize,
      lg: theme.typography.h6.fontSize,
    },
  });

  return (
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
      <Typography
        sx={(theme) => ({
          pb: 5,
          textAlign: "center",
          fontSize: {
            xs: theme.typography.h4.fontSize,
            md: theme.typography.h3.fontSize,
            lg: "60px",
          },
        })}
      >
        Terms and Conditions
      </Typography>

      {sections.map((section, index) => (
        <Box key={index} sx={{ mb: 3 }}>
          <Typography
            sx={(theme) => ({
              pb: 1,
              ...commonFontSize(theme),
            })}
          >
            {section.title}
          </Typography>

          {section.content.map((paragraph, pIndex) => (
            <Typography
              key={pIndex}
              sx={(theme) => ({
                pb: 1,
                ...commonFontSize(theme),
                paddingLeft: paragraph.startsWith("o") ? "1.5rem" : "0",
                opacity: 0.7,
              })}
            >
              {paragraph}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default TermsAndConditions;
