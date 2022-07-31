import { compose, createStore, applyMiddleware } from "redux";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// root reducer

const middleWare = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWare));

// accept three parameter
export const store = createStore(rootReducer, undefined, composedEnhancers);
