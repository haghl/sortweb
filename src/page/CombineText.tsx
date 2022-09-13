import { useSelector } from "react-redux";
import CombineResult from "../components/CombineResult";
import CombinMain from "../components/CombinMain";
import { RootState } from "../store/reducer";

function CombineText() {
  const SEQUENCE = useSelector<RootState, number>((state) => state.combineData.sequence);

  return (
    <div className="combineText_wrap">
      {SEQUENCE === 0 && <CombinMain />}
      {SEQUENCE === 1 && <CombineResult />}
    </div>
  );
}

export default CombineText;
