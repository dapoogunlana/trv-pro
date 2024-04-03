import { takeLatest } from "redux-saga/effects";
import { GET_AIRPORTS } from "../actions-reducers/airport-list";
import { handleAirportList } from "./handlers/handle-airport-list";


export default function* rootSaga() {
    yield takeLatest(GET_AIRPORTS, handleAirportList);
}