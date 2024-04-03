import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { IStateData } from '../services/constants/interfaces/data-schemas';
import { routeConstants } from '../services/constants/route-constants';

const ProctedRoutes = () => {
    
    const token = sessionStorage.getItem('token');
    const verified = useSelector((state: IStateData) => state?.user?.email_verified);

    return (
        // verified ? <Outlet/> : <Navigate to={`/${routeConstants.login}`} />
        verified ? <Outlet/> : <div><h1>Balablue for life</h1></div>
    );

}

export default ProctedRoutes