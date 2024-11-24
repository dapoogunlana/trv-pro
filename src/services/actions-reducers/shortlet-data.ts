export const GETSHORTLETDATE = 'GETSHORTLETDATE';

export const getShortletDate = (payload: any) => {
    return {
        type: GETSHORTLETDATE,
        payload
    }
}