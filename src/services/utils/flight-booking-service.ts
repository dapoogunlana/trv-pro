export interface ILocationData {
    from: any;
    to: any;
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

export interface IFlightClassData {
    adults18_64Count: number;
    studentsOver18Count: number;
    seniorsOver65Count: number;
    youths12_17Count: number;
    children2_11Count: number;
    toddlersInOwnSeatUnder2Count: number;
    infantsOnLapUnder2Count: number;
    flightClass: number;
    allPassengerCount: number;
  }

export interface ICombinedFlightSearchData {
    location: ILocationData | undefined;
    date: IDateData | undefined;
    luggageCounts: ILaugageData | undefined;
    flightClass: IFlightClassData | undefined;
}

export let storedCombinedFlightData: ICombinedFlightSearchData = {
    location: {from: undefined, to: undefined},
    date: { startDate: undefined, endDate: undefined, key: 'selection' },
    luggageCounts: {checkedInCount: 0, handLuggageCount: 0},
    flightClass: undefined
}

export const generateNewCombinedFlightData = (): ICombinedFlightSearchData => {
    return {
        location: {from: undefined, to: undefined},
        date: { startDate: undefined, endDate: undefined, key: 'selection' },
        luggageCounts: {checkedInCount: 0, handLuggageCount: 0},
        flightClass: undefined
    }
}

export const updateCombinedFlightData = (data: ICombinedFlightSearchData) => {
    storedCombinedFlightData = data;
}