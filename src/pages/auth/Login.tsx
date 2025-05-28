import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { type LoginFormInputs, loginSchema } from '../../utils/validation';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormInputs) => {
    console.log('Form data:', data);
  };

  return (
    <Box sx={{ py: 6 }}>
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
            px: 1,
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

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton
              type='submit'
              variant='primary'
              sx={{
                ml: 2,
                textTransform: 'none',
                px: 3,
                height: '36px',
              }}
            >
              Login
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
