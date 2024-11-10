// ProductInfo.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../redux/productSlice';
import { useNavigate } from 'react-router-dom';
import ProductUpdateModal from './ProductUpdateModal';
const ProductInfo = ({ productInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.items);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleRemoveProduct = () => {
    const updatedProducts = products.filter(
      (product) => product.product_id !== productInfo.product_id
    );
    dispatch(setProducts(updatedProducts));
    navigate('/Shop');
  };
  const handleonClose=()=>{
    setIsModalOpen(false);
    navigate("/Shop");
  }
  useEffect(()=>{
     console.log("hi");
  },[isModalOpen])
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">{productInfo.name}</h2>
      <p className="text-xl font-semibold">${productInfo.price}</p>
      <p className="text-base text-gray-600">{productInfo.description}</p>
      <p className="text-base text-gray-600 font-semibold"><span>Unit: </span>{productInfo.unit}</p>
      <p className="text-base text-gray-600 font-semibold"><span>Discount: </span>{productInfo.discount}</p>
      <p className="text-base text-gray-600 font-semibold"><span>Rating: </span>{productInfo.rating}</p>
      <p className="text-base text-gray-600 font-semibold"><span>Available: </span>{productInfo.availability?"Yes":"No"}</p>
      <p className="text-sm">Be the first to leave a review.</p>
      <button
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        onClick={handleRemoveProduct}
      >
        Remove from list
      </button>

      <button
        className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont"
        onClick={()=>setIsModalOpen(true)}
      >
        Update
      </button>

      {/* Modal for Update Form */}
      <ProductUpdateModal
        isOpen={isModalOpen}
        onClose={handleonClose}
        productInfo={productInfo}
      />
    </div>
  );
};

export default ProductInfo;
