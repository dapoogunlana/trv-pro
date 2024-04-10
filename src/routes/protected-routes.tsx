import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import AuthEnforcerModal from '../components/block-components/auth-enforcer-modal/auth-enforcer-modal';
import { IStateData } from '../services/constants/interfaces/data-schemas';
import { routeConstants } from '../services/constants/route-constants';

const ProctedRoutes = () => {
    
    const token = sessionStorage.getItem('token');
    const verified = useSelector((state: IStateData) => state?.user?.email_verified);
    const [overlayMode, setOverlayMode] = useState<0 | 1 | 2>(2);
    const [initialized, setInitialized] = useState(false);

    const updateOverlayMode = (count: 0 | 1 | 2) => {
        setOverlayMode(count);
    }

    useEffect(() => {
        setTimeout(() => setInitialized(true), 600);
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