import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type RegisterFormInputs,
  registerSchema,
} from '../../utils/validation';
import { useRegister } from '../../hooks/auth-hook';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate: registerUser, isPending } = useRegister();

  const onSubmit = (data: RegisterFormInputs) => {
    registerUser(data);
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
              type='submit'
              variant='primary'
              disabled={isPending}
              sx={{
                ml: 2,
                textTransform: 'none',
                px: 3,
                height: '36px',
              }}
            >
              {isPending ? 'Registering...' : 'Register'}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Register;
