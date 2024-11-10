import React from "react";
import { Link } from "react-router-dom";

import Image from "../../designLayouts/Image";

const Sale = () => {
  return (
    <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
      <div className="w-full  h-auto flex flex-col gap-4 lg:gap-10">
          <Link to="/shop">
            <Image  maxheight={"500px"} className="h-full w-full object-cover" imgSrc="https://www.shutterstock.com/image-photo/woman-pushing-shopping-cart-full-260nw-2139606297.jpg" />
          </Link>
      </div>
    </div>
  );
};

export default Sale;
