import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import Loader from '../components/block-components/loader/loader';


const AdminRoutes = lazy(() => import("./admin-route"));
const UserRoutes = lazy(() => import("./user-route"));

function BaseRoute() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path={'admin/*'} element={<AdminRoutes/>}></Route>
          <Route path={'*'} element={<UserRoutes/>}></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRoute;
