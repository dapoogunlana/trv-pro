import OperatorIconTelecoms from './operator-icon-telecoms.svg';
import OperatorIconUtilities from './operator-icon-utilities.svg';
import OperatorIconGiftCards from './operator-icon-gift-cards.svg';
import OperatorBannerImgTelecom from './operator-banner-img-telecom.png';
import OperatorBannerImgUtility from './operator-banner-img-utility.png';
import OperatorBannerImgGiftCard from './operator-banner-img-telecom.png';
import OperatorImgTelecom from './operator-type-image-telecom.jpg';
import OperatorImgUtility from './operator-type-image-utility.jpg';
import OperatorImgGiftCard from './operator-type-image-giftcard.jpg';

import { telecomOperatorCountries } from './telecoms';
import { utilityOperatorCountries } from './utilities';
import { giftCardOperatorCountries } from './gift_cards';
import { Ioperator } from '../../../services/constants/interfaces/data-schemas';

export const allOperators: Ioperator[] = [
    {
      title: 'Telecoms Operators',
      code: 'telecoms',
      type: 2,
      icon: OperatorIconTelecoms,
      image: OperatorImgTelecom,
      bannerImage: OperatorBannerImgTelecom,
      data: {
        title: 'Enjoy the Thrill of Talking to Loved Ones Endlessly. Simply Top-Up with Crypto!',
        brief: 'One step at a time, we are rolling out data & airtime purchase in over 170 countries starting with 44. Explore our portal to see if your country is already onboarded.',
        countries: telecomOperatorCountries
      }
    },
    {
      title: 'Utility Operators',
      code: 'utility',
      type: 2,
      icon: OperatorIconUtilities,
      image: OperatorImgUtility,
      bannerImage: OperatorBannerImgUtility,
      data: {
        title: 'Never Run Out of Power When You Have Crypto Assets in Your Wallet!',
        brief: 'From PHCN, KENGEN to UEGCL and many more that will soon be onboarded, you can pay for your electricity bills using cryptocurrency in an instant.',
        countries: utilityOperatorCountries
      }
    },
    {
      title: 'Gift Card Operators',
      code: 'gift-cards',
      type: 2,
      icon: OperatorIconGiftCards,
      image: OperatorImgGiftCard,
      bannerImage: OperatorBannerImgGiftCard,
      data: {
        title: 'Buy Popular Global Gift Cards Seamlessly Directly On The Manilla Application',
        brief: 'We stock & sell popular Gift Cards that can be used globally. You can easily pay for your iTunes, Google Play, Amazon, & Ebay Cards in less than a minute',
        countries: giftCardOperatorCountries
      }
    }
  ];


  export const initialOperator = {
    title: '',
    code: '',
    type: 0,
    icon: '',
    image: '',
    bannerImage: '',
    data: {
      title: '',
      brief: '',
      countries: [
        {
          country: '',
          active: false,
          operators: [
            {
              title: '',
              image: '',
            }
          ]
        }
      ]
    }
  }

  export const initialOperatorCountry = [
    {
      country: '',
      active: false,
      operators: [
        {
          title: '',
          image: '',
        }
      ]
    }
  ]