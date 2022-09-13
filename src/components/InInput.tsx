import React, { useCallback, Dispatch, SetStateAction, useState, memo } from "react";

interface InInputProps {
  inputArr: string[];
  setInputArr: Dispatch<SetStateAction<string[]>>;
  onClickDropInput: (i: number) => void;
  index: number;
}

function InInput({ inputArr, setInputArr, onClickDropInput, index }: InInputProps) {
  const onChangeText = useCallback(
    (v: React.ChangeEvent<HTMLInputElement>) => {
      let arr = [...inputArr];
      arr[index] = v.target.value;
      setInputArr(arr);
    },
    [inputArr]
  );

  return (
    <div className="inputBox">
      <input type="text" onChange={onChangeText} value={inputArr[index]} />
      <button onClick={() => onClickDropInput(index)}>-</button>
    </div>
  );
}

export default InInput;
