import {
  TextField,
  type TextFieldProps,
  Box,
  Typography,
  IconButton,
  InputAdornment,
} from '@mui/material';
import { alpha, styled } from '@mui/system';
import copyIcon from '../../assets/icons/copy.png';

type CustomInputProps = TextFieldProps & {
  label?: string;
  variantStyle?: 'default' | 'boxed';
  copyable?: boolean;
};

const DefaultStyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: '#1E2123',
  borderRadius: '50px',
  '& .MuiOutlinedInput-root': {
    padding: '0 4px',
    borderRadius: 'inherit',
    color: '#FFFFFF',
    '& fieldset': {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
    '&:hover fieldset': {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
    '&.Mui-focused fieldset': {
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
  },
  '& .MuiInputBase-input': {
    color: 'white',
    fontWeight: 400,
    fontSize: '14px',
    display: 'flex',
    alignItems: 'center',
  },
  '& input::placeholder': {
    color: '#C1C2C5',
    opacity: 1,
  },
}));

const BoxedStyledInput = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.customColors.smoothGray,
  borderRadius: '10px',
  '& .MuiOutlinedInput-root': {
    color: '#fff',
    borderRadius: '10px',
    '& fieldset': {
      borderColor: '#2D3437',
    },
    '&:hover fieldset': {
      borderColor: '#2D3437',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#2D3437',
    },
    '&.Mui-focused': {
      outline: 'none',
      boxShadow: 'none',
    },
    '& input': {
      outline: 'none',
    },
    '& input:focus': {
      outline: 'none',
    },
  },
  '& .MuiInputBase-root': {
    outline: 'none',
    boxShadow: 'none',
  },
  '& .MuiInputBase-input': {
    padding: '12px 16px',
    color: 'white',
    fontSize: '14px',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
  },
}));

const CustomInput = ({
  label,
  variantStyle = 'default',
  copyable = false,
  ...props
}: CustomInputProps) => {
  const InputComponent =
    variantStyle === 'boxed' ? BoxedStyledInput : DefaultStyledInput;

  const handleCopy = () => {
    if (typeof props.value === 'string') {
      navigator.clipboard.writeText(props.value);
    }
  };

  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      {variantStyle === 'boxed' && label && (
        <Typography
          sx={{
            color: '#697377',
            fontSize: '12px',
            textTransform: 'uppercase',
            fontWeight: 700,
            mb: '4px',
          }}
        >
          {label}
        </Typography>
      )}
      <InputComponent
        {...props}
        variant='outlined'
        fullWidth
        placeholder={variantStyle === 'default' ? label : props.placeholder}
        InputLabelProps={
          variantStyle === 'boxed' ? { shrink: true } : undefined
        }
        InputProps={
          variantStyle === 'boxed' && copyable
            ? {
                endAdornment: (
                  <InputAdornment position='end'>
                    <IconButton onClick={handleCopy} edge='end'>
                      <img
                        src={copyIcon}
                        alt='copy'
                        style={{ width: 16, height: 16 }}
                      />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </Box>
  );
};

export default CustomInput;
