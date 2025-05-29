import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Success from '../../components/common/Success';
import { useVerifyEmail } from '../../hooks/auth-hook';

const EmailSuccess = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const uid = searchParams.get('uid');
  const token = searchParams.get('token');

  const { mutate: verifyEmail } = useVerifyEmail();

  useEffect(() => {
    if (uid && token) {
      verifyEmail(
        { uid, token },
        {
          onSuccess: () => {
            navigate('/login');
          },
        }
      );
    }
  }, [uid, token, verifyEmail, navigate]);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', py: 6, px: 2 }}>
      <Success successText='Account was succesfully verified' />
    </Box>
  );
};

export default EmailSuccess;
