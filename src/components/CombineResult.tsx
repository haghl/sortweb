import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

function CombineResult() {
  const COMBINDATA = useSelector<RootState, string[]>((state) => state.combineData.combine);
  const finalArr = COMBINDATA.filter((x) => {
    const text = x.replace(/\s/gi, "");
    if (text.indexOf("총회장님글") === -1 && text.indexOf("천지일보") === -1 && text.indexOf("천지일보온라인") === -1) {
      console.log(text);

      return x;
    }
  });
  const reg = /(^\d{1,2}.)/gi;
  const newarr2 = Array.from(new Set(finalArr.map((x) => x.replace(reg, "").split("/")[0])));

  console.log(newarr2);

  return (
    <div className="combinTable">
      <table>
        <thead>
          <tr>
            <td colSpan={2}>전체</td>
          </tr>
          <tr>
            <td>번호</td>
            <td>데이터</td>
          </tr>
        </thead>
        <tbody>
          {COMBINDATA.map((x, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{x}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <td>활동</td>
          </tr>
        </thead>
        <tbody>
          {newarr2.map((x, idx) => {
            return (
              <tr key={idx}>
                <td>{x}</td>
              </tr>
            );
          })}
          <tr>
            <td>총 {newarr2.length}명</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CombineResult;
