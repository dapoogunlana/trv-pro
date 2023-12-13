import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { sendRequest } from '../../../../../services/utils/request';
import { Formik } from 'formik';
import * as Yup from 'yup';
import './waitlist-messaging.scss';

function WaitlistMessaging(props: any) {

  const [emailPosts, setEmailPosts] = useState<any[]>([]);

  const getEmailPosts = () => {
    sendRequest({
      url: 'whitelist-mail'
    },
    (res: any) => {
      setEmailPosts(res.data || []);
    }, (err: any) => {
      toast.error(err.message || 'Unable to load');
    });
  }

  const broadcastMail = (form: any, controls: any) => {
    const mailObj = {
      title: form.mail_title,
      subTitle: form.mail_subtitle,
      body: form.mail_body,
      Disclaimer: form.mail_disclaimer
    };
    sendRequest({
      url: 'whitelist-mail',
      method: 'POST',
      body: mailObj,
    },
    (res: any) => {
      controls.setSubmitting(false);
      toast.success(res.message);
      controls.resetForm();
      getEmailPosts();
    }, (err: any) => {
      controls.setSubmitting(false);
      toast.error(err.message || 'Unable to send');
    });
  }

  const openQuestion = (index: number) => {
    if (emailPosts[index].active === true) {
      emailPosts[index].active = false;
    } else {
      emailPosts.map((item) => {
        item.active = false;
      });
      emailPosts[index].active = true;
    }
  }

  useEffect(() => {
    getEmailPosts();
  },[props]);
  return (
    <div className='waitlist-post w90 max900 py-5'>
      
      <div className="row">
          <div className="col-lg-12" data-aos="zoom-in" data-aos-delay="400">
              <div className="card-hover">
                  <div className="db-card-body cover">
                      <div className="content-holder item-card">
                          <h5 className="mb-3 text-center">New Broadcast Email To Wait List Subscribers</h5>
                          <Formik
                            initialValues={{
                              mail_title: '',
                              mail_subtitle: '',
                              mail_body: '',
                              mail_disclaimer: '',
                            }}
                            validationSchema={Yup.object().shape({
                              mail_title: Yup.string().required(),
                              mail_subtitle: Yup.string().required(),
                              mail_body: Yup.string().required(),
                              mail_disclaimer: Yup.string().required(),
                            })}
                            onSubmit={(values, formParams) => broadcastMail(values, formParams)}
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
                                    <div className='col-md-12'>
                                      <div className='input-grp'>
                                        <label>Email Title</label>
                                        <input
                                          type="text"
                                          placeholder='Enter Title'
                                          name='mail_title'
                                          id='mail_title'
                                          value={values.mail_title}
                                          onChange={handleChange}
                                          className={(errors.mail_title && touched.mail_title) ? 'error-input' : ''}
                                        />
                                        {touched.mail_title && errors.mail_title && <p className='c-red reduced'>{errors.mail_title}</p>}
                                      </div>
                                    </div>
                                    <div className='col-md-12'>
                                      <div className='input-grp'>
                                        <label>Email Subtitle</label>
                                        <input
                                          type="text"
                                          placeholder='Enter Subtitle'
                                          name='mail_subtitle'
                                          id='mail_subtitle'
                                          value={values.mail_subtitle}
                                          onChange={handleChange}
                                          className={(errors.mail_subtitle && touched.mail_subtitle) ? 'error-input' : ''}
                                        />
                                        {touched.mail_subtitle && errors.mail_subtitle && <p className='c-red reduced'>{errors.mail_subtitle}</p>}
                                      </div>
                                    </div>
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className='input-grp'>
                                        <label>Email Body</label>
                                        <textarea
                                          placeholder='Enter Description'
                                          name='mail_body'
                                          id='mail_body'
                                          value={values.mail_body}
                                          onChange={handleChange}
                                          className={(errors.mail_body && touched.mail_body) ? 'error-input' : ''}
                                        ></textarea>
                                        {touched.mail_body && errors.mail_body && <p className='c-red reduced'>{errors.mail_body}</p>}
                                      </div>
                                    </div>
                                    <div className='col-md-12'>
                                      <div className='input-grp'>
                                        <label>Email Disclaimer</label>
                                        <input
                                          type="text"
                                          placeholder='Enter Disclaimer'
                                          name='mail_disclaimer'
                                          id='mail_disclaimer'
                                          value={values.mail_disclaimer}
                                          onChange={handleChange}
                                          className={(errors.mail_disclaimer && touched.mail_disclaimer) ? 'error-input' : ''}
                                        />
                                        {touched.mail_disclaimer && errors.mail_disclaimer && <p className='c-red reduced'>{errors.mail_disclaimer}</p>}
                                      </div>
                                    </div>
                                  </div>
                                  <div className='row'>
                                    <div className='col-md-12'>
                                      <div className='text-center py-3'>
                                        <button type='submit' className='solid-button-2c rad-10 shadowed' disabled={isSubmitting}>
                                          {isSubmitting ? 'Processing..' : 'Submit'}
                                        </button>
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
      </div>

      <h3 className="mt-5">Wait List Subscribers Email History</h3>
      <div className="row">
          <div className="col-lg-12">
              {
                emailPosts.map((post, index) => {
                  return <div className=" db-table-card card-hover" key={index} data-aos="zoom-in" data-aos-delay="500">
                  <div className="db-card-body">
                      <div className={"content-holder2" + (!post.active ? 'compress-answer' : '')} onClick={() => openQuestion(index)}>
                          <div className='spread-info'>
                            <h5 className='font-weight-bold'>{ post.title }</h5>
                            <p style={{fontStyle: 'italic', fontSize: '0.8em'}}>{ new Date(post.dateSent).toDateString() }</p>
                          </div>
                          <div className="answer">
                              <h6>{ post.subTitle }</h6>
                              <p>{ post.body }</p>
                              <p><span style={{fontWeight: 600}}>Disclaimer:</span><span style={{fontStyle: 'italic'}}>{ post.Disclaimer }</span></p>
                          </div>
                      </div>
                  </div>
              </div>
                })
              }
          </div>
          <div className="col-lg-12" data-aos="zoom-in">
              {
                emailPosts.length === 0 && <div className='main-card pt-3 mt-4'>
                  <h5 className='text-center'>No emails sent yet</h5>
                </div>
              }
          </div>
      </div>
    </div>
  );
}

export default WaitlistMessaging;
