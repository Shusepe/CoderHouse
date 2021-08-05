import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import AddressReducer from "./reducers/address.reducer";

const RootReducer = combineReducers({
  address: AddressReducer,
});

const Store = createStore(RootReducer, applyMiddleware(thunk));

export default Store;
