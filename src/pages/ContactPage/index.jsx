import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FutureComponent from '../../components/FutureComponent';

const ContactPage = () => {
  return (
    <Stack>
      <Stack p={4} width="60%" m="0 auto">
        <Stack py={5}>
          <Typography variant="h1" align="center">
            Get In Touch With Us
          </Typography>

          <Typography variant="body2" align="center" color="gray">
            For More Information About Our Product & Services. Please Feel Free To Drop Us
            <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </Typography>
        </Stack>
        <Stack direction="row" justifyContent="center" width="100%" gap={4}>
          <Stack gap={4} width="400px">
            <Stack direction="row" gap={2}>
              <LocationOnIcon />
              <Stack>
                <Typography variant="h2" fontSize={20}>
                  Address
                </Typography>
                <Typography variant="h5" fontSize={'14px'}>
                  236 5th SE Avenue, New
                </Typography>
                <Typography variant="h5" fontSize={'14px'}>
                  York NY10000, United{' '}
                </Typography>
                <Typography variant="h5" fontSize={'14px'}>
                  States
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={2}>
              <PhoneIcon />
              <Stack>
                <Typography variant="h2" fontSize={20} mt="4">
                  Phone
                </Typography>
                <Typography variant="h5" fontSize={'14px'}>
                  Mobile: +(84) 546-6789
                </Typography>
                <Typography variant="h5" fontSize={'14px'}>
                  Hotline: +(84) 456-6789
                </Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={2}>
              <AccessTimeFilledIcon />
              <Stack>
                <Typography variant="h2" fontSize={20} mt="4">
                  Working Time
                </Typography>
                <Typography variant="h5" fontSize={14}>
                  Monday-Friday: 9:00 -
                </Typography>
                <Typography variant="h5" fontSize={14}>
                  22:00
                </Typography>
                <Typography variant="h5" fontSize={14}>
                  Saturday-Sunday: 9:00 -
                </Typography>
                <Typography variant="h5" fontSize={14}>
                  21:00
                </Typography>
              </Stack>
            </Stack>
          </Stack>

          <Stack width="100%" gap={2}>
            <Stack width="100%">
              <Typography variant="h2" fontSize={16} pb={2}>
                Your name
              </Typography>
              <TextField required id="outlined-required" placeholder="Abc" />
            </Stack>
            <Stack width="100%">
              <Typography variant="h2" fontSize={16} pb={2}>
                Email address
              </Typography>
              <TextField required id="outlined-required" placeholder="Abc@def.com" />
            </Stack>
            <Stack width="100%">
              <Typography variant="h2" fontSize={16} pb={2}>
                Subject
              </Typography>
              <TextField required id="outlined-required" placeholder="This is an optional" />
            </Stack>
            <Stack width="100%">
              <Typography variant="h2" fontSize={16} pb={2}>
                Message
              </Typography>
              <TextField required id="outlined-required" placeholder="Hi! i'd like to ask about" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <FutureComponent />
    </Stack>
  );
};

export default ContactPage;
