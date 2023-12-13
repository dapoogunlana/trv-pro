
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FooterLogo } from "../../../assets/images";
import { routeConstants } from "../../../services/constants/route-constants";
import { useNavigate } from "react-router-dom";
import { externalLinkConstants, socialLinks } from "../../../config/environment";
import { sendRequest } from "../../../services/utils/request";
import { toast } from 'react-toastify';
import { Formik } from "formik";
import * as Yup from "yup";
import { WhitePaper } from "../../../assets/files";

function UserFooter(props: any) {
  
  const navigate = useNavigate();
  const [response, setResponse] = useState<any>();
  const [location, setLocation] = useState<any>();

  const goToPageSection = (page: string, section: string) => {
    navigate(page);
    setTimeout(() => {
        if(section && typeof(section) === 'string') {
            document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
        }
    }, 100);
  }

  const subscribe = (email: string, controls: any) => {

    // return console.log({location});

    sendRequest(
      {
        method: 'POST',
        url: 'visitor',
        body: {
          email: email,
          geolocation: location,
          subscribed: true,
          rating: 5
        }
      },
      (res: any) => {
          controls.setSubmitting(false);
          setResponse(<p className='c-green mb-0 pt-2'>{res.message}</p>);
          setTimeout(() => setResponse(''), 7000);
          controls.resetForm();
          toast.success(res.message);
        },
      (err: any) => {
          controls.setSubmitting(false);
          const errorMessage = err.error?.emailError || err.message || 'Unable to complete';
          setResponse(<p className='c-red-faded mb-0 pt-2'>{errorMessage}</p>);
          toast.error(errorMessage);
          setTimeout(() => setResponse(''), 7000);
        }
    );
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) => {
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        accuracy: location.coords.accuracy,
      });
    }, null, {});
  }, [props]);

  return (
    <div className="footer pt-2 relative">
      <div className="pattern-holder"></div>
      <div className="w96 p-3 relative">
        <div className="w96 max1200 mt-5">
          <div className="w96 max600">
            <p className="text-center">Subscribe to our newsletter and get notifications to stay updated</p>
            {/* <div className="subscribe-grid inc-grid w96 max600 mb-4">
                <input type="text" placeholder="Enter your email" />
                <span></span>
                <button className="md-close">Subscribe</button>
                <button className="md-open">Go</button>
            </div> */}
            <Formik
                initialValues={{
                  email: '',
                }}
                validationSchema={Yup.object().shape({
                  email: Yup.string().required().email('Invalid Email'),
                })}
                onSubmit={(values, formParams) => subscribe(values.email, formParams)}
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
                      <div className='subscribe-grid inc-grid w96 max600 mb-1'>
                            <input
                              type="email"
                              placeholder='Enter email address'
                              name='email'
                              id='email'
                              value={values.email}
                              onChange={handleChange}
                              onBlur={() => touched.email = false}
                            />
                            <span></span>
                            <button type='submit' className="md-close" disabled={isSubmitting}>Subscribe</button>
                            <button type='submit' className="md-open" disabled={isSubmitting}>Go</button>
                            {/* <button type='submit' className='solid-button-2c rad-10 shadowed' disabled={isSubmitting}>
                              {isSubmitting ? 'Processing..' : 'Submit'}
                            </button> */}
                      </div>
                      {touched.email && errors.email && <p className='c-red-faded text-center'>{errors.email}</p>}
                      { isSubmitting && <div className='text-center'>Processing...</div> }
                      { response && <div className=' text-center'>{response}</div> }
                    </form>
                  }
                }
              </Formik>
          </div>
          <div className="footer-sector">
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Company</h6>
              <p className="reduced-soft">
                <Link to={routeConstants.about}>About</Link>
              </p>
              <p className="reduced-soft">
                <span onClick={() => goToPageSection(routeConstants.home, 'features')}>Features</span>
              </p>
              <p className="reduced-soft">
                <span onClick={() => goToPageSection(routeConstants.home, 'how-it-works')}>How It Works</span>
              </p>
              <p className="reduced-soft">
                <span onClick={() => goToPageSection(routeConstants.about, 'our-people')}>Our People</span>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.careers}>Careers</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.contact}>Contact</Link>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Trade</h6>
              <p className="reduced-soft">
                <Link to={routeConstants.userLogin}>Buy</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.userLogin}>Sell</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.userLogin}>Post Trade</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.manillaCard}>Manilla Card</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.manillaToken}>Manilla Token</Link>
              </p>
              <p className="reduced-soft">
                <a href={externalLinkConstants.presaleLink}>Presale</a>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Explore</h6>
              <p className="reduced-soft">
                <Link to={routeConstants.industryNews}>Industry Updates</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.faq}>FAQs</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.help}>Help</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.learn}>Learn</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.productUpdates}>Product Updates</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.operators}>Global Operators</Link>
              </p>
              <p className="reduced-soft">
                <a href={WhitePaper} target={'_blank'}>Download Whitepaper</a>
              </p>
            </div>
            <div className="footer-sect">
              <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Legal</h6>
              <p className="reduced-soft">
                <Link to={routeConstants.privacyPolicy}>Privacy Policy</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.terms}>Terms and Conditions</Link>
              </p>
              <p className="reduced-soft">
                <Link to={routeConstants.amlPolicy}>AML policy</Link>
              </p>
            </div>
            <div className="footer-sect sector-2">
              <div className="fit-footer-logo mt-2">
                <div className="logo-holder">
                  <Link to={routeConstants.home}>
                    <img src={FooterLogo} alt="" />
                  </Link>
                </div>
              </div>
              <div className="spread-info-back mt-3 media-icons">
                  <a href={socialLinks.telegram} target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-x"></i></a>
                  <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="mx-3"><i className="fab fa-twitter increased-x"></i></a>
                  <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin increased-x"></i></a>
              </div>
            </div>
          </div>
          <div className="footer-brand-sect">
            <div className="spread-info-back mt-2">
                <div className="max150 imh">
                  <Link to={routeConstants.home}>
                    <img src={FooterLogo} alt="" />
                  </Link>
                </div>
            </div>
            <div className="spread-info-back mt-3 media-icons">
                <a href={socialLinks.telegram} target="_blank" rel="noreferrer"><i className="fab fa-telegram-plane increased-x"></i></a>
                <a href={socialLinks.twitter} target="_blank" rel="noreferrer" className="mx-3"><i className="fab fa-twitter increased-x"></i></a>
                <a href={socialLinks.linkedin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin increased-x"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="center-info reduced footer-base relative">
          <p className="pt-4 pb-3 center-mobile">
            © Manilla Finance {new Date().getFullYear()} . All right reserved
          </p>
        </div>
    </div>
  );
}
export default UserFooter;


// class TestClass extends React.Component {
  
// }

// function TestFunct (props: any) {

//   const [focus, setFocus ] = React.useState(props.shouldFocus);
  
//   React.useEffect(()=>{
//     setFocus(props.shouldFocus)
//   })
//   return <input autoFocus={focus} />;
// }
