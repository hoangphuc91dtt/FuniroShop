import { Box, Button, Stack, TextField, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Stack p={'38px 100px'}>
      <Stack direction={'column'}>
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          py={'48px'}
          borderBottom={'1px solid #9F9F9F'}>
          <Stack spacing={4} width={'30%'}>
            <Typography paddingBottom={'20px'} variant="h1">
              Funiro.
            </Typography>
            <Stack spacing={2}>
              <Typography variant="tbody1" color={'#9F9F9F'}>
                400 University Drive Suite 200 Coral Gables .
              </Typography>
              <Typography variant="tbody1" color={'#9F9F9F'}>
                FL 33134 USA
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={4} width={'20%'}>
            <Typography variant="h2" fontSize={'16px'} color={'#9F9F9F'} paddingBottom={'20px'}>
              Links
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Home
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Shop
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              About
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Contact
            </Typography>
          </Stack>
          <Stack spacing={4} width={'20%'}>
            <Typography variant="h2" fontSize={'16px'} color={'#9F9F9F'} paddingBottom={'20px'}>
              Help
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Payment Options
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Returns
            </Typography>
            <Typography variant="h2" fontSize={'16px'}>
              Privacy Policies
            </Typography>
          </Stack>
          <Stack spacing={4} width={'30%'}>
            <Typography variant="h2" fontSize={'16px'} color={'#9F9F9F'} paddingBottom={'20px'}>
              Newsletter
            </Typography>
            <Stack direction={'row'} spacing={1}>
              <TextField id="standard-basic" label="Enter Your Email Address" variant="standard" />
              <Button variant="outlined">SUBSCRIBE</Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack py={'35px '}>2023 furino. All rights reverved </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
