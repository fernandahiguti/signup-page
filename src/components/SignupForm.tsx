import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Grid, Typography, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null); 
  const navigate = useNavigate();


  const initialValues = {
    firstName: '',
    lastName: '',
    company: '',
    jobTitle: '',
    workEmail: '',
    password: ''
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required').max(120),
    lastName: Yup.string().required('Last name is required').max(120),
    company: Yup.string().required('Company is required').max(120),
    jobTitle: Yup.string().max(120),
    workEmail: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
    .required('Password is required')
    .max(120)
    .min(8, 'Password must be at least 8 characters')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/^\S*$/, 'Password cannot contain spaces'),
  });

  const handleSubmit = async (values: any) => {
    try {
      const response = await axios.post('http://localhost:3000/users/register', values);
      console.log('Registration successful:', response.data);
      navigate(`/dashboard?firstName=${values.firstName}`);

    } catch (error: any) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message); 
      } else {
        setError('An error occurred during registration.'); 
      }
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '80vh' }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" align="center" fontWeight={'bold'} marginTop={'1.5rem'} gutterBottom>Nice to meet you</Typography>
        <Typography variant="subtitle1" align="center" gutterBottom style={{ marginBottom: '1.5rem' }}>We're excited to have you aboard</Typography>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form style={{ marginBottom: '1.5rem' , padding: '20px'}}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <label htmlFor="firstName" style={{ marginBottom: '0.5rem' }}>First Name</label>
                  <Field name="firstName" as={TextField} fullWidth error={touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <label htmlFor="lastName" style={{ marginBottom: '0.5rem' }}>Last Name</label>
                  <Field name="lastName" as={TextField} fullWidth error={touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="company" style={{ marginBottom: '0.5rem' }}>Company</label>
                  <Field name="company" as={TextField} fullWidth error={touched.company && !!errors.company} helperText={touched.company && errors.company} />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="jobTitle" style={{ marginBottom: '0.5rem' }}>Job Title</label>
                  <Field name="jobTitle" as={TextField} fullWidth error={touched.jobTitle && !!errors.jobTitle} helperText={touched.jobTitle && errors.jobTitle} />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="workEmail" style={{ marginBottom: '0.5rem' }}>Work Email</label>
                  <Field name="workEmail" as={TextField} fullWidth error={touched.workEmail && !!errors.workEmail} helperText={touched.workEmail && errors.workEmail} />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="password" style={{ marginBottom: '0.5rem' }}>Password</label>
                  <Field
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    as={TextField}
                    fullWidth
                    error={touched.password && !!errors.password}
                    helperText={touched.password && errors.password}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={() => setShowPassword(!showPassword)}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{backgroundColor: '#6F3CE8', padding: '12px 0', fontSize: '1rem', fontWeight: 'bold' }}
                  >
                    Continue
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
        {error && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
  
  
};

export default SignupForm;
