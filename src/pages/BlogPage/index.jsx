import { Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SellIcon from '@mui/icons-material/Sell';
import SearchIcon from '@mui/icons-material/Search';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
import img7 from '../../assets/7.png';
import img8 from '../../assets/8.png';

const BlogPage = () => {
  const [isActiveBtn, setIsActiveBtn] = useState('btn1');

  return (
    <Stack padding={5}>
      <Stack direction="row" gap={10}>
        <Stack width="64%">
          <Stack direction="row" pb={3} width="100%" className="fsdfadsf">
            <img src={img1} alt="" width={'100%'} />
          </Stack>
          <Stack direction="row" gap={1} pb={3}>
            <Stack direction="row" gap={1}>
              <Stack>
                <PersonIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">Admin</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack>
                <CalendarMonthIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">14 Oct 2022</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={3}>
              <SellIcon />
            </Stack>
            <Stack>
              <Typography variant="h2 ">Wood</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={20} pb={3}>
              <Typography variant="h1" fontSize={30}>
                Going all-in with millennial design
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" pb={3}>
              {' '}
              <Typography variant="h3 " width="100%">
                {' '}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus
                mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices
                neque ornare aenean euismod elementum.
              </Typography>
            </Stack>
          </Stack>

          <Stack alignItems={'end'} pb={3}>
            <Button variant="outlined">Read more</Button>
          </Stack>
          <Stack direction="row" spacing={20} pb={3}>
            <img src={img2} alt="" width={'100%'} />
          </Stack>
          <Stack direction="row" gap={1} pb={3}>
            <Stack direction="row" gap={1}>
              <Stack>
                <PersonIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">Admin</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack>
                <CalendarMonthIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">14 Oct 2022</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={3}>
              <SellIcon />
            </Stack>
            <Stack>
              <Typography variant="h2 ">Handmade</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={20} pb={3}>
              {' '}
              <Typography variant="h1" fontSize={30}>
                Exploring new ways of decorating
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={20} pb={3}>
              <Typography variant="h3 " width="100%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus
                mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices
                neque ornare aenean euismod elementum.
              </Typography>
            </Stack>
          </Stack>

          <Stack alignItems={'end'} pb={3}>
            <Button variant="outlined">Read more</Button>
          </Stack>
          <Stack direction="row" spacing={20} pb={3}>
            <img src={img3} alt="" width={'100%'} />
          </Stack>

          <Stack direction="row" gap={1} pb={3}>
            <Stack direction="row" gap={1}>
              <Stack>
                <PersonIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">Admin</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={1}>
              <Stack>
                <CalendarMonthIcon />
              </Stack>
              <Stack>
                <Typography variant="h2 ">14 Oct 2022</Typography>
              </Stack>
            </Stack>
            <Stack direction="row" gap={3}>
              <SellIcon />
            </Stack>
            <Stack>
              <Typography variant="h2 ">Wood</Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={20} pb={3}>
              <Typography variant="h1" fontSize={30}>
                Handmade pieces that took time to make
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Stack>
              <Typography variant="h3 " width="100%">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer
                malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus
                risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus
                mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit
                libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices
                neque ornare aenean euismod elementum.
              </Typography>
            </Stack>
          </Stack>
          <Stack alignItems={'end'} pb={3}>
            <Button variant="outlined">Read more</Button>
          </Stack>
        </Stack>
        <Stack width="36%">
          <Stack spacing={20} pb={6}>
            <Stack direction="row" spacing={2} alignItems="center">
              <TextField
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <a href="">
                        {' '}
                        <SearchIcon />
                      </a>
                    </InputAdornment>
                  )
                }}
              />
              {/* Thêm các thành phần khác tại đây nếu cần */}
            </Stack>
          </Stack>
          <Stack>
            <Stack direction="row" spacing={20} pb={3} pl={5}>
              <Typography variant="h1" fontSize={30}>
                Categories
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={15} pb={3} pl={5} width={100}>
            <Stack>
              <Typography variant="h5 ">Crafts</Typography>
            </Stack>
            <Stack>
              <Typography variant="h5 ">2</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={14} pb={3} pl={5} width={100}>
            <Stack>
              <Typography variant="h5 ">Design</Typography>
            </Stack>
            <Stack>
              <Typography variant="h5 ">8</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={11} pb={3} pl={5} width={100}>
            <Stack>
              <Typography variant="h5 ">Handmade</Typography>
            </Stack>
            <Stack>
              <Typography variant="h5 ">7</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={14} pb={3} pl={5} width={100}>
            <Stack>
              <Typography variant="h5 ">Interior</Typography>
            </Stack>
            <Stack>
              <Typography variant="h5 ">1</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" spacing={15} pb={3} pl={5} width={100}>
            <Stack>
              <Typography variant="h5 ">Wood</Typography>
            </Stack>
            <Stack>
              <Typography variant="h5 ">6</Typography>
            </Stack>
          </Stack>
          <Stack pl={5} pb={3}>
            <Typography variant="h1" fontSize={30}>
              Recent Posts
            </Typography>
          </Stack>
          <Stack direction="row" gap={2} width="400px" pb={5} pl={5}>
            <img src={img4} alt="" />
            <Stack>
              <Typography variant="h3" fontSize={22}>
                Going all-in with millennial design
              </Typography>
              <Typography variant="h3 " fontSize={14}>
                03 Aug 2022
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} width="400px" pb={5} pl={5}>
            <img src={img5} alt="" />
            <Stack>
              <Typography variant="h3" fontSize={22}>
                Exploring new ways of decorating
              </Typography>
              <Typography variant="h3 " fontSize={14}>
                03 Aug 2022
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} width="400px" pb={5} pl={5}>
            <img src={img6} alt="" />
            <Stack>
              <Typography variant="h3" fontSize={22}>
                Handmade pieces that took time to make
              </Typography>
              <Typography variant="h3 " fontSize={14}>
                03 Aug 2022
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} width="400px" pb={5} pl={5}>
            <img src={img7} alt="" />
            <Stack>
              <Typography variant="h3" fontSize={22}>
                Modern home in Milan
              </Typography>
              <Typography variant="h3 " fontSize={14}>
                03 Aug 2022
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={2} width="400px" pb={5} pl={5}>
            <img src={img8} alt="" />
            <Stack>
              <Typography variant="h3" fontSize={22}>
                Colorful office redesign
              </Typography>
              <Typography variant="h3 " fontSize={14}>
                03 Aug 2022
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent={'center'} gap={4} width="100%">
        <Stack mt={2}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: `${isActiveBtn == 'btn1' ? '#B88E2F' : '#F9F1E7'}`,
              color: `${isActiveBtn == 'btn1' ? 'white' : 'black'}`
            }}
            sx={{ width: '40px', height: '40px', minWidth: '0px' }}>
            1
          </Button>
        </Stack>
        <Stack mt={2}>
          <Button
            variant="contained"
            bgcolor="#F9F1E7"
            style={{
              backgroundColor: `${isActiveBtn == 'btn2' ? '#B88E2F' : '#F9F1E7'}`,
              color: `${isActiveBtn == 'btn2' ? 'white' : 'black'}`
            }}
            sx={{ width: '40px', height: '40px', minWidth: '0px' }}>
            2
          </Button>
        </Stack>
        <Stack mt={2}>
          <Button
            variant="contained"
            bgcolor="#F9F1E7"
            style={{
              backgroundColor: `${isActiveBtn == 'btn3' ? '#B88E2F' : '#F9F1E7'}`,
              color: `${isActiveBtn == 'btn3' ? 'white' : 'black'}`
            }}
            sx={{ width: '40px', height: '40px', minWidth: '0px' }}>
            3
          </Button>
        </Stack>
        <Stack mt={2}>
          <Button
            variant="contained"
            bgcolor="#F9F1E7"
            style={{
              backgroundColor: `${isActiveBtn == 'next' ? '#B88E2F' : '#F9F1E7'}`,
              color: `${isActiveBtn == 'next' ? 'white' : 'black'}`
            }}
            sx={{ width: '100px', height: '40px', minWidth: '0px' }}>
            Next
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BlogPage;
