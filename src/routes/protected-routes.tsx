import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthEnforcerModal from '../components/block-components/auth-enforcer-modal/auth-enforcer-modal';
import { apiLinks } from '../config/environment';
import { IStateData } from '../services/constants/interfaces/data-schemas';
import { routeConstants } from '../services/constants/route-constants';
import { sendRequest } from '../services/utils/request';

const ProctedRoutes = () => {
    
    const token = sessionStorage.getItem('token');
    const verified = useSelector((state: IStateData) => state?.user?.email_verified);
    const [overlayMode, setOverlayMode] = useState<0 | 1 | 2>(2);
    const [initialized, setInitialized] = useState(false);

    const updateOverlayMode = (count: 0 | 1 | 2) => {
        setOverlayMode(count);
    }

    const getUser = () => {
        // const request = axios.create({ baseURL: apiLinks.url });
        // request.get("user-profile/user", {withCredentials: true}).then(res => {
        //   toast.success(res.data.message);
        // }).catch((err: any) => {
        //   toast.error(err?.error || err?.message || 'Request Failed');
        // })
        // return
      sendRequest(
        {
          url: "user-profile/user",
          method: "GET",
        },
        (res: any) => {
          console.log({rask: res});
        },
        (err: any) => {
          toast.error(err?.error || err?.message || 'Request Failed');
        }
      );
    };

    useEffect(() => {
        setTimeout(() => setInitialized(true), 600);
        getUser()
    }, [verified]);

    useEffect(() => {
        if(initialized) {
            if(verified) {
                updateOverlayMode(1);
            } else {
                updateOverlayMode(0)
            }
        } else {
            if(verified) {
                updateOverlayMode(2);
            } else {
                updateOverlayMode(0)
            }
        }
    }, [verified]);

    return (
        // verified ? <Outlet/> : <Navigate to={`/${routeConstants.login}`} />
        <>
            <Outlet/>
            {overlayMode !== 2 && <AuthEnforcerModal overlayMode={overlayMode} updateOverlayMode={updateOverlayMode} init />}
        </>
    );

}

export default ProctedRoutes