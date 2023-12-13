import React, {  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PopupIconPartnership, PopupIconWhitelist } from '../../../../../assets/images';
import { allOperators } from '../../../../../assets/images/all-operators';
import { externalLinkConstants } from '../../../../../config/environment';
import { routeConstants } from '../../../../../services/constants/route-constants';
import './operator-popup.scss';

function OperatorPopup(props: any) {

  const navigate = useNavigate()

  const viewOperators = (code: string) => {
    props.onCloseModal();
    navigate(`/${routeConstants.operators}/${code}`);
  }

  return (
    <div className='operator-popup'>
      <div className='option-space'>
        <div className='row'>
          {allOperators.map((operator, index) => (
            <div className='col-lg-4 col-md-6' key={index}>
              <div className='operator-type-box'>
                <div className='imh'>
                  <img src={operator.icon} alt="" />
                </div>
                <button className='solid-button-2b px-3' onClick={() => viewOperators(operator.code)}>{operator.title}</button>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>
  );
}

export default OperatorPopup;
