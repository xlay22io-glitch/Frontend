import { TextField, type TextFieldProps, Box } from '@mui/material';
import { alpha, styled } from '@mui/system';

type CustomInputProps = TextFieldProps & {
  label?: string;
};

const StyledInput = styled(TextField)(({ theme }) => ({
  borderRadius: '50px',
  backgroundColor: '#1E2123',
  '& .MuiOutlinedInput-root': {
    padding: '0 4px',
    borderRadius: '50px',
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
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputLabel-shrink': {
    transform: 'translate(20px, -8px) scale(0.75)',
  },
  '& input::placeholder': {
    color: '#C1C2C5',
    opacity: 1,
  },
}));

const CustomInput = ({ label, ...props }: CustomInputProps) => {
  return (
    <Box sx={{ width: '100%' }}>
      <StyledInput
        {...props}
        variant='outlined'
        fullWidth
        placeholder={label}
        InputLabelProps={{ shrink: false }}
      />
    </Box>
  );
};

export default CustomInput;
