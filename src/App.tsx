import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import ChkTable from "./page/ChkTable";
import { RootState } from "./store/reducer";
import CombineText from "./page/CombineText";

function App() {
  const PAGENUM = useSelector<RootState, number>((state) => state.pageData.page);
  return (
    <div className="App">
      <div className="wrap">
        <Header />
        {PAGENUM === 0 && <CombineText />}
        {PAGENUM === 1 && <ChkTable />}
      </div>
    </div>
  );
}

export default App;
