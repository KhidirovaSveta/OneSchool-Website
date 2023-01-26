import React from 'react'
import { Formik, Form, Field } from 'formik';
import { AddTeacherSchema } from './schema';
import axios from 'axios';
import "./index.scss"
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet";

const AddTeacher = () => {
  const navigate = useNavigate()
  return (
    <div id='AddTeacher'>
        <div className="container">
           <Helmet>
                <meta charSet="utf-8" />
                <title>Add Teacher</title>
            </Helmet>
        <div className='form'>
     <h1 className='addHeader'>Add new teacher</h1>
     <Formik
       initialValues={{
        img: '',
        name: '',
        subject: '',
        description: '',
        salary: '',
       }}
       validationSchema={AddTeacherSchema}
       onSubmit={values => {
         axios.post(`http://localhost:8080/`, values)
         navigate("/")
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
            <div className="formikInput">
           <Field name="img" placeholder="img"/>
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
            </div>

            <div className="formikInput">
           <Field name="name" placeholder="name"/>
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
            </div>


            <div className="formikInput">
           <Field name="subject" placeholder="subject"/>
           {errors.subject && touched.subject ? (
             <div>{errors.subject}</div>
           ) : null}
            </div>

            <div className="formikInput">
           <Field name="description" placeholder="description"/>
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
            </div>

            <div className="formikInput">
           <Field name="salary" placeholder="salary"/>
           {errors.salary && touched.salary ? (
             <div>{errors.salary}</div>
           ) : null}
            </div>

           <button type="submit" className='addBtn'>Add</button>
         </Form>
       )}
     </Formik>
   </div>
        </div>
    </div>
  )
}

export default AddTeacher