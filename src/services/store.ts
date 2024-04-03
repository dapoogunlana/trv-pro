import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import persistStore from "redux-persist/es/persistStore";
// import storage from "redux-persist/lib/storage";
import createSagaMiddleware from  "redux-saga";
import rootSaga from "./sagas/root-saga";
import userReducer from "./actions-reducers/user-data";
import airportListReducer from "./actions-reducers/airport-list";

export interface iStoreState {
    user: any;
    airportList: {
        city: string;
        city_code: string;
        country: string;
        iata_code: string;
        name: string;
    }[];
}

const combinedReducers = combineReducers({
    user: userReducer,
    airportList: airportListReducer,
});

// const config = {
//     storage,
//     whitelist: combinedReducers,
//     key: 'root',
// }

const saggaMiddleware = createSagaMiddleware();
const middlewares = [saggaMiddleware];

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

// export const persistor = persistStore(store);

saggaMiddleware.run(rootSaga);