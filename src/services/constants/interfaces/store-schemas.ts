
export interface IAirportData {
    city: string;
    city_code: string;
    country: string;
    iata_code: string;
    name: string;
}

export interface IUserData {
    email?: string;
    email_verified?: Boolean;
    first_name?: string;
    id: string;
    last_name?: string;
    userId?: string
}

export interface iStoreState {
    user: any;
    airportList: IAirportData[];
}
