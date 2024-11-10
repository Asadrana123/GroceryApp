import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';  // Import the dispatch hook
import { setProducts } from '../../redux/productSlice';  // Assuming you have an action creator for adding products

const Upload = () => {
  const dispatch = useDispatch();

  // Individual states for each input field
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [unit, setUnit] = useState('Piece');
  const [image, setImage] = useState('');
  const [discount, setDiscount] = useState('');
  const [availability, setAvailability] = useState(false);
  const [rating, setRating] = useState('');
  const products=useSelector((state)=>state.products.items)
  // Handling changes for each input
  const handleChange = (e) => {
    const { name, value,  checked } = e.target;
    if (name === 'name') setName(value);
    if (name === 'description') setDescription(value);
    if (name === 'price') setPrice(value);
    if (name === 'unit') setUnit(value);
    if (name === 'image') setImage(value);
    if (name === 'discount') setDiscount(value);
    if (name === 'availability') setAvailability(checked);
    if (name === 'rating') setRating(value);
  };

  // Handle form submission and dispatch action
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name,
      description,
      price,
      unit,
      image,
      discount,
      availability,
      rating,
    };
    dispatch(setProducts([product,...products]));  
    alert('Product uploaded successfully!');
    setName('');
    setDescription('');
    setPrice('');
    setUnit('Piece');
    setImage('');
    setDiscount('');
    setAvailability(false);
    setRating('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Upload Product</h2>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="Product name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="Product description"
            rows="3"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="Product price"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Unit</label>
          <input
            type="text"
            name="unit"
            value={unit}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="e.g., Piece"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Image</label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="Enter image link"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">Discount (%)</label>
          <input
            type="number"
            name="discount"
            value={discount}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="e.g., 10"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center text-gray-700 text-sm font-medium">
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

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-2">Rating</label>
          <input
            type="number"
            name="rating"
            value={rating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:border-indigo-500"
            placeholder="e.g., 4.5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-200"
        >
          Upload Product
        </button>
      </form>
    </div>
  );
};

export default Upload;
