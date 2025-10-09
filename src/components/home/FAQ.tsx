"use client";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
// import { AccordionProps } from "@mui/material/Accordion"; // TODO: FIX
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import { useState } from "react";

import type { AccordionProps } from "@mui/material/Accordion";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: "50px",
  overflow: "hidden",
  border: `2px solid #535353`,
  backgroundColor: "#1A1A1A",
  marginBottom: theme.spacing(2.5),
  "&::before": { display: "none" }, // remove default divider
  // open state
  "&.Mui-expanded": {
    backgroundColor: "##535353",
    borderColor: "##535353",
    color: "#fff",
    fontSize: "1rem",
  },
  // keep pill shape when open
  "&.Mui-expanded .MuiAccordionSummary-root": { borderBottom: 0 },
}));

const AccordionSummary = styled(MuiAccordionSummary)(({ theme }) => ({
  padding: theme.spacing(2, 3),
  minHeight: 64,
  color: "#fff",
  "& .MuiAccordionSummary-content": {
    margin: 0,
    alignItems: "center",
    fontSize: "1rem",
  },

  "&.Mui-expanded": {
    minHeight: 64,
    color: "#fff",
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(0, 3, 3),
  // make body text readable on dark background
  "&, & .MuiTypography-root": {
    color: "inherit",
    opacity: 0.92,
  },
}));

type FaqItem = { id: string; question: string; detail: string };
const faqs: FaqItem[] = [
  {
    id: "f1",
    question: "What exactly am I betting on?",
    detail:
      "You’re betting on Under 0.5 Goals — meaning no goals in the match.You lay this market on a betting exchange (e.g. Betfair), and then back it on our site using the same odds and stake. This locks in a balanced position where one side wins and the other loses.",
  },
  {
    id: "f2",
    question: "Why do I need to upload a screenshot?",
    detail:
      "We require a screenshot of your original lay bet to verify:\n •	That the bet was placed before kickoff\n •	That the odds and stake match what you submit\n •	That the betting exchange used is valid\nWithout this, the entry won’t be accepted.",
  },
  {
    id: "f3",
    question: "What happens if the match ends 0–0?",
    detail:
      "You win your bet on our site and lose your lay on the exchange — which means you break even overall. No profit, no loss — just a closed loop.",
  },
  {
    id: "f4",
    question: "What happens if there's a goal?",
    detail:
      "If a goal is scored, you:\n •	Win on the exchange\n •	Lose on our site\n •	But get 20% cashback from us instantly\n •	And possibly another 20% weekly bonus based on your net loss with us\nThis gives you extra profit on top of your exchange win.",
  },
  {
    id: "f5",
    question: "How is the weekly bonus calculated?",
    detail:
      "At the end of each week, we check your total performance on our platform.If you have a net loss, we give you back 20% of that amount automatically as a bonus. This is calculated from Monday to Sunday and credited early the next week.",
  },
  {
    id: "f6",
    question: "Can I withdraw my cashback?",
    detail:
      "Yes. Both the instant 20% cashback and weekly bonus are real money, fully withdrawable.There are no rollover requirements, no minimums, and no hidden conditions.",
  },
  {
    id: "f7",
    question: "Are there any restrictions or risks?",
    detail:
      "There is no risk on our side if you follow the system correctly — either you break even or you profit through cashback and bonuses.However, we reserve the right to reject entries with:\n •	Missing or unclear screenshots\n •	Inaccurate odds or stake details\n •	Late submissions (after kickoff)",
  },
  {
    id: "f8",
    question: "Which Betting Exchanges Can You Use?",
    detail:
      "Betfair and Smarkets are two of the most popular betting exchanges, offering competitive odds and the ability to place both back and lay bets. However, due to local gambling restrictions, these platforms may not be accessible in some regions. As an alternative, you can use trusted betting brokers such as BetInAsia, AsianConnect, or Sportmarket, who provide access to Betfair (via Orbit Exchange) and other major bookmakers through a single account.",
  },
  {
    id: "f9",
    question: "Why do we ask for your lay bet and screenshot?",
    detail:
      "To make this offer safe and fair for everyone, we verify that you’ve actually placed the lay bet on the exchange before the match starts. This lets us manage our risk by confirming the bet is real and at the correct odds, preventing abuse or unfair wins.\n\nBy matching your lay bet with your back bet on our site, we create a balanced position that protects both you and us. This way, we can confidently offer cashback and bonuses while keeping the system sustainable and reliable for all users.",
  },
  {
    id: "f10",
    question: "Why do we use this model?",
    detail:
      "Our model is designed to minimize risk and create a win-win scenario for both you and us. By having you lay the bet on a trusted exchange and back it on our site at the same odds, we effectively cover all possible outcomes of the match.\n\nSince matches ending 0:0 are relatively rare, most of the time you’ll win your lay bet and lose the back bet with us. But because we only pay out a small percentage as cashback and weekly bonuses, this keeps our costs low.\n\nOver many bets and users, this volume-driven system allows us to offer attractive bonuses while staying profitable — giving you better value and us a sustainable business",
  },
  {
    id: "f11",
    question: "Why do you only accept Bitcoin for deposits  and withdrawals?",
    detail:
      "We use Bitcoin because it’s one of the most trusted and widely used cryptocurrencies worldwide. Bitcoin allows us to offer fast, secure, and transparent transactions globally, with lower fees compared to traditional banking methods. It also gives you full control over your funds and makes the whole process simpler and more efficient.",
  },
  {
    id: "f12",
    question:
      "Are there any limits on deposits, bets, or withdrawals in Bitcoin?",
    detail:
      "Yes! To ensure smooth and fair play, we have set clear limits: \n•	Minimum deposit: equivalent to 10 EUR in Bitcoin \n •	Minimum stake on bets: equivalent to 10 EUR \n •	Maximum winnings per bet: equivalent to 1000 EUR \n •	Minimum withdrawal: equivalent to 20 EUR in Bitcoin\nThese limits help us keep transactions cost-effective and maintain a safe and enjoyable experience for everyone.",
  },
  {
    id: "f13",
    question: "How can I increase my chances of winning?",
    detail:
      "To maximize your bonuses and cashback, it’s important to choose matches that have a higher potential for goals. The more likely a goal is scored, the more you benefit from our cashback system! So, stay informed, analyze match stats, and pick games where goals are expected — that’s how you win more.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("f2"); // example: second is open
  const handleChange =
    (panel: string) => (_e: React.SyntheticEvent, isExpanded: boolean) =>
      setExpanded(isExpanded ? panel : false);

  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {faqs.map(({ id, question, detail }) => {
        const isOpen = expanded === id;
        return (
          <Accordion key={id} expanded={isOpen} onChange={handleChange(id)}>
            <AccordionSummary
              expandIcon={
                isOpen ? (
                  <RemoveRoundedIcon sx={{ color: "rgba(255,255,255, 0.7)" }} /> // TODO: CHANGE
                ) : (
                  <AddRoundedIcon sx={{ color: "#E8D710" }} /> // TODO: CHANGE
                )
              }
            >
              <Typography
                sx={{
                  color: "inherit",
                  fontSize: "1rme",
                  fontWeight: "400",
                  fontFamily: "Roboto",
                }}
              >
                {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
                {detail}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FAQ;
