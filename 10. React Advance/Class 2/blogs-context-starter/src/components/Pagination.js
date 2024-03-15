import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, totalPage, handlePageChange } = useContext(AppContext);

  return (
    <div className="w-full border-2 shadow-md py-4 fixed bottom-0 bg-white ">
      <div className="flex justify-between w-11/12 max-w-[670px] mx-auto">
        <div className="flex gap-x-2">
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="rounded-md border-2 px-4 py-1"
            >
              Previous
            </button>
          )}

          {page < totalPage && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-md border-2 px-4 py-1"
            >
              Next
            </button>
          )}
        </div>

        <p className="font-bold text-sm">
          {/* {`Page ${page} of ${totalPage}`} */}
          Page {page} of {totalPage}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
