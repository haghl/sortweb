import { combineReducers } from "redux";
import headerSlice from "./slices/header";
import tableSlice from "./slices/table";

const rootReducer = combineReducers({
  tableData: tableSlice.reducer,
  pageData: headerSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
