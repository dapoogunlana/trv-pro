import React, { Suspense, lazy } from 'react';
import {  Routes, Route, Navigate  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';
import Loader from '../components/block-components/loader/loader';
import ProctedRoutes from './protected-routes';

const UserModule = lazy(() => import("../layout/app-layout"));
const HomePage = lazy(() => import("../pages/user/home/home"));
const AboutPage = lazy(() => import("../pages/user/about/about"));
const LoginPage = lazy(() => import("../pages/user/login/login"));
const SignupPage = lazy(() => import("../pages/user/signup/signup"));
const VerifyEmail = lazy(() => import("../pages/user/verify-email/verify-email"));
const RequestPassword = lazy(() => import("../pages/user/retrieve-password/retrieve-password"));
const UpdatePassword = lazy(() => import("../pages/user/reset-password/reset-password"));
const SkyflexPayPage = lazy(() => import("../pages/user/skyflex-pay/skyflex-pay"));
const SkyRewardsPage = lazy(() => import("../pages/user/sky-rewards/sky-rewards"));
const TravelOnCreditPage = lazy(() => import("../pages/user/travel-on-credit/travel-on-credit"));
const TermsPage = lazy(() => import("../pages/user/terms/terms"));
const PrivacyPolicyPage = lazy(() => import("../pages/user/privacy-policy/privacy-policy"));
const CareersPage = lazy(() => import("../pages/user/careers/careers"));
const ContactPage = lazy(() => import("../pages/user/contact/contact"));
const ProfilePage = lazy(() => import("../pages/user/profile/profile-tab"));
const FlightSearchPage = lazy(() => import("../pages/user/flights/flight-search/flight-search"));
const FlightPreviewPage = lazy(() => import("../pages/user/flights/flight-preview/flight-preview"));
const FlightBookingPage = lazy(() => import("../pages/user/flights/flight-booking-page/flight-booking-page"));
const FlightDetailsPage = lazy(() => import("../pages/user/flights/flight-search/flight-search"));
const StaysPage = lazy(() => import("../pages/user/stays/stays"));
const StayPreviewPage = lazy(() => import("../pages/user/flights/flight-preview/flight-preview"));
const StayBookingPage = lazy(() => import("../pages/user/flights/flight-booking-page/flight-booking-page"));
const StayDetailsPage = lazy(() => import("../pages/user/flights/flight-search/flight-search"));
const BookRidesPage = lazy(() => import("../pages/user/book-rides/book-rides"));
const RewardsPage = lazy(() => import("../pages/user/rewards/rewards"));
const DealsPage = lazy(() => import("../pages/user/deals/deals"));
const ExplorePage = lazy(() => import("../pages/user/explore/explore"));
const TravelInfoPage = lazy(() => import("../pages/user/travel-info/travel-info"));
const FlightTrackerPage = lazy(() => import("../pages/user/flight-tracker/flight-tracker"));
const MyBookingsPage = lazy(() => import("../pages/user/my-bookings/my-bookings"));
const FeedbackPage = lazy(() => import("../pages/user/feedback/feedback"));
const PartnersPage = lazy(() => import("../pages/user/partners/partners"));
const HelpPage = lazy(() => import("../pages/user/help/help"));
const FaqPage = lazy(() => import("../pages/user/faq/faq"));

function UserRoute() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={routeConstants.all} element={<UserModule/>}>
          <Route path={routeConstants.home2} element={<HomePage/>}></Route>
          <Route path={routeConstants.about} element={<AboutPage/>}></Route>
          <Route path={routeConstants.login} element={<LoginPage/>}></Route>
          <Route path={routeConstants.signup} element={<SignupPage/>}></Route>
          <Route path={routeConstants.verfyEmail} element={<VerifyEmail/>}></Route>
          <Route path={routeConstants.requestPassword} element={<RequestPassword/>}></Route>
          <Route path={routeConstants.updatePassword} element={<UpdatePassword/>}></Route>
          <Route path={`${routeConstants.offers}/${routeConstants.skyflexPay}`} element={<SkyflexPayPage/>}></Route>
          <Route path={`${routeConstants.offers}/${routeConstants.skyRewards}`} element={<SkyRewardsPage/>}></Route>
          <Route path={`${routeConstants.offers}/${routeConstants.travelOnCredit}`} element={<TravelOnCreditPage/>}></Route>
          <Route path={routeConstants.terms} element={<TermsPage/>}></Route>
          <Route path={routeConstants.privacyPolicy} element={<PrivacyPolicyPage/>}></Route>
          <Route path={routeConstants.careers} element={<CareersPage/>}></Route>
          <Route path={routeConstants.contact} element={<ContactPage/>}></Route>
          <Route path={routeConstants.flights} element={<FlightSearchPage/>}></Route>
          <Route path={`${routeConstants.flightPreview}/:id`} element={<FlightPreviewPage/>}></Route>
          <Route path={routeConstants.stays} element={<StaysPage/>}></Route>
          <Route path={`${routeConstants.stayPreview}/:id`} element={<StayPreviewPage/>}></Route>
          <Route path={routeConstants.bookRides} element={<BookRidesPage/>}></Route>
          <Route path={routeConstants.rewards} element={<RewardsPage/>}></Route>
          <Route path={routeConstants.deals} element={<DealsPage/>}></Route>
          <Route path={routeConstants.explore} element={<ExplorePage/>}></Route>
          <Route path={routeConstants.travelInfo} element={<TravelInfoPage/>}></Route>
          <Route path={routeConstants.flightTracker} element={<FlightTrackerPage/>}></Route>
          <Route path={routeConstants.myBookings} element={<MyBookingsPage/>}></Route>
          <Route path={routeConstants.feedBack} element={<FeedbackPage/>}></Route>
          <Route path={routeConstants.partners} element={<PartnersPage/>}></Route>
          <Route path={routeConstants.help} element={<HelpPage/>}></Route>
          <Route path={routeConstants.faq} element={<FaqPage/>}></Route>
          <Route element={<ProctedRoutes/>}>
            <Route path={`${routeConstants.flightBooking}/:id`} element={<FlightBookingPage/>}></Route>
            <Route path={`${routeConstants.flightDetails}/:id`} element={<FlightDetailsPage/>}></Route>
            <Route path={`${routeConstants.stayBooking}/:id`} element={<StayBookingPage/>}></Route>
            <Route path={`${routeConstants.stayDetails}/:id`} element={<StayDetailsPage/>}></Route>
            <Route path={routeConstants.profile} element={<ProfilePage/>}></Route>
          </Route>
          <Route path={routeConstants.all} element={<Navigate to={routeConstants.home2}/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoute;
