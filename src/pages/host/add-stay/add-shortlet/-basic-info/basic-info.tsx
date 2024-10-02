
import { Formik, FormikHelpers, FormikProps } from 'formik';
import React, { useEffect, useState } from 'react';
import { iBasicInfo } from '../add-shortlet-data';
import { countryList } from '../.././../../..//services/constants/country-list';
import './basic-info.scss';

function BasicInfoSect({data}: {data: iBasicInfo}) {

  const [response, setResponse] = useState<any>();

  const submitRegistration = (values: any, controls: FormikHelpers<any>) => {
    setResponse(' Baby code')
      controls.setSubmitting(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className='basic-info'>
      <div className=''>
        <h5 className='f700 center-info'>Basic Information</h5>
        <div className='reg-box'>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                country: '',
                phoneNo: ''
            }}
            onSubmit={(values: any, controls : any) => submitRegistration(values, controls)}
            // validationSchema={Yup.object().shape({
            //     firstName: Yup.string().required('First name is required'),
            //     lastName: Yup.string().required('Last name is required'),
            //     email: Yup.string().required('Email is required').matches(regexConstants.emailPattern, 'Invalid email'),
            //     country: Yup.string().required('Last name is required'),
            //     phoneNo: Yup.string().required('Phone number is required').min(8, 'Phone number must be at least 8 characters'),
            // })}
            >
                {
                    (props: FormikProps<{
                        firstName: string,
                        lastName: string,
                        email: string,
                        country: string,
                        phoneNo: string,
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
                                    <label>Hotel Name</label>
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
                                <div className='row'>
                                  <div className='col-lg-4 col-md-12'>
                                    <div className='reg-card'>
                                        <label>Country</label>
                                        <select
                                            id='country'
                                            value={values.country}
                                            onBlur={handleBlur}
                                            onFocus={() => errors.country = ''}
                                            onChange={handleChange}
                                            className={(errors.country && touched.country) ? 'im-error' : ''}
                                        >
                                            <option value="">Choose your country</option>
                                            {countryList.map((country, index) => {
                                                return <option value={country?.name} key={index}>{country?.name}</option>
                                            })}
                                        </select>
                                        {
                                            errors.country && touched.country &&
                                            <p className='reduced error-popup pt-1 mb-0'>{errors.country}</p>
                                        }
                                    </div>
                                  </div>
                                  <div className='col-lg-4 col-md-6'>
                                    <div className='reg-card'>
                                        <label>State/Province</label>
                                        <select
                                            id='country'
                                            value={values.country}
                                            onBlur={handleBlur}
                                            onFocus={() => errors.country = ''}
                                            onChange={handleChange}
                                            className={(errors.country && touched.country) ? 'im-error' : ''}
                                        >
                                            <option value="">Choose your country</option>
                                            {countryList.map((country, index) => {
                                                return <option value={country?.name} key={index}>{country?.name}</option>
                                            })}
                                        </select>
                                        {
                                            errors.country && touched.country &&
                                            <p className='reduced error-popup pt-1 mb-0'>{errors.country}</p>
                                        }
                                    </div>
                                  </div>
                                  <div className='col-lg-4 col-md-6'>
                                    <div className='reg-card'>
                                        <label>LGA/County</label>
                                        <select
                                            id='country'
                                            value={values.country}
                                            onBlur={handleBlur}
                                            onFocus={() => errors.country = ''}
                                            onChange={handleChange}
                                            className={(errors.country && touched.country) ? 'im-error' : ''}
                                        >
                                            <option value="">Choose your country</option>
                                            {countryList.map((country, index) => {
                                                return <option value={country?.name} key={index}>{country?.name}</option>
                                            })}
                                        </select>
                                        {
                                            errors.country && touched.country &&
                                            <p className='reduced error-popup pt-1 mb-0'>{errors.country}</p>
                                        }
                                    </div>
                                  </div>
                                </div>
                                <div className='reg-card'>
                                    <label>Full Address</label>
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
                                    <label>Email Address</label>
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
                                <div className='row'>
                                  <div className='col-md-6'>
                                    <div className='reg-card'>
                                        <label>Phone Number</label>
                                        <input
                                            type="email"
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
                                  </div>
                                  <div className='col-md-6'>
                                    <div className='reg-card'>
                                        <label>Hotel Website</label>
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
                                  </div>
                                </div>
                                <div className='text-center pt-3 pb-2'>
                                    <div className='spread-info'>
                                      <button className='recede-button'>Go Back</button>
                                      <button type='submit' className='proceed-button' disabled={isSubmitting}>{isSubmitting ? 'Processing..' : 'Submit'}</button>
                                    </div>
                                    {
                                        response && <div className=''>{response}</div>
                                    }
                                </div>
                            </form>
                        );
                    }
                }
            </Formik>
        </div>
      </div>
    </div>
  );
}

export default BasicInfoSect;
