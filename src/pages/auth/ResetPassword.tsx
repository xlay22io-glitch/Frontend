import { useSearchParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  type ResetPasswordFormInputs,
  resetPasswordSchema,
} from '../../utils/validation';
import { useResetPassword } from '../../hooks/auth-hook';

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const uid = searchParams.get('uid');
  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate: resetPassword, isPending } = useResetPassword();

  const onSubmit = (data: ResetPasswordFormInputs) => {
    if (uid && token) {
      resetPassword({ ...data, uid, token });
    }
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
            px: 2,
          }}
        >
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
              {isPending ? 'Submitting...' : 'Submit'}
            </CustomButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
