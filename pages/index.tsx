import { Box, Grid, Typography } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import Layout from '../component/Layout';
import PrimaryBtn from '../styles/styleComponent/btn/PrimaryBtn';
import Input from '../component/Input/Input';

export type FromData = {
  email: string,
  phone: number
}
interface Result {
  isEmail: string,
  isPhone: number
}

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email format.')
    .required('Email is required please.'),
  phone: yup
    .number()
    .required('Phone is required please.'),
});

const Page = () => {
  const [resultMsg, setResultMsg] = useState<Result>();
  const [errorMsg, setErrorMsg] = useState('');
  const methods = useForm<FromData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      phone: 886,
    },
    mode: 'onChange'
  });
  const { handleSubmit, reset, watch } = methods;

  const submitForm = async (data: FromData) => {
    console.log('submit data:', data);
    setResultMsg({ isEmail: data.email, isPhone: data.phone });
    return;
  };

  console.log('watch email:', watch('email'));


  return (<Layout>
    <Box pt={2} pb={8}>
      <Typography variant='h3' textAlign='center' color='primary.main' fontWeight='700'
        mb={4}>
        XXXX
      </Typography>
      <Typography variant='h6' color='info.main' fontWeight='700'>
        Input email
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <Grid container columnSpacing={2}>
            <Grid item xs={11.98}>
              <Input />


            </Grid>
          </Grid>
          <PrimaryBtn fullWidth
            type='submit'
            sx={{ py: '0.5rem', mt: '1.2rem' }}>
            Continue
          </PrimaryBtn>
          <PrimaryBtn fullWidth
            type='button'
            sx={{ py: '0.5rem', mt: '1.2rem' }}
            onClick={() => { reset(); setErrorMsg(''); setResultMsg(undefined); }}>
            Reset
          </PrimaryBtn>

          <Typography variant='h4' color='error' align='center' my={1}>{errorMsg}</Typography>
          {resultMsg &&
            <Typography variant='h3' textAlign='center' color='primary.main' fontWeight='700'
              mb={4} mt={3}>
              Email: {resultMsg.isEmail}
              <br />
              Phone: {resultMsg.isPhone}
            </Typography>}
        </form>
      </FormProvider>


    </Box>
  </Layout >);
};

export default Page;
