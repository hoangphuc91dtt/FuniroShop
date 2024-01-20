import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { IconButton, Stack, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Furniro from '../../assets/Furniro.png';
import { SCREEN_URL } from '../../constants/screenUrls';
import { APP_COLORS } from '../../themes';

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack
      height={100}
      direction={'row'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p="30px 54px">
      <Stack spacing={1} direction={'row'}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705686547/House_Logos_qmtfkd.png"
          alt="homeLogo"
        />
        <img src={Furniro} alt="Furniro" />
      </Stack>
      <Stack justifyContent={'center'}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="transparent"
          sx={{
            '& .MuiTabs-flexContainer': { gap: 1 },
            '.MuiButtonBase-root.Mui-selected': {
              fontWeight: 900,
              textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              color: APP_COLORS.black.main
            }
          }}>
          <Tab label="Home" component={Link} to={SCREEN_URL.HOME} />
          <Tab label="Shop" component={Link} to={SCREEN_URL.SHOP} />
          <Tab label="About" component={Link} to={SCREEN_URL.ABOUT} />
          <Tab label="Contact" component={Link} to={SCREEN_URL.CONTACT} />
        </Tabs>
      </Stack>
      <Stack direction={'row'} gap={3}>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
