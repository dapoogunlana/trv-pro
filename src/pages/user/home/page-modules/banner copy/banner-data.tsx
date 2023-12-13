
import { AppleButton, BannerImg1, BannerImg2, BannerImg3, PlaystoreButton } from '../../../../../assets/images';

export const bannerList = [
    {
        styleClass: 'banner-1',
        image: BannerImg1,
        writeUp: 'Explore & Benefit from Manilla’s Comprehensive e-Service Suite for Reliability, Security & Speed.',
        showIcons: true,
    },
    {
        styleClass: 'banner-2',
        image: BannerImg2,
        writeUp: 'Earn up to 2% cash back in Manilla native token when you use the Manilla Debit Card across multiple merchants location worldwide.',
        showIcons: true,
    },
    {
        styleClass: 'banner-3',
        image: BannerImg3,
        writeUp: `Take Advantage of Manilla's Staking & Lending Protocol to Save for the Future or Borrow to Settle Emergency Bills.`,
        showIcons: false,
    },
];


export const imageSlide = bannerList.map((item, index) => {
    return <div className={'hero ' + item.styleClass}>
    <div className='header-spacer'></div>
    <div className='hero-spread'>
      <div className='text-content'>
        <h3>{item.writeUp}</h3>
        <div className='img-holder' data-aos="fade-in">
          <img src={item.image} alt="" />
        </div>
        <div className='action-holder md-close'>
          <button className='solid-button-2c px-4 my-3' data-aos="zoom-out" data-aos-delay="900">Post Trade</button>
          <div className='info-grid'>
            <img src={AppleButton} alt="" data-aos="fade-up" />
            <span></span>
            <img src={PlaystoreButton} alt="" data-aos="fade-up" data-aos-delay="300" />
          </div>
        </div>
        <div className='action-holder md-open' data-aos="fade-up" data-aos-delay="300">
          <button className='solid-button-2c px-4 my-3'>Post Trade</button>
          <div className='info-grid'>
            <img src={AppleButton} alt="" />
            <span></span>
            <img src={PlaystoreButton} alt="" />
          </div>
        </div>
      </div>
      <div className='image' data-aos="fade-in">
        {/* <img src={BannerImg1} alt="" /> */}
        <div className='img-holder'>
          <img src={item.image} alt="" />
        </div>
      </div>
    </div>
  </div>
});