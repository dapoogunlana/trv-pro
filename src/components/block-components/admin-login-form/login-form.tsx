import { Formik, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { JsxElement } from 'typescript';
import * as Yup from 'yup';
import { countryList } from '../../../services/constants/country-list';
import { regexConstants } from '../../../services/constants/validation-regex';
import { sendRequest } from '../../../services/utils/request';
import { toast } from 'react-toastify';

import './login-form.scss';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import { Link } from 'react-router-dom';

function AdminLoginForm() {

    const [response, setResponse] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const submitRegistration = (values: any, controls: any) => {
        controls.setSubmitting(true);
        sendRequest({
            url: 'login',
            method: 'POST',
            body: {
                email: values.email,
                password: values.password,
            }
        }, (res: any) => {
            controls.setSubmitting(false);
            setResponse(<p className='c-dark-green mb-0 pt-2'>{res.message}</p>);
            // toast.success(res.message);
            controls.resetForm();
            sessionStorage.setItem('token', res.token);
            navigate(`/${routeConstants.admin}`);
        }, (err: any) => {
            controls.setSubmitting(false);
            setResponse(<p className='c-red mb-0 pt-2'>{err?.error?.emailError || err?.message || 'Server network Error'}</p>);
            toast.error(err?.error?.emailError || err?.message || 'Server network Error');
        });
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const clearResponse = () => {
        setResponse(undefined);
    }

    useEffect(() => {
    });

    return (
        <div className='admin-login-box' onClick={clearResponse}>
            <Formik initialValues={{
                email: '',
                password: '',
            }}
            // validationSchema={Yup.object().shape({
            //     email: Yup.string().required('Email is required').matches(regexConstants.emailPattern, 'Invalid email'),
            //     password: Yup.string().required('Password is required'),
            // })}
            onSubmit={(values, controls) => submitRegistration(values, controls)}
            // onSubmit={(values, controls) => console.log('values, controls')}
            >
                {
                    (props: FormikProps<{
                        email: string,
                        password: string,
                    }>) => {
                        const {
                            values,
                            errors,
                            touched,
                            isSubmitting,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            handleReset
                        } = props;
                        return (
                            <form action="" onSubmit={handleSubmit}>
                                <div className='reg-card'>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        placeholder='enter your email'
                                        id='email'
                                        value={values.email}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.email = ''}
                                        onChange={handleChange}
                                        className={(errors.email && touched.email) ? 'im-error' : ''}
                                    />
                                    {
                                        errors.email && touched.email &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.email}</p>
                                    }
                                </div>
                                <div className='reg-card'>
                                    <label>Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        id='password'
                                        value={values.password}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.password = ''}
                                        onChange={handleChange}
                                        className={(errors.password && touched.password) ? 'im-error' : ''}
                                    />
                                    <div className='password-shower'>
                                        {
                                            showPassword ? 
                                            <i className="fa-solid fa-eye-slash" onClick={toggleShowPassword}></i> : 
                                            <i className="fa-solid fa-eye" onClick={toggleShowPassword}></i>
                                        }
                                    </div>
                                    {
                                        errors.password && touched.password &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.password}</p>
                                    }
                                </div>
                                <div className='text-center pt-3 pb-2'>
                                    <button type='submit' className='solid-button-2c' disabled={isSubmitting}>{isSubmitting ? 'Processing..' : 'Submit'}</button>
                                    {
                                        response && <div className=''>{response}</div>
                                    }
                                </div>
                                <div className=''>
                                    <span>Not registered yet? </span>
                                    <span className='font-weight-bold c-pr-blue'>
                                        <Link to={`/${routeConstants.admin}/${routeConstants.adminRegister}`}>Register</Link>
                                    </span>
                                </div>
                            </form>
                        );
                    }
                }
            </Formik>
        </div>
    );
}

export default AdminLoginForm;
