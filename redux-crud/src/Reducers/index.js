import { combinereducers } from "react-redux";

import Counter from "./CounterReducer";

const rootReducer = combinereducers({
    cnt: Counter
})

export default rootReducer;