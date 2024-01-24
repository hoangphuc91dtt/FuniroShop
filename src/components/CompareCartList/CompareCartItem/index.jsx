import { Button, Icon, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { AdUnits, Add, PlusOneOutlined } from '@mui/icons-material';
import { theme } from '../../../themes';
import { useDispatch } from 'react-redux';
import { removeCartCompare } from '../../../redux/slice/cartSlice';

const CompareCartItem = ({ id, title, thumbnail }) => {
  const dispatch = useDispatch();

  const handleRemoveCompare = () => {
    dispatch(removeCartCompare(id));
  };

  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      position={'relative'}
      px={2}
      width={'25%'}
      height={150}
      sx={{
        '&:not(:last-child)': {
          borderRight: '1px solid #ccc'
        }
      }}>
      {title && thumbnail ? (
        <img src={thumbnail} alt="" width={150} height={100} style={{ objectFit: 'cover' }} />
      ) : (
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            width: '150px',
            height: '150px'
          }}>
          <Button
            sx={{
              width: '50px',
              height: '50px',
              border: `1px dashed ${theme.palette.primary.main}`
            }}>
            <Add />
          </Button>
        </Stack>
      )}

      <Typography align="center" fontSize={12} mt={2}>
        {title && thumbnail ? title : 'Thêm sản phẩm'}
      </Typography>
      {title && thumbnail && (
        <Stack position={'absolute'} top={0} right={0} onClick={handleRemoveCompare}>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Stack>
      )}
    </Stack>
  );
};

export default CompareCartItem;
