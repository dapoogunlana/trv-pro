
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { routeConstants } from "../../../services/constants/route-constants";
import { useNavigate } from "react-router-dom";

function UserHeaderDropdown(props: any) {
  
  const navigate = useNavigate();

  const closeDialogue = () => {
    props.closeDialogue();
  }

  const goToPageSection = (page: string, section: string) => {
    props.closeDialogue();
    navigate(page);
    setTimeout(() => {
        if(section && typeof(section) === 'string') {
            document.getElementById(section)?.scrollIntoView({behavior: 'smooth'});
        }
    }, 100);
  }

  useEffect(() => {
  }, [props]);

  return (
    <>
      <div className="header-dropdown-holder-closer" onClick={closeDialogue}></div>
      <div className="header-dropdown-holder">
        <div className="header-dropdown">
          <div className="footer-sect">
            <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Company</h6>
            <Link to={routeConstants.about}>
              <p className="reduced-soft" onClick={closeDialogue}>About</p>
            </Link>
            <p className="reduced-soft" onClick={() => goToPageSection(routeConstants.home, 'features')}>
              <span>Features</span>
            </p>
            <p className="reduced-soft" onClick={() => goToPageSection(routeConstants.home, 'how-it-works')}>
              <span>How It Works</span>
            </p>
            <p className="reduced-soft" onClick={() => goToPageSection(routeConstants.about, 'our-people')}>
              <span>Our People</span>
            </p>
            <Link to={routeConstants.careers}>
              <p className="reduced-soft" onClick={closeDialogue}>Careers</p>
            </Link>
            <Link to={routeConstants.contact}>
              <p className="reduced-soft" onClick={closeDialogue}>Contact</p>
            </Link>
          </div>
          <div className="footer-sect">
            <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Trade</h6>
            <Link to={routeConstants.userLogin}>
              <p  className="reduced-soft" onClick={closeDialogue}>Buy</p>
            </Link>
            <Link to={routeConstants.userLogin}>
              <p  className="reduced-soft" onClick={closeDialogue}>Sell</p>
            </Link>
            <Link to={routeConstants.userLogin}>
              <p  className="reduced-soft" onClick={closeDialogue}>Post Trade</p>
            </Link>
            <Link to={routeConstants.manillaCard}>
              <p  className="reduced-soft" onClick={closeDialogue}>Manilla Card</p>
            </Link>
            <Link to={routeConstants.manillaToken}>
              <p  className="reduced-soft" onClick={closeDialogue}>Manilla Token</p>
            </Link>
          </div>
          <div className="footer-sect">
            <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Explore</h6>
            <Link to={routeConstants.industryNews}>
              <p  className="reduced-soft" onClick={closeDialogue}>Industry Updates</p>
            </Link>
            <Link to={routeConstants.faq}>
              <p  className="reduced-soft" onClick={closeDialogue}>FAQs</p>
            </Link>
            <Link to={routeConstants.help}>
              <p  className="reduced-soft" onClick={closeDialogue}>Help</p>
            </Link>
            <Link to={routeConstants.learn}>
              <p  className="reduced-soft" onClick={closeDialogue}>Learn</p>
            </Link>
            <Link to={routeConstants.productUpdates}>
              <p className="reduced-soft" onClick={closeDialogue}>Product Updates</p>
            </Link>
            <Link to={routeConstants.operators}>
              <p  className="reduced-soft" onClick={closeDialogue}>Global Operators</p>
            </Link>
          </div>
          <div className="footer-sect">
            <h6 className="mt-2 mb-3 pb-1 font-weight-bold">Legal</h6>
            <Link to={routeConstants.privacyPolicy}>
              <p  className="reduced-soft" onClick={closeDialogue}>Privacy Policy</p>
            </Link>
            <Link to={routeConstants.terms}>
              <p  className="reduced-soft" onClick={closeDialogue}>Terms and Conditions</p>
            </Link>
            <Link to={routeConstants.amlPolicy}>
              <p  className="reduced-soft" onClick={closeDialogue}>AML policy</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserHeaderDropdown;


// class TestClass extends React.Component {
  
// }

// function TestFunct (props: any) {

//   const [focus, setFocus ] = React.useState(props.shouldFocus);
  
//   React.useEffect(()=>{
//     setFocus(props.shouldFocus)
//   })
//   return <input autoFocus={focus} />;
// }
