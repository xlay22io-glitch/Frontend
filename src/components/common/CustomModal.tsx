"use client";

import type { ReactNode } from "react";
import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  maxWidth?: string | number;
}

const CustomModal = ({ isOpen, onClose, children, maxWidth = 500 }: CustomModalProps) => {
  if (!isOpen) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1300,
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          position: "relative",
          width: "90%",
          maxWidth,
          borderRadius: "16px",
          backgroundColor: (theme) => theme.palette.background.default,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <IconButton
          disableRipple
          onClick={onClose}
          sx={{
            position: "absolute",
            color: (theme) => theme.palette.primary.main,
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            padding: "3px",
            top: 30,
            right: 30,
          }}
        >
          <CloseIcon />
        </IconButton>

        {children}
      </Box>
    </Box>
  );
};

export default CustomModal;
