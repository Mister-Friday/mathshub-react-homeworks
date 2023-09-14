import React from 'react';
// import Button from './Button';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { packageActions } from '../store/index.js';
import { v4 as uuidv4 } from 'uuid';
import './Form.css';

function Form() {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter.counter);

  const formik = useFormik({
    initialValues: {
      id: null,
      senderLastName: '',
      senderFirstName: '',
      senderMiddleName: '',
      addresseeLastName: '',
      addresseeFirstName: '',
      addresseeMiddleName: '',
      packageType: 'casual',
      packageLendth: '',
      packageWidth: '',
      packageHeight: '',
      packageWeight: '',
      insurance: false,
    },
    validationSchema: Yup.object({
      senderLastName: Yup.string()
        .max(15, 'Фамилия не может быть длинее 15 символов')
        .required('Нужно ввести Фамилию'),
      senderFirstName: Yup.string()
        .max(15, 'Имя не может быть длинее 15 символов')
        .required('Нужно ввести Имя'),
      senderMiddleName: Yup.string()
        .max(15, 'Отчество не может быть длинее 15 символов')
        .required('Нужно ввести Отчество'),
      addresseeLastName: Yup.string()
        .max(15, 'Фамилия не может быть длинее 15 символов')
        .required('Нужно ввести Фамилию'),
      addresseeFirstName: Yup.string()
        .max(15, 'Имя не может быть длинее 15 символов')
        .required('Нужно ввести Имя'),
      addresseeMiddleName: Yup.string()
        .max(15, 'Отчество не может быть длинее 15 символов')
        .required('Нужно ввести Отчество'),
      packageType: Yup.string().required('Выберите тип отправления'),
      packageLendth: Yup.string()
        .max(5, 'Слишком длинная посылка')
        .required('Укажите длину'),
      packageWidth: Yup.string()
        .max(5, 'Слишком широкая посылка')
        .required('Укажите ширину'),
      packageHeight: Yup.string()
        .max(5, 'Слишком высока посылка')
        .required('Укажите высоту'),
      packageWeight: Yup.string()
        .max(2, 'Слишком тяжелая посылка')
        .required('Укажите вес'),
    }),
    onSubmit: (values) => {
      const generateId = uuidv4();
      const id = generateId;
      console.log('id=', id);

      const newPackage = { ...values };
      newPackage.id = id;

      dispatch(packageActions.packageAdd(newPackage));

      // console.log('newPackage:', newPackage);
    },
  });

  // console.log(formik.values);

  return (
    <>
      <div className="form_container">
        <h1>ПОЧТА РОССИИ</h1>
        <form className="form" onSubmit={formik.handleSubmit}>
          <fieldset>
            <section>
              <h2>Отправитеватель:</h2>
              <label htmlFor="senderLastName">Фамилия</label>
              <input
                type="text"
                id="senderLastName"
                name="senderLastName"
                value={formik.values.senderLastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Игорев"
              />
              {formik.errors.senderLastName &&
                formik.touched.senderLastName && (
                  <p>{formik.errors.senderFirstName}</p>
                )}
              <label htmlFor="senderFirstName">Имя</label>
              <input
                type="text"
                id="senderFirstName"
                name="senderFirstName"
                value={formik.values.senderFirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Игорь"
              />
              {formik.errors.senderFirstName &&
                formik.touched.senderFirstName && (
                  <p>{formik.errors.senderFirstName}</p>
                )}
              <label htmlFor="senderMiddleName">Отчество</label>
              <input
                type="text"
                id="senderMiddleName"
                name="senderMiddleName"
                value={formik.values.senderMiddleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Игоревич"
              />
              {formik.errors.senderMiddleName &&
                formik.touched.senderMiddleName && (
                  <p>{formik.errors.senderMiddleName}</p>
                )}
            </section>
          </fieldset>
          <fieldset>
            <section>
              <h2>Получатеватель:</h2>
              <label htmlFor="addresseeLastName">Фамилия</label>
              <input
                type="text"
                id="addresseeLastName"
                name="addresseeLastName"
                value={formik.values.addresseeLastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Никитин"
              />
              {formik.errors.addresseeLastName &&
                formik.touched.addresseeLastName && (
                  <p>{formik.errors.addresseeLastName}</p>
                )}
              <label htmlFor="addresseeFirstName">Имя</label>
              <input
                type="text"
                id="addresseeFirstName"
                name="addresseeFirstName"
                value={formik.values.addresseeFirstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Никита"
              />
              {formik.errors.addresseeFirstName &&
                formik.touched.addresseeFirstName && (
                  <p>{formik.errors.addresseeFirstName}</p>
                )}
              <label htmlFor="addresseeMiddleName">Отчество</label>
              <input
                type="text"
                id="addresseeMiddleName"
                name="addresseeMiddleName"
                values={formik.values.addresseeMiddleName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Никитович"
              />
              {formik.errors.addresseeMiddleName &&
                formik.touched.addresseeMiddleName && (
                  <p>{formik.errors.addresseeMiddleName}</p>
                )}
            </section>
          </fieldset>
          <fieldset>
            <section>
              <h2>Параметры отправления</h2>
              <label htmlFor="packageType">Тип отравления:</label>
              <select
                id="packageType"
                name="packageType"
                defaultValue={formik.values.packageType}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="casual">Обычное</option>
                <option value="special">Заказное</option>
                <option value="extra">Срочно-высрочное!</option>
              </select>
              {formik.errors.packageType && formik.touched.packageType && (
                <p>{formik.errors.packageType}</p>
              )}
              <section>
                <h3>Габариты:</h3>
                <label htmlFor="packageLendth">Длина,см:</label>
                <input
                  type="text"
                  id="packageLendth"
                  name="packageLendth"
                  value={formik.values.packageLendth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="100"
                />
                {formik.errors.packageLendth &&
                  formik.touched.packageLendth && (
                    <p>{formik.errors.packageLendth}</p>
                  )}
                <label htmlFor="packageWidth">Ширина,см:</label>
                <input
                  type="text"
                  id="packageWidth"
                  name="packageWidth"
                  value={formik.values.packageWidth}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="100"
                />
                {formik.errors.packageWidth && formik.touched.packageWidth && (
                  <p>{formik.errors.packageWidth}</p>
                )}
                <label htmlFor="packageHeight">Высота,см:</label>
                <input
                  type="text"
                  id="packageHeight"
                  name="packageHeight"
                  value={formik.values.packageHeight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="100"
                />
                {formik.errors.packageHeight &&
                  formik.touched.packageHeight && (
                    <p>{formik.errors.packageHeight}</p>
                  )}
              </section>
              <label htmlFor="packageWeight">Вес отправления, кг.</label>
              <input
                type="number"
                id="packageWeight"
                name="packageWeight"
                value={formik.values.packageWeight}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.packageWeight && formik.touched.packageWeight && (
                <p>{formik.errors.packageWeight}</p>
              )}
              <label htmlFor="insurance">Страхование</label>
              <input
                type="checkbox"
                id="insurance"
                name="insurance"
                value={formik.values.insurance}
                onChange={formik.handleChange}
              />
            </section>
          </fieldset>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </>
  );
}

export default Form;
