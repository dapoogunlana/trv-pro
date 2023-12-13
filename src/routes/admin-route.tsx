import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate  } from 'react-router-dom';
import { routeConstants } from '../services/constants/route-constants';
import ProctedRoutes from './protected-routes';

const AdminModule = lazy(() => import("../layout/admin/admin-module"));
const AdminLogin = lazy(() => import("../pages/admin/login/login"));
const AdminRegister = lazy(() => import("../pages/admin/register/register"));
const AdminDashboard = lazy(() => import("../pages/admin/dashboard/dashboard"));
const AdminStats = lazy(() => import("../pages/admin/dashboard/pages/stats/stats"));
const AdminWhitelistMessaging = lazy(() => import("../pages/admin/dashboard/pages/waitlist-messaging/waitlist-messaging"));
const AdminVisitorMessaging = lazy(() => import("../pages/admin/dashboard/pages/visitor-messaging/visitor-messaging"));
const AdminPosts = lazy(() => import("../pages/admin/dashboard/pages/posts/posts"));
const AdminLearn = lazy(() => import("../pages/admin/dashboard/pages/learn/learn"));

function AdminRoute() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={routeConstants.all} element={<AdminModule/>}>
            <Route path={routeConstants.adminLogin} element={<AdminLogin/>}></Route>
            <Route path={routeConstants.register} element={<AdminRegister/>}></Route>
            <Route element={<ProctedRoutes/>}>
              <Route path={routeConstants.all} element={<AdminDashboard/>}>
                <Route path={routeConstants.adminStatistics} element={<AdminStats/>}></Route>
                <Route path={routeConstants.adminWaitlistMessages} element={<AdminWhitelistMessaging/>}></Route>
                <Route path={routeConstants.adminVisitorMessages} element={<AdminVisitorMessaging/>}></Route>
                <Route path={routeConstants.adminPosts} element={<AdminPosts/>}></Route>
                <Route path={routeConstants.adminLearn} element={<AdminLearn/>}></Route>
                <Route path={routeConstants.all} element={<Navigate to={routeConstants.adminStatistics}/>}></Route>
              </Route>
            </Route>
          </Route>
      </Routes>
    </Suspense>
  );
}

export default AdminRoute;
