import * as yup from 'yup'

export const signupValidationSchema = yup.object().shape({
  name: yup.string(),
  city: yup.string(),
  phone: yup.string(),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email Address is Required'),
  password: yup
    .string()
    .min(6, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})
