import { Button } from '@mui/material';
import { styled } from '@mui/system';

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#2C3878',
  py: '14px',
  px: '32px',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#2C3878',
  },
  width: '100px',
  textTransform: 'capitalize',
  '&.Mui-disabled': {
    backgroundColor: '#2C3878 !important',
  },
}));

export default PrimaryButton;