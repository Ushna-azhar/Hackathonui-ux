'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* Sign-up banner */}
      <div className="w-full h-[48px] bg-black text-white flex items-center justify-center text-sm sm:text-base font-satoshi font-normal text-[14px]">
        Sign up and get 20% off your first order. Sign Up Now
      </div>

      {/* Navbar */}
      <div className="bg-white py-4 shadow-lg">
        <div className="max-w-screen-xl mx-auto px-6 flex justify-between items-center">
          {/* Logo and Navigation Links */}
          <div className="flex items-center justify-between w-full md:w-auto">
            {/* Logo */}
            <div className="text-2xl text-black mt-[60px] font-extrabold bg-white" style={{ fontFamily: 'Integral CF' }}>
              <Link href="/">SHOP.CO</Link>
            </div>

            {/* Navigation Links for larger screens */}
            <div className="hidden md:flex mt-[60px] space-x-10 ml-10">
              <Link href="/shop" className="text-black hover:text-gray-400">Shop</Link>
              <Link href="/casual" className="text-black hover:text-gray-400">On Sale</Link>
              <Link href="/services" className="text-black hover:text-gray-400">New Arrivals</Link>
              <Link href="/contact" className="text-black hover:text-gray-400">Brands</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="24" height="24">
                  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Links */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 px-6 py-4">
            <Link href="/shop" className="text-black hover:text-gray-400">Shop</Link>
            <Link href="/casual" className="text-black hover:text-gray-400">On Sale</Link>
            <Link href="/services" className="text-black hover:text-gray-400">New Arrivals</Link>
            <Link href="/contact" className="text-black hover:text-gray-400">Brands</Link>
          </div>
        )}

       
