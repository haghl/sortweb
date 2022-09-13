import React, { memo, useCallback, useEffect, useState } from "react";
import { useAppDispatch } from "../store";
import tableSlice from "../store/slices/table";

import InInput from "./InInput";

function DataTable() {
  const dispatch = useAppDispatch();
  const [inputArr, setInputArr] = useState<string[]>([]);
  const [inputData, setInputData] = useState("");

  // 인풋 늘리기
  const onClickGrowInput = useCallback(() => {
    const arr = [...inputArr, ""];
    setInputArr(arr);
  }, [inputArr]);

  // 인풋 줄이기
  const onClickDropInput = useCallback(
    (i: number) => {
      const arr = [...inputArr];
      arr.splice(i, 1);
      setInputArr(arr);
    },
    [inputArr]
  );

  // 리덕스에 데이터 저장
  const onSubmitHederData = useCallback(() => {
    const arr = [inputData, ...inputArr, "그 외"].map((x) => x.trim());
    console.log(arr);
    if (inputData !== "") {
      dispatch(tableSlice.actions.setSequence(1));
      dispatch(tableSlice.actions.setHeader(arr));
    }
  }, [inputArr, inputData]);

  return (
    <div className="inputWrap">
      <div className="table_input">
        <div className="inputBox">
          <input type="text" onChange={(v) => setInputData(v.target.value)} />
          <button onClick={onClickGrowInput}>+</button>
        </div>
        {inputArr.map((x, idx) => {
          return <InInput key={idx} inputArr={inputArr} setInputArr={setInputArr} index={idx} onClickDropInput={onClickDropInput} />;
        })}
      </div>
      <button className="divDataBtn" onClick={onSubmitHederData}>
        분류 데이터 등록
      </button>
    </div>
  );
}

export default DataTable;
