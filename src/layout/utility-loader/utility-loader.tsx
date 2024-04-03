
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAirport } from "../../services/actions-reducers/airport-list";

function UtilityDatALoader(props: any) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAirport());
  }, [props]);

  return (
    <></>
  );
}
export default UtilityDatALoader;
