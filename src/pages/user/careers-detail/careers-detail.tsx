import React, { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import HalfBanner from '../../../components/block-components/half-banner/half-banner';
import { careerData } from './careers-detail-data';
import { toast } from 'react-toastify';
import './careers-detail.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { countryList } from '../../../services/constants/country-list';
import { sendRequest } from '../../../services/utils/request';

function CareerDetail(props: any) {

  const { id } = useParams();

  const [role, setRole] = useState<any>({});

  const [response, setResponse] = useState<any>();

  const submitApplication = (values: any, controls: any) => {
      controls.setSubmitting(true);
      sendRequest({
          url: 'careers',
          method: 'POST',
          body: { 
            ...values,
            jobRole: role?.role_code,
          }
      }, (res: any) => {
          controls.setSubmitting(false);
          setResponse(<p className='c-dark-green mb-0 pt-2'>{res.message}</p>);
          controls.resetForm();
          toast.success(res.message);
          setTimeout(() => window.history.back(), 1000);
      }, (err: any) => {
          controls.setSubmitting(false);
          const errorMessage = err.error?.emailError || err.message || 'Unable to complete';
          setResponse(<p className='c-red-faded mb-0 pt-2'>{errorMessage}</p>);
          toast.error(errorMessage);
      });
  }

  const clearResponse = () => {
      setResponse(undefined);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    const currentRole = careerData.find((item) => item.role_code === id) || {};
    setRole(currentRole);
  }, [props]);

  return (
    <div className='careers'>

      <HalfBanner subInfo={role && role.title}>Learn</HalfBanner>
      <div className='content-body py-5'>
        <div className='w90 max800'>
          <h6 className='text-center pb-4'>Fill in your details to apply for this position</h6>
          <div className='cover' data-aos="fade-up">
            <div className='item-card' onClick={clearResponse}>
              <Formik
                initialValues={{
                  firstName: '',
                  lastName: '',
                  email: '',
                  country: '',
                  phoneNumber: '',
                  experience: '',
                  resume: '',
                  portfolioLink: '',
                  coverLetter: '',
                }}
                validationSchema={Yup.object().shape({
                  firstName: Yup.string().required(),
                  lastName: Yup.string().required(),
                  email: Yup.string().required(),
                  country: Yup.string().required(),
                  phoneNumber: Yup.string().required(),
                  experience: Yup.string().required(),
                  resume: Yup.mixed().test(
                    'fileSize',
                    'File size too large',
                    (value) => {
                      return true;
                      // console.log({value});
                      // if(!value) {
                      //   return false
                      // }
                      // const file = value.files[0];
                      // console.log({file});

                      // return !value || (value && value.size > (1024 * 1024))
                      // return true
                    }
                  ),
                  portfolioLink: Yup.string().required(),
                  coverLetter: Yup.string().required(),
                })}
                onSubmit={(values, formParams) => submitApplication(values, formParams)}
              >
                {
                  (props) => {
                    const {
                      values,
                      touched,
                      errors,
                      isSubmitting,
                      handleChange,
                      handleSubmit
                    } = props;
                    return <form action="" onSubmit={handleSubmit}>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>First Name</label>
                            <input
                              type="text"
                              placeholder='Enter frist name'
                              name='firstName'
                              id='firstName'
                              value={values.firstName}
                              onChange={handleChange}
                              className={(errors.firstName && touched.firstName) ? 'error-input' : ''}
                            />
                            {touched.firstName && errors.firstName && <p className='c-red reduced'>{errors.firstName}</p>}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>Last Name</label>
                            <input
                              type="text"
                              placeholder='Enter last name'
                              name='lastName'
                              id='lastName'
                              value={values.lastName}
                              onChange={handleChange}
                              className={(errors.lastName && touched.lastName) ? 'error-input' : ''}
                            />
                            {touched.lastName && errors.lastName && <p className='c-red reduced'>{errors.lastName}</p>}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>Email</label>
                            <input
                              type="email"
                              placeholder='Enter email address'
                              name='email'
                              id='email'
                              value={values.email}
                              onChange={handleChange}
                              className={(errors.email && touched.email) ? 'error-input' : ''}
                            />
                            {touched.email && errors.email && <p className='c-red reduced'>{errors.email}</p>}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>Country</label>
                            <select
                              name='country'
                              id='country'
                              value={values.country}
                              onChange={handleChange}
                              className={(errors.country && touched.country) ? 'error-input' : ''}
                            >
                              <option value="" disabled>Choose your country</option>
                              {countryList.map((country, index) => {
                                  return <option value={country?.name} key={index}>{country?.name}</option>
                              })}
                            </select>
                            {touched.country && errors.country && <p className='c-red reduced'>{errors.country}</p>}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>Phone Number</label>
                            <input
                              type="string"
                              placeholder='Enter phone number'
                              name='phoneNumber'
                              id='phoneNumber'
                              value={values.phoneNumber}
                              onChange={handleChange}
                              className={(errors.phoneNumber && touched.phoneNumber) ? 'error-input' : ''}
                            />
                            {touched.phoneNumber && errors.phoneNumber && <p className='c-red reduced'>{errors.phoneNumber}</p>}
                          </div>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-grp'>
                            <label>Years Of Experience</label>
                            <select
                              name='experience'
                              id='experience'
                              value={values.experience}
                              onChange={handleChange}
                              className={(errors.experience && touched.experience) ? 'error-input' : ''}
                            >
                              <option value="" disabled>Choose your years of experience</option>
                              <option value={0}>0 Years</option>
                              <option value={1}>1 Year</option>
                              <option value={2}>2 Years</option>
                              <option value={3}>3 Years</option>
                              <option value={4}>4 Years</option>
                              <option value={5}>5 Years</option>
                              <option value={6}>6 Years</option>
                              <option value={7}>7 Years</option>
                              <option value={8}>8 Years</option>
                              <option value={9}>9 Years</option>
                              <option value={10}>10 Years</option>
                            </select>
                            {touched.experience && errors.experience && <p className='c-red reduced'>{errors.experience}</p>}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6 full-hidden'>
                          <div className='input-grp'>
                            <label>Upload Resume</label>
                            <input
                              type="file"
                              placeholder='upload resume'
                              name='resume'
                              id='resume'
                              value={values.resume}
                              onChange={handleChange}
                              className={(errors.resume && touched.resume) ? 'error-input' : ''}
                            />
                            {touched.resume && errors.resume && <p className='c-red reduced'>{errors.resume}</p>}
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='input-grp'>
                            <label>Portfolio Link</label>
                            <input
                              type="text"
                              placeholder='Paste your portfolio link'
                              name='portfolioLink'
                              id='portfolioLink'
                              value={values.portfolioLink}
                              onChange={handleChange}
                              className={(errors.portfolioLink && touched.portfolioLink) ? 'error-input' : ''}
                            />
                            {touched.portfolioLink && errors.portfolioLink && <p className='c-red reduced'>{errors.portfolioLink}</p>}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='input-grp'>
                            <label>Cover Letter</label>
                            <textarea
                              rows={3}
                              placeholder='Type or paste your cover letter here'
                              name='coverLetter'
                              id='coverLetter'
                              value={values.coverLetter}
                              onChange={handleChange}
                              className={(errors.coverLetter && touched.coverLetter) ? 'error-input' : ''}
                            ></textarea>
                            {touched.coverLetter && errors.coverLetter && <p className='c-red reduced'>{errors.coverLetter}</p>}
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='text-center py-3'>
                            <button type='submit' className='solid-button-2c rad-10 shadowed' disabled={isSubmitting}>
                              {isSubmitting ? 'Processing..' : 'Submit'}
                            </button>
                            {
                                response && <div className=''>{response}</div>
                            }
                          </div>
                        </div>
                      </div>
                    </form>
                  }
                }
              </Formik>
              

            </div>
          </div>
        </div>
      </div>

      <ContactSect/>
    </div>
  );
}

export default CareerDetail;
