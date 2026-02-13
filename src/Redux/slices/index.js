import { coursesSlice } from "./courses"
import { globalSlice } from "./global"
import { cartSlice } from "./cart"

import { combineSlices } from "@reduxjs/toolkit"

const rootReducer = combineSlices(coursesSlice , globalSlice , cartSlice)

export default rootReducer
