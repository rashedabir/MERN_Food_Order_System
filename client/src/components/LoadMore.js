import React, { useContext } from "react";
import { GlobalState } from "../GlobalState";

function LoadMore() {
  const state = useContext(GlobalState);
  const [page, setPage] = state.foodsAPI.page;
  const [result] = state.foodsAPI.result;
  return (
    <div className="text-center mx-auto">
      {result < page * 8 ? (
        ""
      ) : (
        <button
          className="btn btn-secondary my-5 text-uppercase edit_btn"
          onClick={() => setPage(page + 1)}
        >
          Load more
        </button>
      )}
    </div>
  );
}

export default LoadMore;
