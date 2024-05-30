
export interface IAirportData {
    city: string;
    city_code: string;
    country: string;
    iata_code: string;
    name: string;
}

export interface IUserData {
    email?: String;
    email_verified?: Boolean;
    first_name?: String;
    id: String;
    last_name?: String;
}

export interface iStoreState {
    user: any;
    airportList: IAirportData[];
}
