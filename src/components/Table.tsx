import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function Table() {
  const TABLEHEADER = useSelector<RootState, string[]>((state) => state.tableData.header);
  const TABLEAREA = useSelector<RootState, string[]>((state) => state.tableData.area);
  const [tableData, setTableData] = useState<(string | number | null)[][]>([]);

  console.log("가로 : ", TABLEHEADER);
  console.log("세로 : ", TABLEAREA);

  useEffect(() => {
    const arr = TABLEAREA.map((x, idx) => {
      const newarr: (string | number | null)[] = TABLEHEADER.map((v, i) => {
        if (x === v) {
          return 0;
        }
        return null;
      });

      if (!newarr.includes(0)) {
        newarr[newarr.length - 1] = x;
      }
      return newarr;
    });

    setTableData(arr);
  }, []);
  return (
    <table className="data">
      <thead>
        <tr>
          {TABLEHEADER.map((x, idx) => {
            return <td key={idx}>{x}</td>;
          })}
        </tr>
      </thead>
      <tbody>
        {tableData.map((x, idx) => {
          return (
            <tr key={idx}>
              {x.map((v, i) => {
                return <td key={i}>{v}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
