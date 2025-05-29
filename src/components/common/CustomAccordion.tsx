import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

type CustomAccordionProps = {
  title: string;
  children: React.ReactNode;
};

const CustomAccordion = ({ title, children }: CustomAccordionProps) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      disableGutters
      elevation={0}
      sx={{
        backgroundColor: theme.palette.customColors.smoothGray,
        color: 'white',
        border: `2px solid ${theme.palette.customColors.carbon}`,
        borderTop: 'none',
        borderRadius: 0,
        mb: 0,
        '&:first-of-type': {
          borderTop: `2px solid ${theme.palette.customColors.carbon}`,
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
        },
        '&:last-of-type': {
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
          mb: 2,
        },
        '&::before': {
          display: 'none',
        },
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
        aria-controls='panel-content'
        id='panel-header'
        sx={{
          minHeight: '56px',
          '& .MuiAccordionSummary-content': {
            margin: 0,
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: '16px',
          }}
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ pt: 1 }}>{children}</Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordion;
