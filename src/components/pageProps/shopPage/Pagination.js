import React from "react";
import Product from "../../home/Products/Product";
import { useSelector } from "react-redux";
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div key={item.product_id} className="w-full">
            <Product
              product_id={item.product_id}
              image={item.image}
              name={item.name}
              price={item.price}
              badge={item.badge}
              description={item.description}
              brand={item.brand}
              rating={item.rating}
              discount={item.discount}
              unit={item.unit}
              availability={item.availability}
            />
          </div>
        ))}
    </>
  );
}

const Pagination = () => {
  const items = useSelector((state) => state.products.items);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
        <Items currentItems={items} />
      </div>
    </div>
  );
};

export default Pagination;
