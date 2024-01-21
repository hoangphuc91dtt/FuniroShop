import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import {
  Button,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';

const ProductPage = () => {
  return (
    <Stack padding={'20px'} gap={0}>
      <Stack
        // width={'98%'}
        direction="row"
        gap={5}
        sx={{
          marginLeft: '20px',
          padding: '30px',
          display: 'flex',
          justifyContent: 'space-between'
        }}>
        <Stack width={'20%'}>
          <Typography
            sx={{
              padding: '20px',
              fontFamily: 'Poppins',
              fontSize: '28px',
              fontWeight: 500,
              lineHeight: '35px',
              letterSpacing: '0em',
              textAlign: 'left'
            }}>
            Go to Product page for more Products
          </Typography>
          <Button
            sx={{
              px: '20px',
              justifyContent: 'start',
              color: '#727272',
              textDecoration: 'underline',
              textAlign: 'left'
            }}>
            View more
          </Button>
        </Stack>
        <Stack width={'50%'}>
          <Stack flex="1" direction="row" justifyContent={'space-between'} gap={8}>
            <Stack
              sx={{
                width: '50%',
                height: '300px'
                // backgroundColor: 'red'
              }}>
              <Stack
                sx={{ width: '280px', height: '177px', bgcolor: '#F9F1E7', borderRadius: '10px' }}>
                <img
                  src="https://res.cloudinary.com/dvujrq61r/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1705683975/SingleImage05_zs2bdj.jpg?_s=public-apps"
                  alt="Error"
                  style={{
                    borderRadius: '5px'
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  margin: '10px 0px',
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0em',
                  textAlign: 'left'
                }}>
                Asgaard Sofa
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  margin: '10px 0px',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '27px',
                  letterSpacing: '0em',
                  textAlign: 'left'
                }}>
                Rs. 250,000.00
              </Typography>
              <Stack direction="row" marginLeft={0} sx={{ alignItems: 'start' }}>
                <Typography
                  sx={{
                    margin: '0px',
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}>
                  4.7
                </Typography>
                <Stack direction="row" sx={{ color: '', marginRight: '10px' }}>
                  {/* stars */}
                </Stack>
                <Typography
                  sx={{
                    margin: '0px',
                    paddingLeft: '10px',
                    // MarginRight: '10px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    letterSpacing: '0em',
                    borderLeft: '1px solid black',
                    color: '#9F9F9F',
                    fontSize: '13px',
                    fontStyle: 'normal',
                    lineHeight: 'normal'
                  }}>
                  204 Review
                </Typography>
              </Stack>
            </Stack>

            <Stack
              sx={{
                width: '50%',
                height: '300px'
                // backgroundColor: 'red'
              }}>
              <Stack
                sx={{ width: '280px', height: '177px', bgcolor: '#F9F1E7', borderRadius: '10px' }}>
                <img
                  src="https://res.cloudinary.com/dvujrq61r/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1705683975/SingleImage05_zs2bdj.jpg?_s=public-apps"
                  alt=""
                  style={{
                    objectFit: 'cover',
                    height: '166PX'
                  }}
                />
              </Stack>

              <Typography
                sx={{
                  margin: '10px 0px',
                  fontFamily: 'Poppins',
                  fontSize: '24px',
                  fontWeight: '500',
                  lineHeight: '30px',
                  letterSpacing: '0em',
                  textAlign: 'left'
                }}>
                Asgaard Sofa
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Poppins',
                  margin: '10px 0px',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '27px',
                  letterSpacing: '0em',
                  textAlign: 'left'
                }}>
                Rs. 250,000.00
              </Typography>
              <Stack direction="row" sx={{ alignItems: 'start' }}>
                <Typography
                  sx={{
                    margin: '0px',
                    color: '#000',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '18px',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    lineHeight: 'normal'
                  }}>
                  4.7
                </Typography>
                <Stack direction="row" sx={{ color: 'yellow', marginRight: '10px' }}>
                  {/* stars */}
                </Stack>
                <Typography
                  sx={{
                    margin: '0px',
                    paddingLeft: '10px',
                    // MarginRight: '10px',
                    fontFamily: 'Poppins',
                    fontWeight: 400,
                    letterSpacing: '0em',
                    borderLeft: '1px solid black',
                    color: '#9F9F9F',
                    fontSize: '13px',
                    fontStyle: 'normal',
                    lineHeight: 'normal'
                  }}>
                  204 Review
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack width={'25%'}></Stack>
      </Stack>

      <Stack padding={'32px'}>
        <TableContainer component={Paper} style={{ borderBottom: 'none', boxShadow: 'none' }}>
          <Table style={{ borderBottom: 'none' }}>
            <TableHead>
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderTop: '1px solid #ddd',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '35px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}>
                  General
                </TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderTop: '1px solid #ddd',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderTop: '1px solid #ddd',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderTop: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '25px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Sales Package
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  1 sectional sofa
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  1 Three Seater, 2 Single Seater
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Model Number
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  TFCBLIGRBL6SRHS
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  DTUBLIGRBL568
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Secondary Material
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Solid Wood
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Solid Wood
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Configuration
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  L-shaped
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  L-shaped
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Upholstery Material
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Fabric + Cotton
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Fabric + Cotton
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Upholstery Color
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Bright Grey & Lion
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Bright Grey & Lion
                </TableCell>
                <TableCell
                  style={{ paddingLeft: '62px', width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell
                  style={{
                    width: '25%',
                    paddingLeft: '62px',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '35px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}>
                  Product
                </TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderBottom: 'none'
                  }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                paddingLeft: '62px',
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '25px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Filling Material
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Foam
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Matte
                </TableCell>
                <TableCell
                  style={{ paddingLeft: '62px', width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Finish Type
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Bright Grey & Lion
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Bright Grey & Lion
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Adjustable Headrest
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  No
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  yes
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Maximum Load Capacity
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  280 KG
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  300 KG
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Origin of Manufacture
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  India
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  India
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell
                  style={{
                    width: '25%',
                    paddingLeft: '62px',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '35px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}>
                  Dimensions
                </TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderBottom: 'none'
                  }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '25px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Width
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  265.32 cm
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  265.32 cm
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Height
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  76 cm
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  76 cm
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Depth
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  167.76 cm
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  167.76 cm
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Maximum Load Capacity
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  280 KG
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  300 KG
                </TableCell>
                <TableCell
                  style={{ paddingLeft: '62px', width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Origin of Manufacture
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  India
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  India
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
            </TableBody>
            <TableHead>
              <TableRow sx={{ borderBottom: 'none' }}>
                <TableCell
                  style={{
                    width: '25%',
                    paddingLeft: '62px',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    fontFamily: 'Poppins',
                    fontSize: '28px',
                    fontWeight: 500,
                    lineHeight: '35px',
                    letterSpacing: '0em',
                    textAlign: 'left'
                  }}>
                  Warranty
                </TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    width: '25%',

                    borderBottom: 'none'
                  }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                fontFamily: 'Poppins',
                fontSize: '20px',
                fontWeight: 400,
                lineHeight: '25px',
                letterSpacing: '0em',
                textAlign: 'left'
              }}>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Warranty Summary
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  1 Year Manufacturing Warranty
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  1.2 Year Manufacturing Warranty
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Warranty Service Type
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  For Warranty Claims or Any Product Related Issues Please Email at
                  operations@trevifurniture.com
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Adjustable Headrest
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  No
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  yes
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Covered in Warranty
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Warranty Against Manufacturing Defect
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Warranty of the product is limited to manufacturing defects only.
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Not Covered in Warranty
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its
                  Intended Use And Wear & Tear In The Natural Course Of Product Usage.
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its
                  Intended Use And Wear & Tear In The Natural Course Of Product Usage.
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  Domestic Warranty
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  1 Year
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}>
                  3 Months
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  style={{
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none'
                  }}></TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    textAlign: 'left'
                  }}>
                  <Button
                    sx={{
                      border: '1px solid var(--Primary, #B88E2F)',
                      background: 'var(--Primary, #B88E2F)',
                      padding: '20px 58px',
                      borderRadius: '0px',

                      color: '#FFFFFF'
                    }}
                    label="Cart"
                    component={Link}
                    to={SCREEN_URL.CART}>
                    Add To Cart
                  </Button>
                </TableCell>
                <TableCell
                  style={{
                    paddingLeft: '62px',
                    width: '25%',
                    borderRight: '1px solid #ddd',
                    borderBottom: 'none',
                    textAlign: 'left'
                  }}>
                  <Button
                    sx={{
                      border: '1px solid var(--Primary, #B88E2F)',
                      background: 'var(--Primary, #B88E2F)',
                      padding: '20px 58px',
                      borderRadius: '0px',

                      color: '#FFFFFF'
                    }}
                    label="Cart"
                    component={Link}
                    to={SCREEN_URL.CART}>
                    Add To Cart
                  </Button>
                </TableCell>
                <TableCell style={{ width: '25%', borderBottom: 'none' }}></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};
export default ProductPage;
