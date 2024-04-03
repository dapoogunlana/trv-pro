export interface IUserData {
    email?: String;
    email_verified?: Boolean;
    first_name?: String;
    id: String;
    last_name?: String;
}

export interface IAirportListData {
    city: String;
    city_code: String;
    country: String;
    iata_code: String;
    name: String;
}

export interface IStateData {
    user: IUserData;
    airportList: IAirportListData;
}