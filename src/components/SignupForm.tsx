import { Grid, Typography } from '@mui/material';
import React from 'react';
import * as Yup from 'yup';


const SignupForm: React.FC = () => {

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required').max(120),
    lastName: Yup.string().required('Last name is required').max(120),
    company: Yup.string().required('Company is required').max(120),
    jobTitle: Yup.string().max(120),
    workEmail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
    .max(120)
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/^\S*$/, 'Password cannot contain spaces'),
  });


  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
    <Grid item xs={12} md={6}>
      <Typography variant="h4" align="center" gutterBottom>Nice to meet you</Typography>
      <Typography variant="subtitle1" align="center" gutterBottom style={{ marginBottom: '1rem' }}>We're excited to have you aboard</Typography>
    </Grid>
  </Grid>
);
};

export default SignupForm;
