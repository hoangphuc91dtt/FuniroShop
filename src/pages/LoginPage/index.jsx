import { useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { Button } from '@mui/material';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    const token =
      'ecNx3WksHMPMG9UH5NqTE-g9sD=hihsTpfiRDfLP8HYtzndfEHpv?01GaOvqn2bSQz27Ned7wOPsYVCKtmb3bRmIyb=JToNHz6!yx=YfUK';

    localStorage.setItem('token', JSON.stringify(token));
    navigate(SCREEN_URL.HOME);
  };

  return (
    <div>
      <p>This is Login Page</p>
      <Button variant="contained" color="gray" onClick={handleLogin}>
        <p className="child">Click here to login</p>
      </Button>
    </div>
  );
};

export default LoginPage;
