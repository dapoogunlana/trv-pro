import { toast } from "react-toastify";

export interface IFilter {
  max: number | undefined;
  min: number | undefined;
  earlyestTime: string;
  latestTime: string;
  airlines: string[];
}
export const initialFilter = () => {
    return {
        max: 0,
        min: 0,
        earlyestTime: '',
        latestTime: '',
        airlines: [],
    };
}

export const validateAirlineFIlterInputs = (key: string, newFilter: IFilter) => {
  let changed = false;
  let filter = {...newFilter};
  if(key === 'min' && newFilter.min && newFilter.max && newFilter.min > newFilter.max) {
    toast.error('Minimum value can not be greater maximum');
    filter.min = newFilter.max;
    changed = true;
  }
  console.log({filter, changed})
  return {updatedFilter: filter, changed};
}