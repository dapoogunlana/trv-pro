import { regexConstants } from "../../../../services/constants/validation-regex";
import { parseBoolean } from "../../../../services/utils/data-manipulation-utilits";
import { IFlightClassData } from "../../../../services/utils/flight-booking-service"


export interface IFlightPaymentData {
      amount: number;
      email: string;
      booking_reference: string;
}

export interface IFlightBookingPayload {
      contact_details: {
            c_first_name: string,
            c_last_name: string,
            c_email: string,
            c_phone_number: string,
            c_relationship_to_p: string
      },
      passenger_details: {
            passenger_type: string,
            first_name: string,
            last_name: string,
            dob: string,
            gender: string,
            title: string,
            email: string,
            phone_number: string,
            documents?: {
                  number: string,
                  issuing_date: string,
                  expiry_date: string,
                  issuing_country: string,
                  nationality_country: string,
                  document_type: string,
                  holder: boolean
            },
            number?: string,
            issuing_date?: string,
            expiry_date?: string,
            issuing_country?: string,
            nationality_country?: string,
            document_type?: string,
            holder?: string,
      }[]
}
export interface IContactPayload {
      c_first_name: string,
      c_last_name: string,
      c_email: string,
      c_phone_number: string,
      c_relationship_to_p: string
}
export interface IPassengerPayload {
      passenger_type: string,
      first_name: string,
      last_name: string,
      dob: string,
      gender: string,
      title: string,
      email: string,
      phone_number: string,
      documents?: {
            number: string,
            issuing_date: string,
            expiry_date: string,
            issuing_country: string,
            nationality_country: string,
            document_type: string,
            holder: boolean
      },
      number?: string,
      issuing_date?: string,
      expiry_date?: string,
      issuing_country?: string,
      nationality_country?: string,
      document_type?: string,
      holder?: string,
}

export interface IFlightBookingTouchedPayload {
      contact_details: {
            c_first_name: boolean,
            c_last_name: boolean,
            c_email: boolean,
            c_phone_number: boolean,
            c_relationship_to_p: boolean
      },
      passenger_details: {
            passenger_type: boolean,
            first_name: boolean,
            last_name: boolean,
            dob: boolean,
            gender: boolean,
            title: boolean,
            email: boolean,
            phone_number: boolean,
            documents?: {
                  number: boolean,
                  issuing_date: boolean,
                  expiry_date: boolean,
                  issuing_country: boolean,
                  nationality_country: boolean,
                  document_type: boolean,
                  holder: boolean
            }
            number?: boolean,
            issuing_date?: boolean,
            expiry_date?: boolean,
            issuing_country?: boolean,
            nationality_country?: boolean,
            document_type?: boolean,
            holder?: boolean
      }[]
}

export const flightPaymentInitialData = {
      email: '',
      amount: 0,
      booking_reference: '',
}

export const initialFlightBookingPayload = {
      contact_details: {
            c_first_name: "",
            c_last_name: "",
            c_email: "",
            c_phone_number: "",
            c_relationship_to_p: ""
      },
      passenger_details: [
            {
                  passenger_type: "",
                  first_name: "",
                  last_name: "",
                  dob: "",
                  gender: "",
                  title: "",
                  email: "",
                  phone_number: "",
                  number: "",
                  issuing_date: "",
                  expiry_date: "",
                  issuing_country: "",
                  nationality_country: "",
                  document_type: "",
                  holder: "true"
            }
      ]
}
export const initialContactPayload = {
      c_first_name: "",
      c_last_name: "",
      c_email: "",
      c_phone_number: "",
      c_relationship_to_p: ""
}
export const initialPassengerPayload = {
      passenger_type: "",
      first_name: "",
      last_name: "",
      dob: "",
      gender: "",
      title: "",
      email: "",
      phone_number: "",
      number: "",
      issuing_date: "",
      expiry_date: "",
      issuing_country: "",
      nationality_country: "",
      document_type: "",
      holder: "true"
}
export const initialFlightTouchedData = {
      contact_details: {
            c_first_name: false,
            c_last_name: false,
            c_email: false,
            c_phone_number: false,
            c_relationship_to_p: false
      },
      passenger_details: [
            {
                  passenger_type: false,
                  first_name: false,
                  last_name: false,
                  dob: false,
                  gender: false,
                  title: false,
                  email: false,
                  phone_number: false,
                  documents: {
                        number: false,
                        issuing_date: false,
                        expiry_date: false,
                        issuing_country: false,
                        nationality_country: false,
                        document_type: false,
                        holder: false
                  }
            }
      ]
}

export const initialContactTouchedData = {
      c_first_name: false,
      c_last_name: false,
      c_email: false,
      c_phone_number: false,
      c_relationship_to_p: false
}

export const initialPassengerTouchedData = {
      passenger_type: false,
      first_name: false,
      last_name: false,
      dob: false,
      gender: false,
      title: false,
      email: false,
      phone_number: false,
      documents: {
            number: false,
            issuing_date: false,
            expiry_date: false,
            issuing_country: false,
            nationality_country: false,
            document_type: false,
            holder: false
      }
}

