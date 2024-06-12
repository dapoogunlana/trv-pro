
export interface ILocationData {
    address: any;
    geolocation: any;
}

export interface IDateData {
    startDate: Date | undefined;
    endDate: Date | undefined;
    key: string | undefined;
}

export interface ILaugageData {
    checkedInCount: number;
    handLuggageCount: number;
}

export interface IStayClassData {
    adults18_64Count: number;
    studentsOver18Count: number;
    seniorsOver65Count: number;
    youths12_17Count: number;
    children2_11Count: number;
    toddlersInOwnSeatUnder2Count: number;
    infantsOnLapUnder2Count: number;
    cabinClass: 'Economy' | 'Premium' | 'Business' | 'First';
    allPassengerCount: number;
  }

export interface ICombinedStaySearchData {
    location: ILocationData | undefined;
    date: IDateData | undefined;
    luggageCounts: ILaugageData | undefined;
    stayClass: IStayClassData | undefined;
    stayType: 'return' | 'one-way';
}

export let storedCombinedStayData: ICombinedStaySearchData = {
    location: {address: undefined, geolocation: undefined},
    date: { startDate: undefined, endDate: undefined, key: 'selection' },
    luggageCounts: {checkedInCount: 0, handLuggageCount: 0},
    stayClass: undefined,
    stayType: 'return',
}

export const generateNewCombinedStayData = (): ICombinedStaySearchData => {
    return {
        location: {address: undefined, geolocation: undefined},
        date: { startDate: undefined, endDate: undefined, key: 'selection' },
        luggageCounts: {checkedInCount: 0, handLuggageCount: 0},
        stayClass: undefined,
        stayType: 'return',
    }
}

export const updateCombinedStayData = (data: ICombinedStaySearchData) => {
    storedCombinedStayData = data;
}