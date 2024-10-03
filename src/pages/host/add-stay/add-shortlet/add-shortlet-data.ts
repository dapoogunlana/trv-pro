import { string } from "yup/lib/locale"

export interface iBasicInfo {
    apartment_name: string,
    country: string,
    state: string,
    lga: string,
    address: string,
    email: string,
    phone: string,
    website: string,
}

export interface iAdvancedInfo {}

export const sampleBasicInfo: iBasicInfo = {
    apartment_name: '',
    country: '',
    state: '',
    lga: '',
    address: '',
    email: '',
    phone: '',
    website: '',
}

export const sampleAdvancedInfo: iAdvancedInfo = {}