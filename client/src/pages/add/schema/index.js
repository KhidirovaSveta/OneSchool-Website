import * as Yup from 'yup';

export const AddTeacherSchema = Yup.object().shape({
      img: Yup.string()
      .min(2, 'Too Short!')
      .max(250, 'Too Long!')
      .required('Required'),
      name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
      subject: Yup.string()
      .min(2, 'Too Short!')
      .max(40, 'Too Long!')
      .required('Required'),
      description: Yup.string()
      .min(2, 'Too Short!')
      .max(150, 'Too Long!')
      .required('Required'),
      salary: Yup.number()
      .min(2, 'Need more!')
      .max(5000, 'Enough!')
      .required('Required')
  });
  