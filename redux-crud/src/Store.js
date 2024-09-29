import { createStore } from "react-redux";
import rootReducer from "./Reducers";

const store = createStore(rootReducer)

export default store;