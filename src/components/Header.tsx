import React, { useCallback } from "react";
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import headerSlice from "../store/slices/header";
import { RootState } from "../store/reducer";
import tableSlice from "../store/slices/table";
import combineSlice from "../store/slices/combine";

function Header() {
  const dispatch = useAppDispatch();
  const PAGENUM = useSelector<RootState, number>((state) => state.pageData.page);
  const listData = [
    {
      index: 0,
      name: "숫자 세기",
    },
    {
      index: 1,
      name: "데이터 분류하기",
    },
  ];

  const onClickChangePage = useCallback((e: React.MouseEvent<HTMLAnchorElement>, idx: number) => {
    e.preventDefault();
    dispatch(headerSlice.actions.setPage(idx));
  }, []);

  const onClickReset = useCallback(() => {
    dispatch(tableSlice.actions.setReset());
    dispatch(combineSlice.actions.setReset());
  }, []);

  return (
    <div id="header">
      <ul>
        {listData.map((x) => {
          return (
            <li key={x.index}>
              <a className={PAGENUM === x.index ? "on" : ""} href="#" onClick={(e) => onClickChangePage(e, x.index)}>
                {x.name}
              </a>
            </li>
          );
        })}
      </ul>
      <button className="allReset" onClick={onClickReset}>
        전체 리셋
      </button>
    </div>
  );
}

export default Header;
