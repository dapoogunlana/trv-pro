import React from "react";
import { Link } from "react-router-dom";
import { SupportImage } from "../../../assets/images";
import { routeConstants } from "../../../services/constants/route-constants";
import './contact-sect.scss';

function ContactSect(props: any) {

  return (
    <div className="contact-sect py-5">
      <div className="w96 max1100">
        <div className="row">
            <div className="col-md-6 center-info py-3 center-mobile">
                <div className="w96 max500" data-aos="fade-up">
                  <h3>Instant Support when you need us</h3>
                  <p>
                    We understand how important prompt response to your inquiries means to you. The support team is here for You!
                  </p>
                  <Link to={`/${routeConstants.contact}`}>
                    <button className="hollow-button-2cb">Contact Us</button>
                  </Link>
                </div>
            </div>
            <div className="col-md-6 center-info py-3 md-close">
                <div className="w80 max400 imh" data-aos="zoom-in" data-aos-delay="500">
                  <img src={SupportImage} alt="" />
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default ContactSect;
