import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import rootReducer from "./index";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = createStore(persistedReducer, applyMiddleware(thunk));
export const Persistor = persistStore(Store);
