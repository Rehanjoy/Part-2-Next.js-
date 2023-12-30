import { useRouter } from "next/router";
import { useState } from "react";

function DetailedProduct() {
  const router = useRouter();
  const product = router?.query?.data ? JSON.parse(router?.query?.data) : null;

  console.log(product);
  const [selectedImage, setSelectedImage] = useState();

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  return (
    <div className=" w-full  px-5 md:px-10 lg:px-20 py-5 ">
      <div key={product?.id} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="rounded-lg pt-12 bg-gray-50">
          <img
            className="w-full h-64 md:h-96 object-contain mx-auto"
            src={selectedImage || product?.image}
            alt="Product"
          />
          <div className="flex gap-1 m-8  justify-between  cursor-pointer">
            <img
              key={product?.id}
              onClick={() => handleImageClick(product?.image)}
              className="w-12 h-12 md:w-16 md:h-16  object-contain cursor-pointer border border-gray-300 rounded-md"
              src={product?.image}
              alt={`Thumbnail ${product?.id + 1}`}
            />
            <img
              key={product?.id}
              onClick={() => handleImageClick(product?.image)}
              className="w-12 h-12 md:w-16 md:h-16  object-contain cursor-pointer border border-gray-300 rounded-md"
              src={product?.image}
              alt={`Thumbnail ${product?.id + 1}`}
            />
            <img
              key={product?.id}
              onClick={() => handleImageClick(product?.image)}
              className="w-12 h-12 md:w-16 md:h-16  object-contain cursor-pointer border border-gray-300 rounded-md"
              src={product?.image}
              alt={`Thumbnail ${product?.id + 1}`}
            />
            <img
              key={product?.id}
              onClick={() => handleImageClick(product?.image)}
              className="w-12 h-12 md:w-16 md:h-16  object-contain cursor-pointer border border-gray-300 rounded-md"
              src={product?.image}
              alt={`Thumbnail ${product?.id + 1}`}
            />
            <img
              key={product?.id}
              onClick={() => handleImageClick(product?.image)}
              className="w-12 h-12 md:w-16 md:h-16  object-contain cursor-pointer border border-gray-300 rounded-md"
              src={product?.image}
              alt={`Thumbnail ${product?.id + 1}`}
            />
          </div>
        </div>

        <div className=" rounded-r-lg">
          <div className="flex  justify-between p-8">
            <span className="text-sm p-1 rounded-md bg-green-200 text-green-500">
              10% Newyear Offer
            </span>{" "}
            <span>
              <img
                className="w-12 h-8 object-contain"
                src="./image3.png"
                alt="sd"
              />
            </span>
          </div>
          <div className="flex  justify-between p-4">
            <p className="text-lg font-bold ">
              {product?.slug}
              <br />
              <span className="text-lg font-bold">{product?.name}</span>
            </p>
            <button className=" bg-gray-200 rounded-md text-white p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>

              <span className="text-base font-semibold"></span>
            </button>
          </div>
          <div className="flex gap-4 p-4">
            <span className="text-sm bg-purple-100 text-purple-500 rounded-md p-2 ">
              Selling out fast
            </span>{" "}
            <span className="text-sm bg-yellow-100 text-yellow-500 rounded-md p-2 ">
              Best in UAE
            </span>
          </div>
          <div className="flex gap-4 p-4 justify-between">
            <p className="text-sm  text-gray-300 rounded-md p-1 ">
              Capacity
              <br />
              <span className="text-xl text-gray-400 font-semibold">35 AH</span>
            </p>
            <p className="text-sm  text-gray-300 rounded-md p-1 ">
              Warranty
              <br />
              <span className="text-xl text-gray-400 font-semibold">
                3 Years
              </span>
            </p>
            <p className="text-sm  text-gray-300 rounded-md p-1 ">
              Price
              <br />
              <span className="text-xl text-gray-400 font-semibold">
                {product?.price || "Wholesale Only"}
              </span>
            </p>
          </div>
          <div className="flex gap-4 p-4 justify-between">
            <p className="text-sm  rounded-md p-1 ">
              Price Inclusive of VAT
              <br />
              <span className="text-2xl font-semibold">
                {product?.price || "Wholesale Only"}
              </span>
            </p>
            <button className=" bg-gray-200 rounded-md text-white p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>

              <span className="text-base font-semibold"></span>
            </button>
          </div>
          <div className="px-4 cursor-pointer">
            <div className="flex flex-col gap-2">
              <p className="px-1">Also available on</p>
              <div className="flex justify-between px-2">
                <img
                  className="w-16 h-12 p-2 bg-slate-100 object-contain"
                  src="./11.png"
                  alt="sd"
                />
                <img
                  className="w-16 h-12 p-2 bg-slate-100 object-contain"
                  src="./22.png"
                  alt="sd"
                />
                <img
                  className="w-16 h-12 p-2 bg-slate-100 object-contain"
                  src="./33.png"
                  alt="sd"
                />
                <img
                  className="w-16 h-12 p-2 bg-slate-100 object-contain"
                  src="./44.png"
                  alt="sd"
                />
              </div>
            </div>
          </div>
          <div className="m-5">
            <button className="w-full  bg-red-600 text-white py-4 px-4 rounded-full">
              <span className="text-base font-semibold">Book Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedProduct;
