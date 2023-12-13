import axios from 'axios';
import { apiLinks } from '../../config/environment';
import { IrequestFormat } from '../constants/interfaces/request-schema';
import { routeConstants } from '../constants/route-constants';

export const sendRequest = (params: IrequestFormat, success: Function, failure: Function) => {
    const request = params.external ? axios.create({}) : axios.create({ baseURL: apiLinks.url });
    request.interceptors.request.use((req: any) => {
    
        if(params.header) {
            req.headers = params.header
        }
        const token = sessionStorage.getItem('token');
        if(token) {
            req.headers['x-access-token'] = token;
        }
        return req 
    })
    return request(params.url,{
        method: params.method || 'GET',
        data: params.body
    })
    .then((result) => success(result?.data))
    .catch(error => {

        const errorStatus = error.request?.status;

        if(errorStatus === 401 || errorStatus === 403) {
            sessionStorage.clear();
            setTimeout(() => {
                window.location.href = `/${routeConstants.admin}/${routeConstants.adminLogin}`;
            }, 500);
            return
        }
        return failure(error.response?.data);
    });
}