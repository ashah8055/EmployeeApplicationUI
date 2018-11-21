import { createStore } from "redux";
//import logger from "redux-logger";
//import createSagaMiddleware from "redux-saga";
//import rootSaga from "./sagas";
import reducers from "../reducers/index";

// const sagaMiddleware = createSagaMiddleware();

// let middleware = [sagaMiddleware];

// if(process.env.NODE_ENV === "development"){
//     middleware.push(logger);
// }

const store = createStore(reducers);

//sagaMiddleware.run(rootSaga);

export default store;
