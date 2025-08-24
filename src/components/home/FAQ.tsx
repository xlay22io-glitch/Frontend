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

const Accordion = styled((props) => (
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
    question: "Morbi fringilla metus ac lacus dapibus.",
    detail:
      "Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. Nam lacus orci, elementum eu odio ac, molestie venenatis turpis. Mauris ex ipsum, dictum gravida pretium sed, molestie nec ante. Sed ac ullamcorper nisi.",
  },
  {
    id: "f2",
    question: "Morbi fringilla metus ac lacus dapibus.",
    detail:
      "Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. Nam lacus orci, elementum eu odio ac, molestie venenatis turpis. Mauris ex ipsum, dictum gravida pretium sed, molestie nec ante. Sed ac ullamcorper nisi.",
  },
  {
    id: "f3",
    question: "Morbi fringilla metus ac lacus dapibus.",
    detail:
      "Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. Nam lacus orci, elementum eu odio ac, molestie venenatis turpis. Mauris ex ipsum, dictum gravida pretium sed, molestie nec ante. Sed ac ullamcorper nisi.",
  },
  {
    id: "f4",
    question: "Morbi fringilla metus ac lacus dapibus.",
    detail:
      "Sed nec pharetra felis, in ultrices neque. Phasellus varius semper tellus, ac imperdiet erat commodo id. Aenean lobortis justo et velit ornare malesuada. Nam lacus orci, elementum eu odio ac, molestie venenatis turpis. Mauris ex ipsum, dictum gravida pretium sed, molestie nec ante. Sed ac ullamcorper nisi.",
  },
];

const FAQ = () => {
  const [expanded, setExpanded] = useState<string | false>("f2"); // example: second is open
  const handleChange = (panel: string) => (_e: React.SyntheticEvent, isExpanded: boolean) =>
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
                  <AddRoundedIcon sx={{ color: "#BAFD02" }} /> // TODO: CHANGE
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
              <Typography variant="body1">{detail}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </Box>
  );
};

export default FAQ;
