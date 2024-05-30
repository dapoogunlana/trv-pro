
export interface IFilter {
  max: number | undefined;
  min: number | undefined;
  earlyestTime: number | undefined;
  latestTime: number | undefined;
  airlines: string[];
}
export const initialFilter = () => {
    return {
        max: undefined,
        min: undefined,
        earlyestTime: undefined,
        latestTime: undefined,
        airlines: [],
    };
}