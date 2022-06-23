import React, { useCallback, useState } from "react";
import { useAppDispatch } from "../store";
import tableSlice from "../store/slices/table";

function TextArea() {
  const dispatch = useAppDispatch();
  const [data, setData] = useState<string>();

  const onChangeData = useCallback(
    (v: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { value } = v.target;
      setData(value);
    },
    [data]
  );

  const onSubmitArea = useCallback(() => {
    if (data) {
      const textareaData = data.split("\n").map((x) => x.trim());
      console.log(textareaData);
      dispatch(tableSlice.actions.setSequence(2));
      dispatch(tableSlice.actions.setArea(textareaData));
    }
  }, [data]);

  return (
    <div className="textArea_wrap">
      <textarea placeholder="데이터 입력" onChange={onChangeData} />
      <button onClick={onSubmitArea}>등록</button>
    </div>
  );
}

export default TextArea;
