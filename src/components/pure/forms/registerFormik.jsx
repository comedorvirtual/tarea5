import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup'
import { User } from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string().email('Email Invalid format').required('Email is required'),
        password: Yup.string().required('Password is required')
    }
)
const RegisterFormik = () => {
    // const initialCredentials = {
    //     email: '',
    //     password: ''
    // }

    // return (
    //     <div>
    //         <h4>Login Formik</h4>
    //         <Formik
    //             initialValues={initialCredentials}
    //             validationSchema={loginSchema}
    //             onSubmit={async (values) => {
    //                 await new Promise((r) => setTimeout(r, 500));
    //                 alert(JSON.stringify(values, null, 2));
    //                 localStorage.setItem('credentials', values)
    //             }}
    //         >

    //             {/* We obtain props from Formik */}

    //             {({
    //                     values,
    //                     touched,
    //                     errors,
    //                     isSumitting,
    //                     handleChange,
    //                     handleBlur
    //                 }) => (
    //                     <Form>
    //                         <label htmlFor="email">Email</label>
    //                         <Field id="email" type="email" name="email" placeholder="example@email.com" />

    //                         {
    //                             errors.email && touched.email &&
    //                             (
    //                                 <ErrorMessage name='email' component={'div'}></ErrorMessage>
    //                             )
    //                         }

    //                         <label htmlFor="password">Password</label>
    //                         <Field
    //                             id="password"
    //                             name="password"
    //                             placeholder="password"
    //                             type="password"
    //                         />

    //                         {
    //                             errors.password && touched.password &&
    //                             (
    //                                 <ErrorMessage name='password' component={'div'}></ErrorMessage>
    //                             )
    //                         }
    //                         <button type="submit">Submit</button>
    //                         {isSumitting ? (<p>Login your credentials...</p>):null}
    //                     </Form>
    //                 )
    //             }
    //         </Formik>
    //     </div>
    // );
    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'Username too short')
                .max(12, 'Username too long')
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid format')
                .required('Email is required'),
            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User/Admin')
                .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            // confirm: Yup.string()
            //     .when("password", {
            //         is: value => (value && value.length > 0 ? true : false),
            //         then: Yup.string().oneOf(
            //             [Yup.ref("password")],
            //             'Password must match'
            //         )
            //     }).required('You must confirm the password')
            confirm: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match').required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('Register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}

                validationSchema={registerSchema}

                onSubmit={async (values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSumitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" type="text" name="username" placeholder="Your Usernmae" />


                        {
                            errors.username && touched.username &&
                            (
                                <ErrorMessage name='username' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="email">Email</label>
                        <Field id="email" type="email" name="email" placeholder="example@email.com" />


                        {
                            errors.email && touched.email &&
                            (
                                <ErrorMessage name='email' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="password">Password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />

                        {
                            errors.password && touched.password &&
                            (
                                <ErrorMessage name='password' component='div'></ErrorMessage>
                            )
                        }

                        <label htmlFor="confirm">Password</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="password"
                        />

                        {
                            errors.confirm && touched.confirm &&
                            (
                                <ErrorMessage name='confirm' component='div'></ErrorMessage>
                            )
                        }

                        <button type="submit">Register Account</button>
                        {isSumitting ? (<p>Sending your credentials...</p>) : null}

                    </Form>
                )
                }

            </Formik>

        </div>
    );
}

export default RegisterFormik;
