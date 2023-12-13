import React, { useEffect } from 'react';
import './team.scss';
import { teamList } from './team-data';

function Team() {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='team'>
      <div className='team-sect pt-5' id='our-people'>
        <div className='w96 max1200 py-5'>
          <h3 className='text-center'>THE MANILLA TEAM</h3>
          <div className='member-wrap'>
            {teamList.map((member, index) => {
              return <div className='team-card-case' key={index} data-aos='zoom-in'>
                <div className='team-card'>
                  <div className='member-img'>
                    <img src={member.image} alt="" />
                  </div>
                  <h6>{member.name}</h6>
                  <h6 className='position mt-1'>{member.position}</h6>
                  <p className='member-info'>{member.info}</p>
                  <p className='read-more pt-2 mb-3'>Read more</p>
                  {
                    member.linkedIn && <div className='linked-in'>
                      <i className="fab fa-linkedin increased-xl" onClick={() => goToLink(member.linkedIn)}></i>
                    </div>
                  }
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      {/* <div className='disclaimer w90 max1200'>
        <h6 className=''>DISCLAIMER</h6>
        <p className=''>
          The information provided on the Manilla Finance website does not constitute investment advice, financial advice and 
          trading advice. The Manilla Finance team does not recommend that any cryptocurrency should be bought, sold, or held 
          by you, or state that the MNLA token is more than a simple utility token. Do your own due diligence. By purchasing 
          the MNLA token, you agree that you are not purchasing a security or investment and you agree to hold the team harmless 
          and not liable for any losses or taxes you may incur. You also agree that the team is presenting the token "as is" 
          and is not legally required to provide any support or services. You should have no expectation of any form from the 
          MNLA token and its development team. Always make sure that you are in compliance with your local laws and regulations 
          before you make any purchase.
        </p>
      </div> */}
    </div>
  );
}

export default Team;
