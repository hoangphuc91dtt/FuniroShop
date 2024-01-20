import { Stack, Typography } from '@mui/material';
import React from 'react';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Banner = ({ title }) => {
  return (
    <div>
      <Stack position={'relative'}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705856522/banner_ypqxce.png"
          alt=""
          width={'100%'}
        />
        <Stack
          spacing={2}
          sx={{
            position: 'absolute',
            flexDirection: 'column',
            alignItems: 'stretch',
            transform: 'translate(-50%, -20%)',
            transition: '.3s',
            top: '50%',
            left: '50%'
          }}>
          <Typography variant="h2" fontSize={'48px'}>
            {title}
          </Typography>
          <Stack direction={'row'} justifyContent={'center'}>
            <Typography variant="h5">Home</Typography>
            <NavigateNextIcon></NavigateNextIcon>
            <Typography variant="h5">{title}</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default Banner;
