import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type RegisterFormInputs,
  registerSchema,
} from '../../utils/validation';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInputs) => {
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

          <Box>
            <CustomInput
              label='Confirm Password'
              type='password'
              {...register('confirm_password')}
            />
            {errors.confirm_password && (
              <Typography sx={{ color: 'red', fontSize: '12px', mt: 0.5 }}>
                {errors.confirm_password.message}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomButton
              component='button'
              type='submit'
              variant='primary'
              sx={{
                ml: 2,
                textTransform: 'none',
                px: 3,
                height: '36px',
              }}
              to={''}
            >
              Register
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
