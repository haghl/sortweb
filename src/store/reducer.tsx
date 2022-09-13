import { combineReducers } from "redux";
import combineSlice from "./slices/combine";
import headerSlice from "./slices/header";
import tableSlice from "./slices/table";

const rootReducer = combineReducers({
  tableData: tableSlice.reducer,
  pageData: headerSlice.reducer,
  combineData: combineSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
