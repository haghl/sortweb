import React, { memo, useCallback, useState } from "react";
import { useAppDispatch } from "../store";
import combineSlice from "../store/slices/combine";
import DATA from "../data";

function CombinMain() {
  const dispatch = useAppDispatch();
  const [text2, setText2] = useState("");

  const onClick = useCallback(() => {
    const arr = DATA.split("\n").map((x) => x.trim());
    const arr2 = text2.split("\n").map((x) => x.trim());
    const newarr = arr2.filter((x) => !arr.includes(x));

    dispatch(combineSlice.actions.setCombine(newarr));
    dispatch(combineSlice.actions.setSequence(1));
  }, [text2]);

  return (
    <>
      <div className="combinMain">
        {/* <div>
          <p>양식</p>
          <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} />
        </div> */}
        <p>취합한 거</p>
        <textarea onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText2(e.target.value)} />
      </div>
      <button onClick={onClick}>결과</button>
    </>
  );
}

export default CombinMain;