<div className="flex items-center justify-between w-full">
  {/* Other elements on the left side (optional) */}

  <div className="flex items-center space-x-6 ml-auto">
    {/* Search Input */}
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-[100px] md:w-[400px] h-[40px] pl-10 pr-4 rounded-full bg-gray-200 text-gray -mt-4"
      />
      
      {/* Search Icon */}
      <svg
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
        width="16"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.7427 10.4078L14.9932 13.6583C15.1682 13.8333 15.1682 14.1657 14.9932 14.3407C14.8182 14.5157 14.4858 14.5157 14.3108 14.3407L11.0603 11.0902C10.6186 11.4905 9.96497 11.75 9.25 11.75C7.1924 11.75 5.5 9.9576 5.5 7.75C5.5 5.5424 7.1924 3.75 9.25 3.75C11.3076 3.75 13 5.5424 13 7.75C13 8.46497 12.74 9.11857 12.339 9.56024C12.1631 9.73427 11.8307 9.73427 11.6557 9.56024C11.4807 9.38524 11.4807 9.05285 11.7427 8.87785C11.9638 8.7567 12.2345 8.4431 12.2345 7.75C12.2345 6.5077 10.9568 5.25 9.25 5.25C7.5432 5.25 6.2655 6.5077 6.2655 7.75C6.2655 8.9923 7.5432 10.25 9.25 10.25C9.60697 10.25 9.95923 10.1834 10.2875 10.0625C10.3821 10.0297 10.499 10.0794 10.5662 10.173C10.6334 10.2666 10.5836 10.3835 10.4901 10.4507C10.4176 10.5101 10.3147 10.4895 10.2619 10.4169C10.2091 10.3444 10.269 10.2341 10.3911 10.2681C10.3972 10.2696 10.4042 10.272 10.4112 10.2745C10.469 10.2882 10.5287 10.3452 10.5986 10.4518C10.6685 10.5584 10.7497 10.662 10.8367 10.7618C10.9237 10.8616 11.015 10.9577 11.1102 11.0441C11.2054 11.1305 11.3121 11.2079 11.4201 11.2721C11.4416 11.2818 11.4763 11.2986 11.5104 11.3165C11.5555 11.3421 11.6145 11.4002 11.6903 11.5116C11.7716 11.6319 11.7875 11.7897 11.6852 11.9315C11.5965 12.0566 11.4641 12.115 11.3337 12.115C11.2591 12.115 11.1882 12.0933 11.1307 12.0495C11.104 12.0224 11.0765 11.9932 11.0517 11.9664C11.0303 11.9494 11.0094 11.9334 10.9886 11.9175C10.9681 11.9017 10.9486 11.8858 10.9301 11.8696C10.9125 11.8539 10.8949 11.8376 10.8775 11.821C10.8546 11.7983 10.8328 11.7765 10.8111 11.7548C10.811 11.7526 10.811 11.7505 10.8109 11.7484C10.8124 11.7399 10.814 11.7315 10.8157 11.7231"
          fill="currentColor"
        />
      </svg>
    </div>

    {/* Cart Icon */}
    <Link href="/cart">
      <svg
        width="23"
        height="22"
        viewBox="0 0 23 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.375 19.25C9.375 19.6208 9.26503 19.9834 9.059 20.2917C8.85298 20.6 8.56014 20.8404 8.21753 20.9823C7.87492 21.1242 7.49792 21.1613 7.1342 21.089C6.77049 21.0166 6.4364 20.838 6.17417 20.5758C5.91195 20.3136 5.73337 19.9795 5.66103 19.6158C5.58868 19.2521 5.62581 18.8751 5.76773 18.5325C5.90964 18.1899 6.14996 17.897 6.45831 17.691C6.76665 17.485 7.12916 17.375 7.5 17.375C7.99728 17.375 8.47419 17.5725 8.82582 17.9242C9.17745 18.2758 9.375 18.7527 9.375 19.25ZM17.25 17.375C16.8792 17.375 16.5166 17.485 16.2083 17.691C15.9 17.897 15.6596 18.1899 15.5177 18.5325C15.3758 18.8751 15.3387 19.2521 15.411 19.6158C15.4834 19.9795 15.662 20.3136 15.9242 20.5758C16.1864 20.838 16.5205 21.0166 16.8842 21.089C17.2479 21.1613 17.6249 21.1242 17.9675 20.9823C18.3101 20.8404 18.603 20.6 18.809 20.2917C19.015 19.9834 19.125 19.6208 19.125 19.25C19.125 18.7527 18.9275 18.2758 18.5758 17.9242C18.2242 17.5725 17.7473 17.375 17.25 17.375ZM22.0753 6.08094L19.5169 14.3966C19.3535 14.9343 19.0211 15.4051 18.569 15.739C18.1169 16.0729 17.5692 16.2521 17.0072 16.25H7.77469C7.2046 16.2482 6.65046 16.0616 6.1953 15.7183C5.74015 15.3751 5.40848 14.8936 5.25 14.3459L2.04469 3.125H1.125C0.826631 3.125 0.540483 3.00647 0.329505 2.7955C0.118526 2.58452 0 2.29837 0 2C0 1.70163 0.118526 1.41548 0.329505 1.2045C0.540483 0.993526 0.826631 0.875 1.125 0.875H2.32687C2.73407 0.876258 3.12988 1.00951 3.45493 1.25478C3.77998 1.50004 4.01674 1.84409 4.12969 2.23531L4.81312 4.625H21C21.1761 4.62499 21.3497 4.6663 21.5069 4.74561C21.664 4.82492 21.8004 4.94001 21.905 5.08164C22.0096 5.22326 22.0795 5.38746 22.1091 5.56102C22.1387 5.73458 22.1271 5.91266 22.0753 6.08094ZM19.625 9.625L17.2083 13.25H5.79167L3.375 9.625H19.625Z"
          fill="currentColor"
        />
      </svg>
    </Link>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 1.875C9.99747 1.875 8.0399 2.46882 6.37486 3.58137C4.70981 4.69392 3.41206 6.27523 2.64572 8.12533C1.87939 9.97543 1.67888 12.0112 2.06955 13.9753C2.46023 15.9393 3.42454 17.7435 4.84055 19.1595C6.25656 20.5755 8.06066 21.5398 10.0247 21.9305C11.9888 22.3211 14.0246 22.1206 15.8747 21.3543C17.7248 20.5879 19.3061 19.2902 20.4186 17.6251C21.5312 15.9601 22.125 14.0025 22.125 12C22.122 9.3156 21.0543 6.74199 19.1562 4.84383C17.258 2.94567 14.6844 1.87798 12 1.875ZM7.45969 18.4284C7.98195 17.7143 8.66528 17.1335 9.45418 16.7331C10.2431 16.3327 11.1153 16.124 12 16.124C12.8847 16.124 13.7569 16.3327 14.5458 16.7331C15.3347 17.1335 16.0181 17.7143 16.5403 18.4284C15.2134 19.3695 13.6268 19.875 12 19.875C10.3732 19.875 8.78665 19.3695 7.45969 18.4284ZM9.375 11.25C9.375 10.7308 9.52896 10.2233 9.8174 9.79163C10.1058 9.35995 10.5158 9.0235 10.9955 8.82482C11.4751 8.62614 12.0029 8.57415 12.5121 8.67544C13.0213 8.77672 13.489 9.02673 13.8562 9.39384C14.2233 9.76096 14.4733 10.2287 14.5746 10.7379C14.6759 11.2471 14.6239 11.7749 14.4252 12.2545C14.2265 12.7342 13.8901 13.1442 13.4584 13.4326C13.0267 13.721 12.5192 13.875 12 13.875C11.3038 13.875 10.6361 13.5984 10.1438 13.1062C9.65157 12.6139 9.375 11.9462 9.375 11.25ZM18.1875 16.8694C17.4583 15.9419 16.5289 15.1914 15.4688 14.6737C16.1444 13.9896 16.6026 13.1208 16.7858 12.1769C16.9689 11.2329 16.8688 10.2558 16.498 9.36861C16.1273 8.4814 15.5024 7.72364 14.702 7.19068C13.9017 6.65771 12.9616 6.37334 12 6.37334C11.0384 6.37334 10.0983 6.65771 9.29797 7.19068C8.49762 7.72364 7.87275 8.4814 7.50198 9.36861C7.13121 10.2558 7.0311 11.2329 7.21424 12.1769C7.39739 13.1208 7.85561 13.9896 8.53125 14.6737C7.4711 15.1914 6.54168 15.9419 5.8125 16.8694C4.89661 15.7083 4.32614 14.3129 4.1664 12.8427C4.00665 11.3725 4.2641 9.88711 4.90925 8.55644C5.55441 7.22578 6.5612 6.10366 7.81439 5.31855C9.06757 4.53343 10.5165 4.11703 11.9953 4.11703C13.4741 4.11703 14.9231 4.53343 16.1762 5.31855C17.4294 6.10366 18.4362 7.22578 19.0814 8.55644C19.7265 9.88711 19.984 11.3725 19.8242 12.8427C19.6645 14.3129 19.094 15.7083 18.1781 16.8694H18.1875Z" fill="black"/>
</svg>

</div>
        </div>
      </div></div>
   
    
  );
}