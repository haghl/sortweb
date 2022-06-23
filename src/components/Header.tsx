import React, { useCallback } from "react";
import { useAppDispatch } from "../store";
import { useSelector } from "react-redux";
import headerSlice from "../store/slices/header";
import { RootState } from "../store/reducer";

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

  return (
    <div id="header">
      <ul>
        {listData.map((x) => {
          return (
            <li>
              <a className={PAGENUM === x.index ? "on" : ""} href="#" onClick={(e) => onClickChangePage(e, x.index)}>
                {x.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Header;