export const validateForErrors = (values: IFlightBookingPayload): {bookingErr: IFlightBookingPayload, errors: object} => {
      
      let hasErrors = false;
      const errors: any = {};
      const flightErrors: IFlightBookingPayload = {
            contact_details: {
                  c_first_name: "",
                  c_last_name: "",
                  c_email: "",
                  c_phone_number: "",
                  c_relationship_to_p: ""
            },
            passenger_details: []
      };

      if(!values.contact_details?.c_email) {
            flightErrors.contact_details.c_email = 'Email is required';
            hasErrors = true;
      } else if(!regexConstants.emailPattern.test(values.contact_details?.c_email)) {
            flightErrors.contact_details.c_email = 'Invalid email';
            hasErrors = true;
      }
      if(!values.contact_details?.c_first_name) {
            flightErrors.contact_details.c_first_name = 'First name is required';
            hasErrors = true;
      }
      if(!values.contact_details?.c_last_name) {
            flightErrors.contact_details.c_last_name = 'Last name is required';
            hasErrors = true;
      }
      if(!values.contact_details?.c_phone_number) {
            flightErrors.contact_details.c_phone_number = 'Phone number is required';
            hasErrors = true;
      } else if(!regexConstants.phonePattern.test(values.contact_details?.c_phone_number)) {
            flightErrors.contact_details.c_phone_number = 'Invalid phone number';
            hasErrors = true;
      }
      if(!values.contact_details?.c_relationship_to_p) {
            flightErrors.contact_details.c_relationship_to_p = 'Relationship is required';
            hasErrors = true;
      }
      values.passenger_details.map((info, index) => {
            flightErrors.passenger_details.push(initialPassengerPayload);
            if(!info.passenger_type) {
                  flightErrors.passenger_details[index].passenger_type = 'Passenger type is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].passenger_type = '';}
            if(!info.first_name) {
                  flightErrors.passenger_details[index].first_name = 'First name is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].first_name = '';}
            if(!info.last_name) {
                  flightErrors.passenger_details[index].last_name = 'Last name is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].last_name = '';}
            if(!info.dob) {
                  flightErrors.passenger_details[index].dob = 'Date of birth is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].dob = '';}
            if(!info.gender) {
                  flightErrors.passenger_details[index].gender = 'Gender is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].gender = '';}
            if(!info.title) {
                  flightErrors.passenger_details[index].title = 'Title is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].title = '';}
            if(!info.email) {
                  flightErrors.passenger_details[index].email = 'Email is required';
                  hasErrors = true;
            } else if(!regexConstants.emailPattern.test(info.email)) {
                  flightErrors.passenger_details[index].email = 'Invalid email';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].email = '';}
            if(!info.phone_number) {
                  flightErrors.passenger_details[index].phone_number = 'Phone number is required';
                  hasErrors = true;
            } else if(!regexConstants.phonePattern.test(info.phone_number)) {
                  flightErrors.passenger_details[index].phone_number = 'Invalid phone number';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].phone_number = '';}
            if(!info.number) {
                  flightErrors.passenger_details[index].number = 'Document number is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].number = '';}
            if(!info.issuing_date) {
                  flightErrors.passenger_details[index].issuing_date = 'Issuing date is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].issuing_date = '';}
            if(!info.expiry_date) {
                  flightErrors.passenger_details[index].expiry_date = 'Expiry date is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].expiry_date = '';}
            if(!info.issuing_country) {
                  flightErrors.passenger_details[index].issuing_country = 'Issuing country is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].issuing_country = '';}
            // if(!info.documents?.nationality_country) {
            //       flightErrors.passenger_details[index].nationality_country = 'Nationality is required';
            //       hasErrors = true;
            // } else {flightErrors.passenger_details[index].nationality_country = '';}
            if(!info.document_type) {
                  flightErrors.passenger_details[index].document_type = 'Document type is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].document_type = '';}
            if(!info.holder) {
                  flightErrors.passenger_details[index].holder = 'Document holder is required';
                  hasErrors = true;
            } else {flightErrors.passenger_details[index].holder = '';}
      })

      if(hasErrors) {
            errors.any = 'true';
      }

      return {bookingErr: flightErrors, errors}
}

export const activateAllTouchFields = (touchFields: IFlightBookingTouchedPayload) => {
      const touchedData = touchFields;
      const passengerData = touchedData.passenger_details.map((passenger) => {
            return {
                  passenger_type: true,
                  first_name: true,
                  last_name: true,
                  dob: true,
                  gender: true,
                  title: true,
                  email: true,
                  phone_number: true,
                  number: true,
                  issuing_date: true,
                  expiry_date: true,
                  issuing_country: true,
                  nationality_country: true,
                  document_type: true,
                  holder: true
            }
      });
      touchedData.passenger_details = passengerData;
      return touchedData;
}


export const updateBookingData = (data: IFlightBookingPayload): IFlightBookingPayload => {
      const passenterDetails: IPassengerPayload[] = [];
      data.passenger_details.map((item) => (
            passenterDetails.push({
                  passenger_type: item.passenger_type,
                  first_name: item.first_name,
                  last_name: item.last_name,
                  dob: item.dob,
                  gender: item.gender,
                  title: item.title,
                  email: item.email,
                  phone_number: item.phone_number,
                  documents: {
                      number: item.number || '',
                      issuing_date: item.issuing_date || '',
                      expiry_date: item.expiry_date || '',
                      issuing_country: item.issuing_country || '',
                      nationality_country: item.nationality_country || '',
                      document_type: item.document_type || '',
                      holder: parseBoolean(item.holder),
                  }
            })
      ))
      return {
            contact_details: {
                c_first_name: data.contact_details.c_first_name,
                c_last_name: data.contact_details.c_last_name,
                c_email: data.contact_details.c_email,
                c_phone_number: data.contact_details.c_phone_number,
                c_relationship_to_p: data.contact_details.c_relationship_to_p
            },
            passenger_details: passenterDetails
      }
}