import { Typography } from '@mui/material';
import React, { ReactNode } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FromData } from '../../pages';
import LightInput from '../../styles/styleComponent/form/LightInput';

const Input = () => {
  const { control, formState: { errors }, watch } = useFormContext<FromData>();

  return (<>
    <Controller
      name='email'
      control={control}
      defaultValue=''
      render={({ field }) => (
        <LightInput fullWidth
          {...field}
          label={'Email'}
          variant='filled'
          margin='normal'
          type={'email'}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message as ReactNode : ''}
        />
      )}
    />
    {!watch('email').length
      && !errors.email
      && <Typography variant='h6' color='grey.400' ml={2}>
        *Required field
      </Typography>}
    <Controller
      name='phone'
      control={control}
      render={({ field }) => (
        <LightInput fullWidth
          {...field}
          label={'Phone'}
          variant='filled'
          margin='normal'
          type={'number'}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message as ReactNode : ''}
        />
      )}
    />
    {!watch('phone')
      && !errors.phone
      && <Typography variant='h6' color='grey.400' ml={2}>
        *Required field
      </Typography>}
  </>);
};

export default Input; 