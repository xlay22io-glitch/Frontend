import { Box, Link, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginFormInputs, loginSchema } from '../../utils/validation';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../hooks/auth-hook';

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate: loginUser, isPending } = useLogin();

  const onSubmit = (data: LoginFormInputs) => {
    loginUser(data);
  };

  return (
    <Box
      sx={{
        py: 6,
        px: 6,
        '@media (max-width: 900px)': {
          px: 4,
        },
        '@media (max-width: 640px)': {
          px: 2,
          py: 4,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: '332px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <Box>
            <CustomInput label='Email' {...register('email')} />
            {errors.email && (
              <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                {errors.email.message}
              </Typography>
            )}
          </Box>

          <Box>
            <CustomInput
              label='Password'
              type='password'
              {...register('password')}
            />
            {errors.password && (
              <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                {errors.password.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <Link
              onClick={() => navigate('/forgot-password')}
              sx={{
                color: '#B7B8BB',
                textDecoration: 'none',
                cursor: 'pointer',

                '&:hover': {
                  textDecoration: 'underline',
                },
              }}
            >
              Forgot password?
            </Link>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton
              type='submit'
              variant='primary'
              disabled={isPending}
              sx={{
                ml: 2,
                textTransform: 'none',
                px: 4,
                height: '36px',
              }}
            >
              {isPending ? 'Logging in...' : 'Login'}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
