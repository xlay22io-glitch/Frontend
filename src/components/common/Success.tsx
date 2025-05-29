import { Box, Typography } from '@mui/material';
import successIcon from '../../assets/icons/checked-green-icon.png';

type SuccessProps = {
  successText: string;
};

const Success = ({ successText }: SuccessProps) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box component='img' src={successIcon} alt='Success Icon' />
      </Box>
      <Typography sx={{ textAlign: 'center', color: 'white', fontWeight: 400 }}>
        {successText}
      </Typography>
    </Box>
  );
};

export default Success;
