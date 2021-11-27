import * as yup from 'yup'

export const newFieldValidationSchema = yup.object().shape({
  fieldName: yup.string().required('Field name is required'),
  crop: yup.string().required('Crop is required'),
  area: yup.number().required('Enter area in number'),
  waterRequirement: yup.number().required('Enter water requirement in number'),
})
