import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography
} from '@mui/material';

const CheckOut = () => {
  return (
    <>
      <Stack direction="row" ml={'5%'} spacing={'4%'} width={'90%'}>
        <Stack width={'48%'} alignItems={'start'}>
          <Typography variant="h5" pb={1} justifyContent={'left'}>
            Your Name
          </Typography>
          <Stack spacing={'4%'} direction="row" marginBottom={'15px'} width={'100%'}>
            <Stack width={'48%'}>
              <TextField height="75px" id="outlined-required" placeholder="First name" />
            </Stack>
            <Stack width={'48%'}>
              <TextField height="75px" width="48%" id="outlined-required" placeholder="Last name" />
            </Stack>
          </Stack>
          <Stack direction={'column'} alignItems={'start'} width={'100%'}>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Company Name
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Company Name" />
            </Stack>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Your Country
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Your Country" />
            </Stack>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Town / City
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Town / City" />
            </Stack>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Province
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Provinces" />
            </Stack>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Street Adress
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Street Adress" />
            </Stack>
            <Typography variant="h5" pb={1} justifyContent={'left'}>
              Phone Number
            </Typography>
            <Stack pb={'15px'} width={'100%'}>
              <TextField height="75px" id="outlined-required" placeholder="Phone Number" />
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'48%'} spacing={4}>
          <Stack direction={'row'} justifyContent={'space-between'}></Stack>
          <Stack>
            <FormControl conponent={Stack} justifyContent={'start'}>
              <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
              <RadioGroup
                sx={{ fontSize: 5 }}
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="tranfer"
                name="radio-buttons-group">
                <FormControlLabel
                  value="tranfer"
                  control={<Radio />}
                  label="Direct Bank Transfer"
                />
                <Typography variant="h5" fontWeight={'300'} align="justify" fontSize={'16px'}>
                  Make your payment directly into our bank account. Please use your Order ID as the
                  payment reference. Your order will not be shipped until the funds have cleared in
                  our account.
                </Typography>
                <FormControlLabel value="cash" control={<Radio />} label="Cash On Delivery" />
                <Typography variant="h5" fontWeight={'300'} align="justify" fontSize={'16px'}>
                  Your personal data will be used to support your experience throughout this
                  website, to manage access to your account, and for other purposes described in our
                  privacy policy.
                </Typography>
              </RadioGroup>
            </FormControl>
          </Stack>
          <Stack mt={'40px'} alignItems={'center'}>
            <Button variant="outlined" sx={{ borderRadius: '8px' }}>
              <Typography sx={{ padding: '10px 90px' }}>Place order</Typography>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default CheckOut;
