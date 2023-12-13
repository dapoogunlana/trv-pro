import { Formik, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { JsxElement } from 'typescript';
import * as Yup from 'yup';
import { countryList } from '../../../services/constants/country-list';
import { regexConstants } from '../../../services/constants/validation-regex';
import { sendRequest } from '../../../services/utils/request';
import { toast } from 'react-toastify';

import './register-form.scss';
import { useNavigate } from 'react-router';
import { routeConstants } from '../../../services/constants/route-constants';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminRegisterForm() {

    const [response, setResponse] = useState<any>();
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const submitRegistration = (values: any, controls: any) => {
        if(values.password !== values.password2){
            toast.error('Passwords do not match');
            controls.setSubmitting(false);
            return;
        }
        controls.setSubmitting(true);
        sendRequest({
            url: 'register',
            method: 'POST',
            body: {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                phoneNo: values.phoneNo,
                password: values.password,
            }
        }, (res: any) => {
            controls.setSubmitting(false);
            setResponse(<p className='c-dark-green mb-0 pt-2'>{res.message}</p>);
            toast.success(res.message);
            controls.resetForm();
            sessionStorage.setItem('token', res.token);
            navigate(`/${routeConstants.admin}`);
        }, (err: any) => {
            controls.setSubmitting(false);
            setResponse(<p className='c-red mb-0 pt-2'>{err.error?.emailError || err.message || 'Unable to complete'}</p>);
            toast.error(err.error?.emailError || err.message || 'Unable to complete');
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
        <div className='admin-register-box' onClick={clearResponse}>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phoneNo: '',
                password: '',
                password2: '',
            }}
            // validationSchema={Yup.object().shape({
            //     firstName: Yup.string().required('First name is required'),
            //     lastName: Yup.string().required('Last name is required'),
            //     email: Yup.string().required('Email is required').matches(regexConstants.emailPattern, 'Invalid email'),
            //     phoneNo: Yup.string().required('Phone number is required').min(8, 'Phone number must be at least 8 characters'),
            //     password: Yup.string().required('Password is required'),
            //     password2: Yup.string().required('Password confirmation is required'),
            // })}
            onSubmit={(values, controls) => submitRegistration(values, controls)}
            // onSubmit={(values, controls) => console.log('values, controls')}
            >
                {
                    (props: FormikProps<{
                        firstName: string,
                        lastName: string,
                        email: string,
                        phoneNo: string,
                        password: string,
                        password2: string,
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
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter your first name'
                                        id='firstName'
                                        value={values.firstName}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.firstName = ''}
                                        onChange={handleChange}
                                        className={(errors.firstName && touched.firstName) ? 'im-error' : ''}
                                    />
                                    {
                                        errors.firstName && touched.firstName &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.firstName}</p>
                                    }
                                </div>
                                <div className='reg-card'>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        placeholder='Enter your last name'
                                        id='lastName'
                                        value={values.lastName}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.lastName = ''}
                                        onChange={handleChange}
                                        className={(errors.lastName && touched.lastName) ? 'im-error' : ''}
                                    />
                                    {
                                        errors.lastName && touched.lastName &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.lastName}</p>
                                    }
                                </div>
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
                                    <label>Phone Number</label>
                                    <input
                                        type="text"
                                        placeholder='Enter your phone number'
                                        id='phoneNo'
                                        value={values.phoneNo}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.phoneNo = ''}
                                        onChange={handleChange}
                                        className={(errors.phoneNo && touched.phoneNo) ? 'im-error' : ''}
                                    />
                                    {
                                        errors.phoneNo && touched.phoneNo &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.phoneNo}</p>
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
                                            // <i className="fa-solid fa-eye" onClick={toggleShowPassword}></i>
                                            <FontAwesomeIcon icon="check-square" /> 
                                        }
                                    </div>
                                    {
                                        errors.password && touched.password &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.password}</p>
                                    }
                                </div>
                                <div className='reg-card'>
                                    <label>Confirm Password</label>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Enter your password'
                                        id='password2'
                                        value={values.password2}
                                        onBlur={handleBlur}
                                        onFocus={() => errors.password2 = ''}
                                        onChange={handleChange}
                                        className={(errors.password2 && touched.password2) ? 'im-error' : ''}
                                    />
                                    <div className='password-shower'>
                                        {
                                            showPassword ? 
                                            <i className="fa-solid fa-eye-slash" onClick={toggleShowPassword}></i> : 
                                            <i className="fa-solid fa-eye" onClick={toggleShowPassword}></i>
                                        }
                                    </div>
                                    {
                                        errors.password2 && touched.password2 &&
                                        <p className='reduced error-popup pt-1 mb-0'>{errors.password2}</p>
                                    }
                                </div>
                                <div className='text-center pt-3 pb-2'>
                                    <button type='submit' className='solid-button-2c' disabled={isSubmitting}>{isSubmitting ? 'Processing..' : 'Submit'}</button>
                                    {
                                        response && <div className=''>{response}</div>
                                    }
                                </div>
                                <div className=''>
                                    <span>Already registered? </span>
                                    <span className='font-weight-bold c-pr-blue'>
                                        <Link to={`/${routeConstants.admin}/${routeConstants.adminLogin}`}>Login</Link>
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

export default AdminRegisterForm;
