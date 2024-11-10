import React from "react";
import Pagination from "../../components/pageProps/shopPage/Pagination";
const Shop = () => {
  return (
    <div className="max-w-container mx-auto px-4">
      <div className="w-full h-full flex pb-20 gap-10 pt-10">
        <div className="w-full mdl:w-[100%] lgl:w-[100%] h-full flex flex-col gap-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Shop;
