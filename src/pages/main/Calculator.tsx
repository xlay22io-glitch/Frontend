import { useEffect, useRef } from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useCalculator } from '../../hooks/lay-hook';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  calculatorSchema,
  type CalculatorFormInputs,
} from '../../utils/validation';
import { useAccountInfo } from '../../hooks/auth-hook';
import logo from '../../assets/icons/logo.png';
import uploadIcon from '../../assets/icons/upload-icon.png';

const Calculator = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<CalculatorFormInputs>({
    resolver: zodResolver(calculatorSchema),
  });

  const totalOdd = watch('total_odd');
  const stakeAmount = watch('stake_amount');
  const file = watch('file');

  const { data, isPending: isAccPending } = useAccountInfo();

  useEffect(() => {
    const odd = parseFloat(totalOdd);
    const stake = parseFloat(stakeAmount);
    const result =
      !isNaN(odd) && !isNaN(stake) ? (odd * stake).toFixed(8) : '0.00000000';
    setValue('win_payout', result);
  }, [totalOdd, stakeAmount, setValue]);

  const { mutate: calculatorMutate, isPending } = useCalculator();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPicture = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = (data: CalculatorFormInputs) => {
    const payload = new FormData();
    payload.append('total_odd', data.total_odd);
    payload.append('stake_amount', data.stake_amount);
    payload.append('win_payout', data.win_payout);
    if (data.file) {
      payload.append('file', data.file);
    }
    payload.append('all_data_true', String(data.all_data_true));

    calculatorMutate(payload);
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
      <Typography
        sx={{
          color: (theme) => theme.palette.customColors.deadGray,
          fontWeight: 600,
          fontSize: '16px',
          mb: 5,
        }}
      >
        Balance:{' '}
        <Typography
          component='span'
          sx={{ color: 'white', fontSize: '16px', fontWeight: 600 }}
        >
          {isAccPending ? (
            <Typography
              component='span'
              sx={{ color: 'white', fontSize: '14px', fontWeight: 600 }}
            >
              Loading...
            </Typography>
          ) : (
            <Typography
              component='span'
              sx={{ color: 'white', fontSize: '16px', fontWeight: 600 }}
            >
              {data?.balance || 0} BTC
            </Typography>
          )}
        </Typography>
      </Typography>

      <Box
        component='form'
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            maxWidth: '616px',
            width: '100%',
            border: (theme) => `1px solid ${theme.palette.customColors.carbon}`,
            borderRadius: '20px',
            backgroundColor: (theme) => theme.palette.customColors.smoothGray,
            px: 2,
            py: 4,
          }}
        >
          <Box sx={{ maxWidth: '348px', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flex: 1,
                mb: 5,
                justifyContent: 'center',
              }}
            >
              <Box
                component='img'
                src={logo}
                alt='Logo icon'
                sx={{
                  width: '16px',
                  height: '16px',
                }}
              />
              <Typography
                variant='h6'
                sx={{
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '18px',
                  lineHeight: '24px',
                  letterSpacing: '0px',
                  ml: 1,
                }}
              >
                TradeLayback
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <CustomInput
                label='TOTAL ODD'
                variantStyle='boxed'
                placeholder='0.00'
                {...register('total_odd')}
              />
              {errors.total_odd && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: -1 }}>
                  {errors.total_odd.message}
                </Typography>
              )}
              <CustomInput
                label='STAKE AMOUNT'
                variantStyle='boxed'
                placeholder='0.00'
                {...register('stake_amount')}
              />
              {errors.stake_amount && (
                <Typography sx={{ color: 'red', fontSize: '12px', mt: -1 }}>
                  {errors.stake_amount.message}
                </Typography>
              )}
            </Box>

            <Box
              sx={{
                borderRadius: '20px',
                backgroundColor: (theme) => theme.palette.customColors.carbon,
                my: 4,
                p: 5,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 0.5,
              }}
            >
              <Typography
                sx={{ fontWeight: 700, fontSize: '12px', color: '#B3B3B3' }}
              >
                WIN PAYOUT
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  fontSize: '24px',
                  color: (theme) => theme.palette.primary.main,
                }}
              >
                {watch('win_payout') || '0.000000'} BTC
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'start',
                  gap: 1,
                }}
              >
                <input
                  type='file'
                  accept='image/*'
                  ref={fileInputRef}
                  onChange={(e) => {
                    const selectedFile = e.target.files?.[0];
                    if (selectedFile) {
                      setValue('file', selectedFile);
                    }
                  }}
                  style={{ display: 'none' }}
                />

                <Box
                  onClick={uploadPicture}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                  }}
                >
                  <Box component='img' src={uploadIcon} alt='Upload Icon' />
                  <Typography
                    sx={{ fontWeight: 600, fontSize: '14px', color: '#909A9F' }}
                  >
                    {file ? file.name : 'Screen of your original lay'}
                  </Typography>
                </Box>
                {errors.file && (
                  <Typography sx={{ color: 'red', fontSize: '12px' }}>
                    {errors.file.message}
                  </Typography>
                )}

                <FormControlLabel
                  control={
                    <Checkbox
                      {...register('all_data_true')}
                      sx={{
                        color: '#909A9F',
                        '&.Mui-checked': {
                          color: '#909A9F',
                        },
                        '& .MuiSvgIcon-root': {
                          fontSize: 24,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        color: '#909A9F',
                        fontWeight: 600,
                        fontSize: '14px',
                      }}
                    >
                      All data is true and correct
                    </Typography>
                  }
                />
                {errors.all_data_true && (
                  <Typography sx={{ color: 'red', fontSize: '12px', mt: -1.5 }}>
                    {errors.all_data_true.message}
                  </Typography>
                )}
              </Box>
            </Box>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <CustomButton
                type='submit'
                disabled={isPending}
                variant='primary'
                sx={{ px: 3 }}
              >
                {isPending ? 'Submitting...' : 'Back your lay'}
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
