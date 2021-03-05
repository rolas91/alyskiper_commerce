import * as yup  from 'yup';

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .label('Usuario')
      .email()
      .required(),
    password: yup
      .string()
      .label('Password')
      .required()
      .min(2, 'la contrasena es muy corta')
      .max(10, 'Intente una contrasena mas corta'),
});

export default validationSchema;

// function getValidationSchema(values) {
//     return Yup.object().shape({
//       password: Yup.string()
//       .required('Ingresa la contrasena'),
//       username: Yup.string()
//       .email('Correo invalido')
//       .required('Ingrese el usuario')
//     });
// }

// function getErrorsFromValidationError(validationError) {
//     const FIRST_ERROR = 0;
//     return validationError.inner.reduce((errors, error) => {
//       return {
//         ...errors,
//         [error.path]: error.errors[FIRST_ERROR]
//       };
//     }, {});
// }

// export default function validate(values) {
//     const validationSchema = getValidationSchema(values);
//     try {
//       validationSchema.validateSync(values, { abortEarly: false });
//       return {};
//     } catch (error) {
//       return getErrorsFromValidationError(error);
//     }
// }
