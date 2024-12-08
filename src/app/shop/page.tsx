'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const ProductDetailPage = () => {
  const { id } = useParams(); // Access the dynamic parameter 'id'

  // Example product data (this would typically come from an API)
  const product = {
    id: 1,
    name: "Men's T-Shirt",
    price: 29.99,
    description: "This is a high-quality men's t-shirt made from soft cotton.",
    image: '/main.png', // Main product image (your path here)
    smallImages: [
      '/main.png',
      '/main.png',
      '/main.png', // Small product image 1 (your path here)
    ], // Small product images
    rating: 4.5, // Example rating
    colors: ['Red', 'Blue', 'Green', 'Yellow', 'Black', 'White'], // Available colors
    sizes: ['S', 'M', 'L', 'XL'], // Available sizes
  };

  // Rating function
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="text-gray-400">★</span>);
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Horizontal Line with Margin from Top */}
      <hr className="my-4 border-t-2 border-gray-300" />

      <div className="flex flex-col md:flex-row gap-6 mt-6">
        {/* Left Side: Small Product Images */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 justify-start">
          {product.smallImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`product-small-${index}`}
              className="w-[152px] h-[168px] object-cover rounded-[20px_0px_0px_0px] opacity-100 cursor-pointer"
            />
          ))}
        </div>

        {/* Center: Main Product Image */}
        <div className="w-full md:w-2/4 flex justify-center">
          <img
            src={product.image}
            alt="Main Product"
            className="w-full md:w-[444px] md:h-[530px] object-cover rounded-[20px_0px_0px_0px] opacity-100"
          />
        </div>

        {/* Right Side: Product Info */}
        <div className="w-full md:w-1/4 px-4 md:px-8">
          <h2 className="text-2xl font-semibold mb-4">{product.name}</h2>

          {/* Price and Rating */}
          <p className="text-xl font-bold mb-4">${product.price}</p>
          <div className="mb-4">
            <div className="flex items-center">
              {renderStars(product.rating)}
              <span className="ml-2 text-gray-600">({product.rating} / 5)</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4">{product.description}</p>

          {/* Select Color (Circular Buttons) */}
          <div className="mb-4">
            <label className="font-medium text-gray-700">Select Color</label>
            <div className="flex gap-2 mt-2">
              {product.colors.map((color, index) => (
                <button
                  key={index}
                  style={{ backgroundColor: color.toLowerCase() }}
                  className="w-8 h-8 rounded-full border-2 border-gray-300"
                  aria-label={`Color: ${color}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Select Size (Buttons) */}
          <div className="mb-4">
            <label className="font-medium text-gray-700">Select Size</label>
            <div className="flex gap-2 mt-2">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className="px-4 py-2 rounded-md border-2 border-gray-300 hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="mb-4 flex items-center">
            <label className="font-medium text-gray-700 mr-4">Quantity</label>
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 p-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Shop Now Button */}
          <Link href="/cart">
            <button className="bg-black text-white py-2 px-8 rounded-full text-xl font-semibold w-full">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Horizontal Links: Product Detail, Rating and Review, FAQs */}
      <div className="flex justify-center space-x-12 my-6">
        <Link href="#product-detail" className="text-xl font-medium text-gray-800 hover:text-yellow-500">Product Detail</Link>
        <Link href="#rating-reviews" className="text-xl font-medium text-gray-800 hover:text-yellow-500 underline decoration-yellow-500">Rating & Review</Link>
        <Link href="#faqs" className="text-xl font-medium text-gray-800 hover:text-yellow-500">FAQs</Link>
      </div>

      {/* Rating and Reviews Section */}
      <div id="rating-reviews" className="mt-10">
        <h3 className="text-2xl font-semibold mb-4">Rating & Reviews</h3>
        <div className="border-t-2 border-gray-300 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Review Box 1 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 4 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">John Doe</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">This is an amazing product! I loved it and will buy again!</p>
            </div>

            {/* Review Box 2 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 4 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">Jane Smith</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">Great quality, would definitely recommend it to my friends!</p>
            </div>

            {/* Review Box 3 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 5 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">Emily Johnson</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">A great experience overall, I'm really happy with the purchase!</p>
            </div>

            {/* Review Box 4 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 4 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">Michael Brown</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">Pretty good quality, though there was a minor issue with delivery time.</p>
            </div>

            {/* Review Box 5 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 5 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">Sarah Lee</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">Love the style, but the size ran a little small for me.</p>
            </div>

            {/* Review Box 6 */}
            <div className="relative w-full h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
              <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={index < 4 ? "currentColor" : "none"}
                    className="w-6 h-6 text-yellow-500"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <p className="text-[18px] font-[700] text-left">Olivia White</p>
                <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-3 h-3" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-left">Overall, a good product. It could use more color options though.</p>
            </div>
          </div>
        </div>
      </div>
       {/* YOU MIGHT ALSO LIKE Section */}
       <div className="mt-10">
        <h3 className="text-3xl font-semibold text-center font-[Integral CF]">YOU MIGHT ALSO LIKE</h3>
        <div className="flex justify-center gap-8 flex-wrap pt-32">
  {/* Product 1 */}
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all">
    <img src="/p1.png" alt="Product 1" className="w-[295px] h-[298px] rounded-md object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900">Product 1</h3>
      <p className="text-sm text-gray-600 mt-2">Description of the product goes here. It's stylish and comfortable.</p>
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">Shop Now</button>
    </div>
  </div>

  {/* Product 2 */}
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all">
    <img src="/p2.png" alt="Product 2" className="w-[295px] h-[298px] rounded-md object-cover"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900">Product 2</h3>
      <p className="text-sm text-gray-600 mt-2">Description of the product goes here. It's stylish and comfortable.</p>
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">Shop Now</button>
    </div>
  </div>

  {/* Product 3 */}
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all">
    <img src="/p3.png" alt="Product 3" className="w-[295px] h-[298px] rounded-md object-cover"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900">Product 3</h3>
      <p className="text-sm text-gray-600 mt-2">Description of the product goes here. It's stylish and comfortable.</p>
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">Shop Now</button>
    </div>
  </div>

  {/* Product 4 */}
  <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-all">
    <img src="/p4.png" alt="Product 4" className="w-[295px] h-[298px] rounded-md object-cover"/>
    <div className="p-4">
      <h3 className="text-xl font-semibold text-gray-900">Product 4</h3>
      <p className="text-sm text-gray-600 mt-2">Description of the product goes here. It's stylish and comfortable.</p>
      <button className="mt-4 bg-black text-white py-2 px-4 rounded-lg w-full hover:bg-gray-800 transition-all">Shop Now</button>
    </div>
  </div>
</div>

{/* View All Button Below the Product Cards */}
<div className="flex justify-center w-full mt-12">
  <button 
    style={{
      width: '218px',
      height: '52px',
      padding: '16px 54px',
      gap: '12px',
      borderRadius: '62px',
      border: '1px solid black',
      opacity: 1,
    }}
    className="view-all-btn bg-white text-black rounded-full border-zinc-900"
  >
    View All
  </button>
</div>
</div>
      </div>
   
  );
};

export default ProductDetailPage;
