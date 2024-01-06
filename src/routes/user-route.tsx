import React, { Suspense, lazy } from 'react';
import {  Routes, Route, Navigate  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';
import Loader from '../components/block-components/loader/loader';
import FeedbackPage from '../pages/user/feedback/feedback';


const UserModule = lazy(() => import("../layout/app-layout"));
const HomePage = lazy(() => import("../pages/user/home/home"));
const ContactPage = lazy(() => import("../pages/user/contact/contact"));

function UserRoute() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path={routeConstants.all} element={<UserModule/>}>
          <Route path={routeConstants.home2} element={<HomePage/>}></Route>
          <Route path={routeConstants.feedBack} element={<FeedbackPage/>}></Route>
          <Route path={routeConstants.contact} element={<ContactPage/>}></Route>
          <Route path={routeConstants.all} element={<Navigate to={routeConstants.home2}/>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default UserRoute;
