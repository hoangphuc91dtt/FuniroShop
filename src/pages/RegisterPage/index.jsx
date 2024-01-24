import { Link, useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../constants/screenUrls';
import { Box, Button, Input, InputLabel, Stack, TextField, Typography } from '@mui/material';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { registerUser } from '../../api/userAPI';

const schema = yup.object({
  username: yup
    .string()
    .min(3, 'Username phải tối thiểu 8=3 ký tự.')
    .required('Trường này không được để trống.'),
  email: yup
    .string()
    .email('Địa chỉ email không hợp lệ.')
    .required('Trường này không được để trống.'),
  password: yup
    .string()
    .required('Trường này không được để trống.')
    .min(8, 'Mật khẩu phải tối thiểu 8 ký tự.'),
  confirmPassword: yup
    .string()
    .required('Trường này không được để trống.')
    .oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp.')
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'all'
  });

  const dispatch = useDispatch();

  const handleRegister = (data) => {
    const { confirmPassword, ...res } = data;
    const user = {
      ...res,
      token: btoa(JSON.stringify(data))
    };

    dispatch(registerUser(user));
  };

  return (
    <>
      <Stack sx={{ position: 'relative' }}>
        <img
          src="https://res.cloudinary.com/dvujrq61r/image/upload/v1705727250/homeImage01_yenbiy.png"
          alt=""
          style={{ width: '100%', height: 'auto' }}
        />
      </Stack>
      {/* Browse The Range */}
      <Stack
        justifyContent={'space-between'}
        component="form"
        onSubmit={handleSubmit(handleRegister)}
        sx={{
          position: 'absolute',
          top: '40%',
          right: 400,
          padding: '40px',
          width: 500,
          backgroundColor: '#FFF3E3'
        }}>
        {/* Nội dung Stack 2 */}

        <Typography py={'10px'} variant="h1" fontSize={'30px'} color={'#b8822f'}>
          Register
        </Typography>
        <Stack spacing={4}>
          <TextField
            variant="standard"
            placeholder="Username"
            error={!!errors.username}
            helperText={errors.username?.message || ''}
            {...register('username')}
          />
          <TextField
            variant="standard"
            placeholder="Email"
            error={!!errors.email}
            helperText={errors.email?.message || ''}
            {...register('email')}
          />
          <TextField
            variant="standard"
            placeholder="Password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message || ''}
            {...register('password')}
          />
          <TextField
            variant="standard"
            placeholder="Confirm Password"
            type="password"
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message || ''}
            {...register('confirmPassword')}
          />
        </Stack>
        <Box mt={4}>
          <Button type="submit" variant="contained">
            Đăng Ký
          </Button>
          <Stack>
            <Typography mt={2}>
              {' '}
              Nếu đã có tài khoản <Link to={SCREEN_URL.LOGIN}>Đăng Nhập</Link>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default RegisterPage;
