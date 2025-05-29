import { useRef, useState } from 'react';
import { Box, Typography, Checkbox, FormControlLabel } from '@mui/material';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import logo from '../../assets/icons/logo.png';
import uploadIcon from '../../assets/icons/upload-icon.png';

const Calculator = () => {
  const [agreed, setAgreed] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const uploadPicture = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
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
          0.0000125 BTC
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
                placeholder='0,00'
              />
              <CustomInput
                label='STAKE AMOUNT'
                variantStyle='boxed'
                placeholder='0,00'
              />
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
                0,000000 BTC
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
                  onChange={handleFileChange}
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
                    {uploadedFile
                      ? uploadedFile.name
                      : 'Screen of your original lay'}
                  </Typography>
                </Box>

                <FormControlLabel
                  control={
                    <Checkbox
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
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
              </Box>
            </Box>

            <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
              <CustomButton variant='primary' sx={{ px: 3 }}>
                Back your lay
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Calculator;
