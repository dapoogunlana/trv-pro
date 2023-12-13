
import { IoperatorCountry } from "../../../../services/constants/interfaces/data-schemas";
import { utilityCountryKenya } from "./KenyUtilities";
import { utilityCountryNigeria } from "./NigeriaUtilities";
import { utilityCountryAlgeria } from "./UgandaUtilities";

 
export const utilityOperatorCountries: IoperatorCountry[] = [
  utilityCountryKenya,
  utilityCountryNigeria,
  utilityCountryAlgeria,
]