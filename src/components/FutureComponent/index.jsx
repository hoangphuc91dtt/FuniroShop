import { Button, Stack, Typography } from '@mui/material';
import React from 'react';

const FutureComponent = () => {
  return (
    <div>
      <Stack
        bgcolor={'#FAF3EA'}
        p={'100px 60px'}
        direction={'row'}
        justifyContent={'space-between'}>
        <Stack direction={'row'} spacing={1}>
          <Stack>
            <img
              src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705688172/trophyIcon_fm0wll.png"
              alt=""
            />
          </Stack>
          <Stack direction={'column'} spacing={1}>
            <Typography variant="h2" fontSize={26}>
              High Quality
            </Typography>
            <Typography variant="body2" fontSize={20} color={'#898989'}>
              crafted from top materials
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Stack>
            <img
              src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705688234/guaranteeIcon_ufuafm.png"
              alt=""
            />
          </Stack>
          <Stack direction={'column'} spacing={1}>
            <Typography variant="h2" fontSize={26}>
              Warranty Protection
            </Typography>
            <Typography variant="h2" fontSize={20}>
              Over 2 years
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Stack>
            <img
              src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705688232/shippingIcon_jyk15g.png"
              alt=""
            />
          </Stack>
          <Stack direction={'column'} spacing={1}>
            <Typography variant="h2" fontSize={26}>
              Free Shipping
            </Typography>
            <Typography variant="body2" fontSize={20} color={'#898989'}>
              Order over 150 $
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={'row'} spacing={1}>
          <Stack>
            <img
              src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705688231/customerIcon_xicnz3.png"
              alt=""
            />
          </Stack>
          <Stack direction={'column'} spacing={1}>
            <Typography variant="h2" fontSize={26}>
              24 / 7 Support
            </Typography>
            <Typography variant="body2" fontSize={20} color={'#898989'}>
              Dedicated support
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default FutureComponent;
