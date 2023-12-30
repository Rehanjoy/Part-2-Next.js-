"use client"
import React from "react";
import { useRouter } from 'next/router';

const ProductCard = ({ name, image, price, title, slug }) => {
  const router = useRouter();

  const truncatedTitle = title.split(' ').slice(0, 40).join(' ');

  const handleClick = () => {
    // Navigate to the detailed product page with the product data
    router.push({
      pathname: '/DetailedProduct',
      query: { data: JSON.stringify ({ name, image, price, title, slug }) }
    });
  };
  return (
    <div className="max-w-sm flex flex-col justify-around rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-contain" src={image} alt={name} />
      <div className="px-6 py-4 flex flex-col h-full">
        <div className="font-bold text-xs mb-2 text-red-600">{slug}</div>
        <div className="font-bold text-md mb-2">{name}</div>
        <div className="text-sm text-gray-600 mb-2 overflow-hidden line-clamp-3">
          {truncatedTitle}
        </div>
        {price ? (
          <p className="text-red-600 text-xl font-bold line-clamp-1">{`${price}`}</p>
        ) : (
          <p className="text-green-600 text-xl font-bold line-clamp-1">Wholesale Only</p>
        )}
        <div className="mt-2">
          <button 
            onClick={handleClick}
            className="w-full bg-red-600 text-white py-2 px-4 rounded-full">
            <span className="text-base font-semibold">View</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
