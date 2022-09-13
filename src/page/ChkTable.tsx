import React, { useCallback } from "react";
import DataTable from "../components/DataTable";
import TextArea from "../components/TextArea";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";
import Table from "../components/Table";
import { useAppDispatch } from "../store";
import tableSlice from "../store/slices/table";

function ChkTable() {
  const dispatch = useAppDispatch();
  const SEQUENCE = useSelector<RootState, number>((state) => state.tableData.sequence);

  console.log("TABLEHEADER : ", SEQUENCE);

  const onClickGoBack = useCallback(() => {
    if (SEQUENCE === 1) {
      dispatch(tableSlice.actions.setSequence(0));
    } else if (SEQUENCE === 2) {
      dispatch(tableSlice.actions.setSequence(1));
    }
    return;
  }, [SEQUENCE]);
  return (
    <div>
      {SEQUENCE === 0 ? <DataTable /> : SEQUENCE === 1 ? <TextArea /> : <Table />}
      <button className="goBack" onClick={onClickGoBack}>
        이전으로 돌아가기
      </button>
    </div>
  );
}

export default ChkTable;
