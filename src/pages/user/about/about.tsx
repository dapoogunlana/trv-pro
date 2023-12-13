import React, { useEffect } from 'react';
import { AboutImg, OurTech } from '../../../assets/images';
import './about.scss';
import { advisorList, teamList } from './about-data';
import ContactSect from '../../../components/block-components/contact-sect/contact-sect';
import Team from './team/team';

function Home() {

  const goToLink = (link: string) => {
    if(link) {
      window.open(link, '_blank');
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className='about'>
      <div className='banner'>
        <div className='header-spacer'></div>
        <h1 className='text-center pt-5'>About Manilla</h1>
        <div className='py-3 md-close'></div>
        <div className='top-grid'>
          <div className='text-sect md-open text-center'>
            <p>
            Manilla Finance is a project pioneering the migration of utility bills payment solutions from the traditional Web 2.0 
            framework to the cutting-edge Web 3.0 environment. This groundbreaking endeavor involves leveraging digital currency 
            for seamless bills settlement, revolutionizing the way transactions are conducted in the digital realm.
            </p>
            <p>
              With intent to serve millions of people in 44 countries, we are providing a safe and trustworthy 
              mechanism having financial features such as spot lending, staking, ticketing, utilities bill payment and 
              airtime/data purchase using cryptocurrency. The Manilla Finance is powered by Manilla Technogies along with 
              other ecosystem development partners. 
            </p>
          </div>
          <div className='floated-img'>
            <img src={AboutImg} alt="" />
          </div>
          <div className='text-sect md-close'>
            <p>
              Manilla Finance is a project pioneering the migration of utility bills payment solutions from the traditional Web 2.0 
              framework to the cutting-edge Web 3.0 environment. This groundbreaking endeavor involves leveraging digital currency 
              for seamless bills settlement, revolutionizing the way transactions are conducted in the digital realm.
            </p>
            <p>
              With intent to serve millions of people in 44 countries, we are providing a safe and trustworthy 
              mechanism having financial features such as spot lending, staking, ticketing, utilities bill payment and 
              airtime/data purchase using cryptocurrency. The Manilla Finance is powered by Manilla Technogies along with 
              other ecosystem development partners. 
            </p>
          </div>
        </div>
      </div>
      <div className='sub-info py-5'>
        <div className='w96 max1200'>
          <div className='sub-grid'>
            <div></div>
            <div className='more-info'>
              <p>
                Manilla Finance adopts blockchain technology to build the next-generation financial ecosystem. We strive to 
                eliminate financial barriers, evolve the global economy and its perception and ultimately pave the way for 
                freedom and flexibility of transactions. We never pause on innovations and brilliant creations to improve our 
                user-experience to make cryptocurrency trading available for everyone.
              </p>
              <p className='mb-0'>
                We envision being the world’s most dedicated and innovative cryptocurrency platform as we strive to 
                infiltrate and birth newer ideas the blockchain space has never fathomed before.
              </p>
            </div>
          </div>
          <div className='row py-5'>
            <div className='col-md-6 center-info'>
              <div className='w90 py-3'>
                <h4 className='center-mobile'>Our Technology</h4>
                <p className='center-mobile'>
                  Security is our top priority, first of all, with speed rallying along. Manilla Finance provides a safe, reliable, 
                  and stable environment for crypto transactions via web and mobile apps. We adopt a global server load balancing, 
                  distributed clusters and are open to accept upon demand any innovation that further boldens user-experience based 
                  off of suggestions from the experts. We are tailored for you!
                </p>
              </div>
            </div>
            <div className='col-md-6 center-info'>
              <div className='card-image'>
                <img src={OurTech} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Team/>
      {/* <div className='team-sect py-5' id='our-people'>
        <div className='w96 max1200 py-5'>
          <h3 className='text-center'>Our Team</h3>
          <p className='text-center'>
            We are staffed with a group of technically creative fellows who are endowed with strong discipline across their 
            respective fields of profession. They are a true heterogeneous mix of dedicated fellows and idea-flexible people 
            whose love for perfection knows no bounds.
            <br /><br />
            A world-class team of adept technical writers, human relations experts, programming gurus, cryptographic and security 
            pros are not less than a project like Manilla Finance would require. You just cannot get enough of their pro skills  
          </p>
          <div className='grid5'>
            {teamList.map((member, index) => {
              return <div className='py-' key={index}>
                <div className='w90 team-card'>
                  <div className='member-img'>
                    <img src={member.image} alt="" />
                  </div>
                  <h6>{member.name}</h6>
                  <h6 className='position'>{member.position}</h6>
                  <div className='pt-4'></div>
                  {
                    member.linkedIn && <div className='linked-in' onClick={() => goToLink(member.linkedIn)}>
                      <i className="fab fa-linkedin increased"></i>
                    </div>
                  }
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
      <div className='advisor-sect py-5'>
        <div className='w96 max900 py-5'>
          <h3 className='text-center topic'>Advisory Team</h3>
          <div className='row'>
            {advisorList.map((member, index) => {
              return <div className='col-md-6' key={index}>
                <div className='w90 advisor-card'>
                  <div className='member-img'>
                    <img src={member.image} alt="" />
                  </div>
                  <h6>{member.name}</h6>
                  <h6 className='position'>{member.position}</h6>
                  {
                    member.linkedIn && <div className='linked-in' onClick={() => goToLink(member.linkedIn)}>
                      <i className="fab fa-linkedin increased"></i>
                    </div>
                  }
                </div>
              </div>
            })}
          </div>
        </div>
      </div> */}

      <ContactSect/>
    </div>
  );
}

export default Home;
