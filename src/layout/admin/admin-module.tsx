import React, {  } from 'react';
import { Outlet  } from 'react-router-dom';

function UserModule() {
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default UserModule;
