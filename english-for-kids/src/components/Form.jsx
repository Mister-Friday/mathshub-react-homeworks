import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Form({ button, onClickHandler }) {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .required('Required')
        .min(6, 'Минимум 6 символов!')
        .matches(/[a-zA-Z0-9]/, 'Только буквы и цифры!'),
    }),

    onSubmit: (values) => {
      onClickHandler(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.email && formik.errors.email ? (
            <p>{formik.errors.email}</p>
          ) : (
            ''
          )
        }
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={
          formik.touched.password && formik.errors.password ? (
            <p>{formik.errors.password}</p>
          ) : (
            ''
          )
        }
      />
      <button type="submit">{button}</button>
    </form>
  );
}

export default Form;
