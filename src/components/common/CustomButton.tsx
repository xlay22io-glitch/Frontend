import React from 'react';
import type { LinkProps } from 'react-router-dom';
import Button, { type ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

type CustomButtonProps = Omit<ButtonProps, 'variant'> &
  Partial<LinkProps> & {
    variant?: 'default' | 'primary';
  };

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'variantType',
})<{ variantType: NonNullable<CustomButtonProps['variant']> }>(
  ({ theme, variantType }) => {
    const baseStyle = {
      textTransform: 'none' as const,
      fontSize: '16px',
      borderRadius: '20px',
      height: 44,
      position: 'relative' as const,

      '& .disabledIcon': {
        position: 'absolute',
        right: '12px',
        top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0,
        transition: 'opacity 0.2s',
      },

      '&.Mui-disabled': {
        pointerEvents: 'auto',
        opacity: 0.6,
        color: undefined,
        backgroundColor: undefined,
      },

      '&.Mui-disabled:hover .disabledIcon': {
        opacity: 1,
      },

      '&:disabled': {
        opacity: 0.6,
      },
    };

    switch (variantType) {
      case 'primary':
        return {
          ...baseStyle,
          backgroundColor: theme.palette.primary.main,
          color: 'black',
        };
      default:
        return {
          ...baseStyle,
          backgroundColor: 'customBox.smoothGray',
          color: 'gray.light',
        };
    }
  }
);

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'default',
  children,
  disableRipple = false,
  ...rest
}) => (
  <StyledButton variantType={variant} disableRipple={disableRipple} {...rest}>
    {children}
  </StyledButton>
);

export default CustomButton;
