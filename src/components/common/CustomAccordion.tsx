import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import RedCheckmarkIcon from "../../assets/icons/red-checkmark.svg";
import ApprovedIcon from "../../assets/icons/approved-icon.svg";
import PendingIcon from "../../assets/icons/pending-icon.svg";

type CustomAccordionProps = {
  title: string;
  created_at: string;
  status: string;
  children: React.ReactNode;
};

const CustomAccordion = ({ title, created_at, status, children }: CustomAccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();
  const date = new Date(created_at);
  const formatted = date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  let icon = PendingIcon;
  if (status === "declined") {
    icon = RedCheckmarkIcon;
  } else if (status === "approved") {
    icon = ApprovedIcon;
  }
  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: theme.palette.gray.dark,
        color: "white",
        border: `2px solid #3A3A3A80`,
        borderRadius: "50px !important",
        my: 2,
        py: 1,
        "&:before": {
          display: "none", // removes MUI's default divider line
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          minHeight: "56px",

          "& .MuiAccordionSummary-content": {
            margin: 0,
          },
        }}
      >
        <Box component={"img"} src={icon} />
        <Box>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "16px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#BEBEBE",
            }}
          >
            {/* TODO: missing data */}
            {formatted}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ pt: 1 }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
