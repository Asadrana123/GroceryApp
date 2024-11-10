// ProductUpdateModal.js
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../../../redux/productSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import "./ProductInfo.css"
const ProductUpdateModal = ({
  isOpen,
  onClose,
  productInfo,
}) => {
  const products = useSelector((state) => state.products.items);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");
  const [discount, setDiscount] = useState("");
  const [availability, setAvailability] = useState("");
  const [rating, setRating] = useState("");
  const dispatch = useDispatch();
  useEffect(()=>{
         setName(productInfo.name);
         setDescription(productInfo.description);
         setPrice(productInfo.price);
         setUnit(productInfo.unit);
         setImage(productInfo.image);
         setDiscount(productInfo.discount);
         setAvailability(productInfo.availability);
         setRating(productInfo.rating);
  },[productInfo])
  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    console.log(name);
    if (name === 'name') setName(value);
    if (name === 'description') setDescription(value);
    if (name === 'price') setPrice(value);
    if (name === 'unit') setUnit(value);
    if (name === 'image') setImage(value);
    if (name === 'discount') setDiscount(value);
    if (name === 'availability') setAvailability(checked);
    if (name === 'rating') setRating(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...productInfo,
      name,
      description,
      price,
      unit,
      image,
      discount,
      availability,
      rating,
      product_id:productInfo._id
    };
    const updatedProducts = products.map((product) =>
      product.product_id === productInfo.product_id ? updatedProduct : product
    );
    console.log(productInfo);
    console.log(updatedProducts);
    dispatch(setProducts(updatedProducts));
    onClose();
    alert('Product updated successfully!');
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
      <div style={{ maxHeight: "500px", overflowY: "auto", marginTop: "50px", scrollbarWidth: "none" }} className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Update Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>

          <div>
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={description}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
             
              rows="3"
            />
          </div>

          <div>
            <label className="block text-gray-700">Price</label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
             
            />
          </div>

          <div>
            <label className="block text-gray-700">Unit</label>
            <input
              type="text"
              name="unit"
              value={unit}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              
            />
          </div>

          <div>
            <label className="block text-gray-700">Image</label>
            <input
              type="text"
              name="image"
              value={image}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              
            />
          </div>

          <div>
            <label className="block text-gray-700">Discount (%)</label>
            <input
              type="number"
              name="discount"
              value={discount}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
             
            />
          </div>

          <div>
            <label className="flex items-center text-gray-700">
              <input
                type="checkbox"
                name="availability"
                checked={availability}
                onChange={handleChange}
                className="mr-2"
              />
              Available
            </label>
          </div>
          <div>
            <label className="block text-gray-700">Rating</label>
            <input
              type="number"
              name="rating"
              value={rating}
              onChange={handleChange}
              step="0.1"
              min="0"
              max="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"  
            />
          </div>
          <div className="flex justify-between">
          <button
              type="button"
              onClick={()=>onClose()}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg"
            >
              Update Product
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProductUpdateModal;
