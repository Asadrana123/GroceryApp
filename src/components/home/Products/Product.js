import React from "react";
import Image from "../../designLayouts/Image";
import { useNavigate } from "react-router-dom";
const Product = (props) => {
  const _id = props.name;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const navigate = useNavigate();
  const productItem = props;
  const handleProductDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: productItem,
      },
    });
  };
  return (
    <div 
    onClick={handleProductDetails}
    className="w-full relative group">
      <div className="max-w-80 max-h-80 relative overflow-y-hidden cursor-pointer ">
        <div>
          <Image className="w-full h-full" imgSrc={props.image} />
        </div>
      </div>
      <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
        <div className="flex items-center justify-between font-titleFont">
          <h2 className="text-lg text-primeColor font-bold">
            {props.name}
          </h2>
          <p className="text-[#767676] text-[14px]">${props.price}</p>
        </div>
        <div>
          <p className="text-[#767676] text-[14px]">{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
