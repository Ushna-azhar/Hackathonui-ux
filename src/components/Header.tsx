import React from 'react';
import Footer from '@/components/Footer';

export default function Header() {
  return (
    
    <div className="relative w-full top-[-130px]">
      {/* Background Section */}
      <div className="w-full h-[663px] bg-[#F2F0F1] mt-[134px] relative">
        {/* Right-aligned image */}
        <img
          src="/fashioncouple.jpeg"
          alt="Fashion Couple"
          className="w-auto h-full object-cover absolute right-0 top-0 hidden md:block"
        />
        <div className="w-auto md:w-[596px]  h-auto md:h-[243px] absolute top-[0] left-[50px] md:left-[100px] gap-[32px] opacity-[1] bg-[#F2F0F1] pt-20 px-6 md:px-0">
          {/* Heading with Tailwind's text properties */}
          <h1
            className="text-[32px] md:text-[48px] font-extrabold text-left leading-[48px] md:leading-[56px] text-black"
            style={{
              fontFamily: 'Integral CF, sans-serif', // Custom font
              textDecorationSkipInk: 'none',
            }}
          >
            FIND CLOTHES THAT MATCHES YOURSELF
          </h1>

          {/* Description Text */}
          <p
            className="mt-4 text-base font-normal leading-6 text-left text-gray-700"
            style={{
              fontFamily: 'Satoshi, sans-serif', // Custom font
              textDecorationSkipInk: 'none',
            }}
          >
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>

          {/* Shop Now Button */}
          <div className="absolute left-0 bottom-[-100px] mb-8 ml-6 md:ml-0 md:left-auto md:bottom-[-120px]">
            <button className="bg-black text-white text-lg py-2 px-8 rounded-full hover:bg-gray-800 transition-all">
              Shop Now
            </button>
          </div>
        </div>

    
      
    
        {/* Black Section with Multiple Logos */}
        <div className=" w-full h-[122px] gap-x-14 bg-black absolute bottom-0 flex justify-center items-center space-x-8 px-4 sm:px-8 md:px-16 lg:px-20">
        <svg width="167" height="34" viewBox="0 0 167 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M150.179 0.655656H166.482V3.25336C166.008 3.09436 165.512 3.0124 165.013 3.01061H155.642V15.1491H164.758C165.413 15.1491 165.996 15.0772 166.481 14.9548V17.5411C166.068 17.4443 165.499 17.3952 164.794 17.3952H155.642V29.9466H164.733C165.232 29.9466 165.826 29.874 166.481 29.7159V32.508H150.203C150.333 32.017 150.399 31.511 150.398 31.003V2.19691C150.398 1.56617 150.325 1.04435 150.179 0.655656ZM146.405 8.92219L141.695 8.88659C141.464 6.23976 139.947 3.67765 136.609 3.20567C129.459 2.56211 127.444 10.415 127.626 16.1572C127.809 21.6922 128.694 30.2015 136.075 30.2015C139.171 30.2015 142.144 27.0207 142.047 24.3383L146.405 24.3027C146.089 29.8377 139.741 33.0419 136.718 33.1516C126.389 33.5039 122.066 26.6206 121.848 16.7993C121.654 7.90346 125.296 0 135.504 0C144.244 0.121734 145.931 5.29294 146.405 8.92219ZM72.9408 28.8901L76.0611 26.2803C77.687 28.9635 79.0225 30.1886 82.2517 30.1886C85.5286 30.1886 88.285 28.1982 88.285 24.6786C88.285 22.9423 87.5802 21.522 86.1849 20.4542C85.5528 19.9559 83.951 19.0945 81.4259 17.8928C77.6507 16.0846 73.9731 13.7289 73.9731 8.99551C73.9731 3.02271 79.0467 0.388695 84.3995 0.193636C87.5681 0.0726133 91.5014 1.82174 93.091 3.78728L89.9231 6.22695C89.3581 5.17255 88.5181 4.29083 87.4923 3.6754C86.4665 3.05998 85.2932 2.73381 84.0969 2.73154C80.0541 2.73154 76.8498 7.41724 80.2 10.6464C81.0493 11.4715 82.7863 12.4909 85.4324 13.7047C89.6561 15.6838 93.2612 18.0501 93.2612 23.2825C93.2612 25.0908 92.7878 26.7779 91.853 28.3199C89.9722 31.4273 86.8278 32.9814 82.4339 32.9814C77.3838 32.9814 76.3892 31.8281 72.9408 28.8901ZM28.4893 0.655656H44.7782V3.25336C44.3051 3.09442 43.8094 3.01246 43.3103 3.01061H33.9396V15.1491H43.0554C43.7111 15.1491 44.2941 15.0772 44.7789 14.9548V17.5411C44.366 17.4443 43.7958 17.3952 43.1046 17.3952H33.9396V29.9466H43.0312C43.5289 29.9466 44.124 29.874 44.7789 29.7159V32.508H28.5143C28.6332 32.0151 28.6941 31.5101 28.6958 31.003V2.19691C28.6958 1.56617 28.6225 1.04435 28.4893 0.655656ZM0 0.655656H5.92368V0.947533C5.92368 1.21449 6.0084 1.56617 6.15434 2.01538L14.5049 27.1545L23.0754 1.90574C23.2085 1.48145 23.2818 1.06856 23.2818 0.655656H26.1586C25.8674 1.16537 25.6489 1.61529 25.515 2.01538L15.7308 31.2095C15.6339 31.4886 15.5492 31.9257 15.4766 32.5087H10.6208C10.5474 32.0674 10.4379 31.6329 10.2933 31.2095L0.704065 2.24603C0.482555 1.71187 0.251627 1.18166 0.0113903 0.655656H0ZM62.9145 17.262C66.7986 16.4968 69.7729 13.5232 69.7729 9.27457C69.7729 3.70186 65.1114 0.654944 59.8918 0.654944H50.3509C50.4841 1.14117 50.5574 1.65089 50.5574 2.18481V30.9774C50.5574 31.5968 50.4841 32.1186 50.3509 32.5073H56.0319C55.8929 32.0093 55.8235 31.4944 55.8254 30.9774V17.7476L57.6457 17.9419L67.1631 32.5073H72.8803L62.9145 17.262ZM61.9314 14.8345C60.8998 15.562 59.6611 15.9258 58.2409 15.9258H55.8133V2.97572H57.986C59.8441 2.97572 61.2878 3.43632 62.32 4.35822C63.7282 5.63394 64.4443 7.35744 64.4443 9.51804C64.4443 11.8488 63.6064 13.6214 61.9314 14.8352M120.901 31.1853L110.293 1.71211C110.175 1.37134 110.105 1.01572 110.086 0.655656H105.497C105.497 1.03225 105.436 1.43233 105.29 1.83313L95.0096 31.1853C94.875 31.6089 94.6572 32.0467 94.366 32.508H97.3275C97.3161 32.0225 97.3766 31.5733 97.5105 31.1853L100.556 22.5294H112.27L115.281 31.186C115.439 31.658 115.511 32.0951 115.511 32.508H121.654C121.301 32.0104 121.047 31.5612 120.901 31.1853ZM101.358 20.1865L106.31 5.80266L111.397 20.1865H101.358Z" fill="white"/>
</svg>
<svg width="92" height="38" viewBox="0 0 92 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_363)">
<path d="M86.8141 36.8682L73.3318 0.0322557L73.3226 0.00787354H73.0566L70.2802 7.57753L65.2258 21.3583L65.214 21.3474C63.4622 19.8135 60.9908 18.8546 57.8782 18.4976L56.9289 18.4003L57.8707 18.2805C63.0036 17.3652 66.454 14.1482 66.454 10.2723C66.454 4.95736 61.4165 1.24757 54.2006 1.24757H39.1869V1.51668H43.5494V28.98L32.9544 0.0321654L32.9448 0.00787354H32.6788L29.9024 7.57753L19.194 36.7734L19.1281 36.781C18.9451 36.8034 18.7641 36.8212 18.585 36.8346C18.3157 36.8556 18.0479 36.8681 17.7792 36.8681H6.95934L27.5265 1.51659L27.6794 1.25091H2.52491V12.1867H2.79182C2.83914 6.86007 5.96517 1.51659 12.8719 1.51659H21.2043L0.481689 37.133H28.399V26.6557H28.1321C28.0957 31.2985 25.4436 35.7082 19.6764 36.7039L19.493 36.7349L23.8853 24.7547H36.1892L40.6227 36.8682H36.2492V37.1331H53.415V36.8682H49.0228V18.5956H54.0908C59.2482 18.5956 62.2062 20.8821 62.2062 24.8669V28.1082C62.2062 28.4653 62.2306 28.9875 62.2577 29.4242V29.4401L59.5337 36.8665H55.9751V37.1314H63.3413V36.8665H59.821L62.3016 30.104C62.3067 30.1694 62.3093 30.2088 62.3093 30.2088L62.3777 30.8181L62.4436 31.2212C62.8575 33.7149 63.8186 35.548 65.2993 36.6695L65.5122 36.8229C66.6372 37.5991 68.0352 37.9922 69.6695 37.9922C71.8344 37.9922 73.2779 37.4566 74.4697 36.196L74.3134 36.0501C73.2153 37.0559 72.2939 37.4633 71.1393 37.4633C69.172 37.4633 68.1425 35.0954 68.1425 32.7602V28.2188C68.1529 27.092 67.9751 25.9712 67.6162 24.9021L67.5673 24.7613V24.7563H76.5668L81.0003 36.8699H76.6268V37.1347H91.4817V36.8699L86.8141 36.8682ZM23.9832 24.4898L30.0444 7.96485L36.0921 24.4898H23.9832ZM49.0255 18.3299V1.51659H52.8939C58.0615 1.51659 60.7897 4.56507 60.7897 10.3294C60.7897 16.4599 59.2236 18.3299 54.0908 18.3299H49.0255ZM67.4624 24.4898L67.4362 24.4244C67.0363 23.4578 66.454 22.5759 65.7207 21.826L65.4673 21.5745L65.4403 21.5494L70.4186 7.96485L76.4663 24.4898H67.4624Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_22_363">
<rect width="91" height="38" fill="white" transform="translate(0.481689)"/>
</clipPath>
</defs>
</svg>
<svg width="157" height="36" viewBox="0 0 157 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_365)">
<path d="M141.794 11.2934L141.502 11.3855C140.369 9.04204 138.749 7.17651 136.644 5.78893C134.571 4.40133 131.964 3.70752 128.822 3.70752C127.073 3.70752 125.405 4.06211 123.818 4.77129C122.231 5.44972 120.838 6.42104 119.64 7.68525C118.474 8.91865 117.534 10.4142 116.822 12.1718C116.109 13.9294 115.753 15.872 115.753 17.9997C115.753 20.1273 116.109 22.0699 116.822 23.8275C117.534 25.5851 118.474 27.096 119.64 28.3603C120.838 29.5937 122.231 30.5496 123.818 31.228C125.405 31.9063 127.073 32.2455 128.822 32.2455C131.931 32.2455 134.458 31.783 136.401 30.8579C138.377 29.9021 140.045 28.4528 141.405 26.5102L141.697 26.6024L141.6 29.5626C140.855 30.3026 139.997 30.9656 139.025 31.5514C138.053 32.1065 137.001 32.5844 135.867 32.9853C134.766 33.3553 133.616 33.6328 132.418 33.8178C131.219 34.0339 130.021 34.1419 128.822 34.1419C126.328 34.1419 123.948 33.7564 121.681 32.9855C119.413 32.2146 117.421 31.1354 115.705 29.7478C113.988 28.3294 112.628 26.6335 111.624 24.66C110.62 22.6558 110.117 20.4356 110.117 17.9996C110.117 15.5636 110.62 13.3589 111.624 11.3855C112.628 9.38116 113.988 7.6698 115.705 6.25142C117.421 4.83298 119.413 3.75374 121.681 3.01369C123.948 2.24279 126.328 1.85734 128.822 1.85734C130.021 1.85734 131.219 1.94984 132.418 2.13486C133.616 2.31987 134.766 2.61281 135.867 3.01369C137.001 3.38372 138.053 3.86167 139.025 4.44757C139.997 5.0026 140.855 5.65013 141.6 6.39017L141.794 11.2934ZM34.7337 20.1277C34.3776 20.2817 34.0375 20.4822 33.7134 20.7293C33.3893 20.9758 33.2273 21.315 33.2273 21.7469V27.4359C31.6726 29.5636 29.6807 31.2133 27.2515 32.385C24.8223 33.5568 22.1339 34.1427 19.1865 34.1427C16.6925 34.1427 14.3119 33.7572 12.0447 32.9863C9.77742 32.2154 7.78547 31.1362 6.06882 29.7486C4.3522 28.3302 2.99183 26.6343 1.98774 24.6608C0.983707 22.6566 0.481689 20.4364 0.481689 18.0004C0.481689 15.5644 0.983707 13.3597 1.98774 11.3863C2.99183 9.38192 4.3522 7.67056 6.06882 6.25218C7.78547 4.83374 9.77742 3.75451 12.0447 3.01449C14.3119 2.24356 16.6925 1.8581 19.1865 1.8581C20.3849 1.8581 21.5833 1.9506 22.7818 2.13561C23.9801 2.32062 25.1299 2.61357 26.2312 3.01445C27.3648 3.38447 28.4175 3.86243 29.3891 4.44832C30.3608 5.00335 31.2192 5.65089 31.9642 6.39093L32.1588 11.2937L31.8673 11.3859C30.7337 9.04238 29.1142 7.17683 27.0089 5.78925C24.936 4.40165 22.3286 3.70784 19.1868 3.70784C17.4378 3.70784 15.7698 4.06245 14.1828 4.77165C12.5957 5.45005 11.2029 6.42136 10.0045 7.68557C8.83844 8.919 7.89917 10.4145 7.18667 12.1721C6.47405 13.9297 6.11774 15.8724 6.11774 18C6.11774 20.0968 6.45784 22.024 7.13804 23.7816C7.85063 25.5392 8.78993 27.0501 9.95594 28.3144C11.1543 29.5478 12.547 30.5191 14.1341 31.2283C15.7212 31.9067 17.4055 32.2459 19.1868 32.2459C22.5554 32.2459 25.438 31.6292 27.8348 30.3958V21.7465C27.8348 21.315 27.6568 20.9758 27.3007 20.7289C26.9766 20.4824 26.6527 20.2819 26.329 20.1273L26.3734 19.8963C26.5351 19.9245 26.8267 19.9553 27.2479 19.9885C27.6692 20.0167 28.1064 20.0475 28.5597 20.0807H32.7381C33.1268 20.0525 33.4993 20.0218 33.8556 19.9885C34.2117 19.9603 34.4869 19.9296 34.6813 19.8963L34.7337 20.1277ZM69.9237 2.82908C69.5996 2.98307 69.2757 3.18359 68.952 3.43065C68.6279 3.67714 68.4499 4.13967 68.4179 4.81822C68.3883 5.55827 68.356 6.49875 68.321 7.63967C68.321 8.74976 68.3062 10.014 68.2766 11.4323C68.2766 12.8508 68.2618 14.3926 68.2321 16.0577V21.2381C68.2025 23.2423 67.9433 24.9537 67.4545 26.3721C66.9687 27.7905 66.3209 28.9776 65.5112 29.9335C64.7339 30.8895 63.8593 31.6449 62.8876 32.2C61.9483 32.755 61.009 33.1713 60.0697 33.4488C59.1628 33.7573 58.3045 33.9423 57.4949 34.0038C56.6851 34.0963 56.0535 34.1426 55.6 34.1426C53.7539 34.1426 51.9724 33.9113 50.2557 33.4488C48.5391 33.0173 47.033 32.3081 45.7375 31.3211C44.4419 30.3344 43.4055 29.0547 42.6281 27.4822C41.8508 25.9096 41.4621 23.9978 41.4621 21.7468V16.5203V11.7099C41.4621 10.2298 41.4473 8.90384 41.4177 7.73214C41.4177 6.52954 41.4028 5.55823 41.3732 4.81818C41.3436 4.13979 41.1656 3.67726 40.8391 3.43061C40.515 3.18411 40.1911 2.98359 39.8674 2.82904L39.9119 2.59806C40.0736 2.62626 40.3329 2.65699 40.6895 2.69025C41.0782 2.71845 41.4669 2.74918 41.8555 2.78243C42.2768 2.78243 42.6817 2.79653 43.0702 2.82473H44.8192C45.2079 2.79653 45.6127 2.78243 46.0337 2.78243C46.455 2.75423 46.8437 2.7235 47.1998 2.69025C47.5884 2.66204 47.8636 2.63132 48.0254 2.59806L48.0698 2.82904C47.7137 2.98303 47.3736 3.18355 47.0496 3.43061C46.7581 3.6771 46.596 4.13963 46.5634 4.81818C46.5338 5.55823 46.5015 6.52954 46.4666 7.73214V21.7468C46.4666 25.1078 47.2925 27.59 48.9443 29.1935C50.5962 30.7969 53.0416 31.5986 56.2806 31.5986C57.2198 31.5986 58.2887 31.4906 59.4871 31.2746C60.6856 31.0281 61.803 30.5347 62.8394 29.7945C63.9082 29.0544 64.799 28.0061 65.5115 26.6493C66.2565 25.2925 66.629 23.4887 66.629 21.2377C66.629 18.8017 66.6142 16.7204 66.5845 14.9936C66.5845 13.236 66.5697 11.7405 66.5401 10.5071C66.5401 9.24282 66.5253 8.16358 66.4957 7.26933C66.466 6.37514 66.4337 5.55801 66.3988 4.81795C66.3691 4.13955 66.1911 3.67702 65.8646 3.43037C65.5405 3.18387 65.2167 2.98334 64.893 2.82876L64.9374 2.59782C65.2935 2.65928 65.6984 2.72104 66.152 2.78311C66.6052 2.81131 67.0263 2.82541 67.4152 2.82541C67.7713 2.82541 68.1761 2.81131 68.6298 2.78311C69.1156 2.72165 69.5367 2.65989 69.893 2.59782L69.9237 2.82908ZM105.178 11.2934L104.886 11.3855C103.753 9.04204 102.133 7.17651 100.028 5.78893C97.955 4.40133 95.3476 3.70752 92.2059 3.70752C90.4569 3.70752 88.7888 4.06211 87.2017 4.77129C85.6146 5.44972 84.2219 6.42104 83.0235 7.68525C81.8575 8.91865 80.9182 10.4142 80.2056 12.1718C79.4931 13.9294 79.1368 15.8721 79.1368 17.9997C79.1368 20.1273 79.4931 22.0699 80.2056 23.8275C80.9183 25.5851 81.8576 27.096 83.0235 28.3603C84.2219 29.5937 85.6146 30.5496 87.2017 31.228C88.7888 31.9063 90.4569 32.2455 92.2059 32.2455C95.3153 32.2455 97.8417 31.783 99.785 30.8579C101.761 29.9021 103.429 28.4528 104.789 26.5102L105.081 26.6024L104.984 29.5626C104.239 30.3026 103.38 30.9656 102.409 31.5514C101.437 32.1064 100.384 32.5844 99.2508 32.9853C98.1496 33.3553 96.9998 33.6328 95.8013 33.8178C94.6029 34.0338 93.4045 34.1419 92.2062 34.1419C89.7121 34.1419 87.3315 33.7564 85.0643 32.9855C82.797 32.2146 80.8051 31.1354 79.0885 29.7478C77.3718 28.3294 76.0114 26.6335 75.0074 24.66C74.0033 22.6557 73.5013 20.4356 73.5013 17.9996C73.5013 15.5636 74.0033 13.3589 75.0074 11.3855C76.0114 9.38112 77.3718 7.66976 79.0885 6.25138C80.8051 4.83294 82.797 3.7537 85.0643 3.01365C87.3315 2.24275 89.7122 1.8573 92.2062 1.8573C93.4045 1.8573 94.6029 1.94981 95.8013 2.13482C96.9998 2.31983 98.1496 2.61277 99.2508 3.01365C100.384 3.38368 101.437 3.86163 102.409 4.44753C103.38 5.00256 104.239 5.65009 104.984 6.39013L105.178 11.2934ZM156.437 33.356C156.275 33.3278 156 33.297 155.612 33.2638C155.256 33.2638 154.867 33.2497 154.446 33.2215C154.024 33.2215 153.619 33.2074 153.231 33.1792H150.316C149.928 33.2074 149.539 33.2381 149.15 33.2714C148.794 33.2996 148.519 33.3303 148.325 33.3635L148.28 33.1782C148.604 33.0242 148.928 32.8237 149.252 32.5766C149.576 32.3302 149.754 31.8676 149.786 31.1891C149.816 30.449 149.83 29.6782 149.83 28.8764C149.86 28.0747 149.875 27.165 149.875 26.1475V22.6785V18.007V13.3355V9.82025C149.875 8.80269 149.86 7.90846 149.83 7.13756C149.83 6.33585 149.816 5.56497 149.786 4.82493C149.756 4.14653 149.578 3.68401 149.252 3.43735C148.928 3.15984 148.604 2.94407 148.28 2.79005L148.325 2.6048C148.519 2.66626 148.794 2.71251 149.15 2.74356C149.539 2.74356 149.928 2.75766 150.316 2.78586C150.737 2.81406 151.142 2.82817 151.531 2.82817H153.231C153.62 2.79996 154.025 2.78586 154.446 2.78586C154.867 2.75766 155.256 2.72693 155.612 2.69368C156 2.66548 156.275 2.63475 156.437 2.60149L156.482 2.78682C156.126 2.94081 155.786 3.15656 155.461 3.43408C155.17 3.68057 155.008 4.1431 154.975 4.82166C154.946 5.5617 154.913 6.33257 154.878 7.13429V28.8732C154.908 29.6749 154.94 30.4458 154.975 31.1858C155.005 31.8642 155.167 32.3267 155.461 32.5734C155.786 32.8199 156.126 33.0204 156.482 33.1749L156.437 33.356Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_22_365">
<rect width="156" height="36" fill="white" transform="translate(0.481689)"/>
</clipPath>
</defs>
</svg>
<svg width="195" height="32" viewBox="0 0 195 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22_367)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.481689 0.90175L3.41386 4.20848V28.4106L1.24066 31.5774L14.5501 31.5978L12.1512 28.6839L11.9021 19.9679L24.7353 20.0375C28.6251 18.7425 32.6238 15.9815 32.8159 10.3996C32.7545 4.99032 29.452 1.52086 25.6177 0.830605L0.481689 0.90175ZM11.4265 2.44953V17.9977L21.2728 18.0689C23.5131 16.2623 25.2115 14.8787 25.1436 10.5411C25.1115 7.00433 24.3649 3.92011 21.0689 2.45029L11.4265 2.44953ZM38.9753 0.725402L41.9075 4.03289V28.2351L39.7343 31.4033L53.043 31.4222L50.6441 28.5083L50.395 19.7923H50.4483L64.1982 31.5206L75.6091 31.4275L65.1946 22.4193H56.5004L53.436 19.8089L63.2282 19.8619C67.118 18.5669 71.1159 15.8059 71.3088 10.224C71.2482 4.81548 67.9456 1.34527 64.1106 0.65577L38.9753 0.725402ZM49.9194 2.27318V17.8214L59.7657 17.8925C62.0068 16.0859 63.7044 14.7024 63.6365 10.364C63.6044 6.82798 62.8578 3.74301 59.5619 2.27318H49.9194ZM86.5949 0.690586H98.0708L113.009 28.4106C113.656 30.551 115.589 30.2869 116.88 31.2254H102.416L104.59 30.5457L104.454 28.4818L100.719 22.5011L88.0208 22.5722L85.3049 28.3418C85.2143 28.998 84.5123 29.496 85.0331 30.3111L86.0522 31.2958L79.805 31.155L82.5217 30.3111L92.7741 8.71181V7.23365L88.4423 1.45502L86.5949 0.690586ZM88.8236 20.5976L94.0977 10.6123L99.5888 20.5416L88.8236 20.5976ZM164.197 0.751135H175.672L190.611 28.4712C191.257 30.6116 193.191 30.3475 194.482 31.286H180.017L182.191 30.6048L182.055 28.5408L178.32 22.5616L165.622 22.6328L162.906 28.4008C162.815 29.0585 162.114 29.5565 162.634 30.3717L163.653 31.3563L157.407 31.2156L160.123 30.3717L170.376 8.77235V7.29345L166.044 1.51557L164.197 0.751135ZM166.425 20.6589L171.699 10.6736L177.191 20.6013L166.425 20.6589ZM120.849 0.402222L141.292 0.514994C147.875 2.05672 152.064 6.07868 153.363 13.0948L153.308 18.5669C152.108 24.8186 148.175 29.1319 141.238 31.3155L120.74 31.373L120.737 30.7107C123.853 30.4754 124.102 30.1196 124.11 28.2699V3.33506C124.075 1.96741 123.802 1.11594 120.794 1.02209L120.849 0.402222ZM132.469 2.53581L132.45 29.5134C135.146 29.5225 137.485 29.7753 138.806 29.1009C141.801 27.7333 143.191 25.633 143.319 23.6598L143.247 7.73016C143.248 5.1818 140.482 3.38274 138.885 2.91425C137.743 2.49116 135.465 2.47375 132.469 2.53581Z" fill="white" stroke="white" stroke-width="1.02419" stroke-miterlimit="2.613"/>
</g>
<defs>
<clipPath id="clip0_22_367">
<rect width="194" height="32" fill="white" transform="translate(0.481689)"/>
</clipPath>
</defs>
</svg>
<svg width="208" height="34" viewBox="0 0 208 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1298 30.4522C9.89114 30.4522 3.71249 23.8867 3.71249 16.7255C3.71249 9.59072 9.76182 2.89479 17.0778 2.89479C21.887 2.89479 25.3499 5.22146 28.1684 8.86674H31.7098C30.6498 6.95346 29.5125 5.19603 27.7805 3.82545C24.8072 1.42142 20.9552 0 17.1298 0C7.95243 0 0.481689 7.57464 0.481689 16.7C0.481689 25.8508 8.05633 33.3481 17.1817 33.3481C20.9044 33.3481 24.5497 31.9786 27.471 29.6774C29.3069 28.204 30.599 26.2907 31.8402 24.3255H28.2989C25.5058 27.9708 21.9389 30.4522 17.1298 30.4522ZM53.8391 13.0028C51.6163 10.1334 48.5911 8.32404 44.843 8.32404C38.1217 8.32404 32.5896 13.7798 32.5896 20.5012C32.5896 27.2214 38.1482 32.728 44.843 32.728C48.747 32.728 51.4605 31.0988 53.8391 28.1001V32.1842H56.7604V8.89216H53.8391V13.0028ZM44.6883 30.0388C39.5431 30.0388 35.4844 25.5668 35.4844 20.5266C35.4844 15.5107 39.5177 11.0132 44.6883 11.0132C49.8324 11.0132 53.8391 15.5118 53.8391 20.5266C53.8391 25.5668 49.8059 30.0388 44.6883 30.0388ZM60.3018 32.1842H63.4309V0.670921H60.3018V32.1842ZM75.2444 28.487L67.3337 8.89216H64.2312L73.7191 32.1842H76.8725L86.335 8.89216H83.2844L75.2444 28.487ZM87.6271 32.1842H90.7551V8.89216H87.6271V32.1842ZM87.6271 5.89348H90.7551V0.670921H87.6271V5.89348ZM104.224 8.32293C101.277 8.32293 99.1831 9.87478 97.2444 11.9428V8.89216H94.3485V32.1842H97.4245V17.991C97.3991 14.2429 100.501 11.0121 104.275 11.0121C109.005 11.0121 111.383 15.1228 111.383 19.3627V32.1853H114.278V19.3627C114.279 13.3134 110.739 8.32293 104.224 8.32293ZM143.311 0.670921L129.093 18.7415V0.670921H126.017V32.1842H129.093V23.5242L133.126 18.5094L143.389 32.1842H147.294L135.09 16.0269L147.294 0.670921H143.311ZM148.43 32.1842H151.482V0.670921H148.43V32.1842ZM176.738 14.7602C174.618 10.8043 170.378 8.32293 165.905 8.32293C159.236 8.32293 153.599 13.8815 153.599 20.5509C153.599 27.2711 159.287 32.7269 165.959 32.7269C169.137 32.7269 172.267 31.4602 174.566 29.2629C175.963 27.9443 176.79 26.2896 177.538 24.5576H174.256C172.601 27.7895 169.679 30.0377 165.904 30.0377C163.605 30.0377 161.355 29.107 159.65 27.5298C157.89 25.9282 157.115 23.9619 156.778 21.6363H178.263C178.264 19.2068 177.927 16.8802 176.738 14.7602ZM156.883 18.9482C157.816 14.5801 161.252 11.0121 165.959 11.0121C169.914 11.0121 174.154 13.4427 175.084 18.9482H156.883ZM180.539 32.1842H183.614V8.89216H180.539V32.1842ZM180.539 5.99738H183.614V0.670921H180.539V5.99738ZM197.136 8.32293C194.135 8.32293 192.042 9.87478 190.077 11.9428V8.89216H187.13V32.1842H190.232V17.991C190.207 14.2175 193.387 11.0121 197.186 11.0121C201.892 11.0121 204.375 15.1228 204.375 19.3627V32.1853H207.27V19.3627C207.27 13.3134 203.675 8.32293 197.136 8.32293Z" fill="white"/>
</svg>


          {/* Add as many logos as you have here */}
        </div>

      </div>
      <div className="w-full bg-white py-16 relative">
  {/* Updated New Arrivals heading */}
  <h2
    className="w-[403px] h-[58px] mb-12 font-bold text-center text-gray-900"
    style={{
      fontFamily: 'Integral CF',
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '57.6px',
      textAlign: 'center',
      textDecoration: 'none',
      textUnderlinePosition: 'from-font',
      textDecorationSkipInk: 'none',
      position: 'absolute',
      top: '80px',
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    }}
  >
    NEW ARRIVALS
  </h2>

  {/* Product cards below the heading */}
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

  {/* View All Button (Positioned before the horizontal line) */}
  <button 
    style={{
      width: '218px',
      height: '52px',
      padding: '16px 54px',
      gap: '12px',
      borderRadius: '62px',
      border: '1px solid black',
      opacity: 1,
      position: 'absolute',
      top: '700px',  // Adjusted to position the button below the last product card
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    }}
    className="view-all-btn bg-white text-black rounded-full border-zinc-900"
  >
    View All
  </button>

  {/* Light gray horizontal line after "View All" button */}
  <div 
    style={{
      borderTop: '1px solid lightgray',  // Light gray horizontal line
      marginTop: '180px',  // Added margin to create a gap between button and line
      marginBottom: '40px',  // Adjust margin-bottom for overall spacing
    }}
  ></div>

  {/* Top Selling heading */}
  <h2 
  className="w-[403px] h-[58px] mb-12 font-bold text-center text-gray-900" 
  style={{
    fontFamily: 'Integral CF', 
    fontSize: '48px', 
    fontWeight: '700', 
    lineHeight: '57.6px', 
    textAlign: 'center', 
    textDecoration: 'none', 
    textUnderlinePosition: 'from-font', 
    textDecorationSkipInk: 'none', 
    position: 'relative',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 10,
  }}
>
  TOP SELLING
</h2>

{/* Product cards for Top Selling */}
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
<div className="flex justify-center items-center w-full h-screen bg-white">
  <div 
    className="relative w-[1239px] h-[866px] bg-[#F0F0F0] rounded-[40px]"
    style={{ top: "50px" }} // Adjust the top space here
  >
    {/* Images */}
    <div className="absolute top-1/2 left-16 flex gap-4 flex-wrap transform -translate-y-1/2">
      {/* Image 1 with Text */}
      <div className="relative">
        <img 
          src="/casual.png" 
          alt="Casual"
          className="w-[409px] h-[289px] object-cover rounded-[20px] shadow-lg"
        />
        <p 
          className="absolute top-4 left-4 text-[36px] font-[700] leading-[48.6px] text-black bg-opacity-50 px-3 py-1 rounded-[10px] font-[Satoshi]"
        >
          Casual
        </p>
      </div>

      {/* Image 2 with Text */}
      <div className="relative">
        <img 
          src="/formal.png" 
          alt="Formal"
          className="w-[684px] h-[289px] object-cover rounded-[20px] shadow-lg"
        />
        <p 
          className="absolute top-4 left-4 text-[36px] font-[700] leading-[48.6px] text-black bg-opacity-50 px-3 py-1 rounded-[10px] font-[Satoshi]"
        >
          Formal
        </p>
      </div>

      {/* Image 3 with Text */}
      <div className="relative">
        <img 
          src="/girl.png" 
          alt="Girl"
          className="w-[684px] h-[289px] object-cover rounded-[20px] shadow-lg"
        />
        <p 
          className="absolute top-4 left-4 text-[36px] font-[700] leading-[48.6px] text-black bg-opacity-50 px-3 py-1 rounded-[10px] font-[Satoshi]"
        >
          Party
        </p>
      </div>

      {/* Image 4 with Text */}
      <div className="relative">
        <img 
          src="/bbbbb.png" 
          alt="Other"
          className="w-[409px] h-[289px] object-cover rounded-[20px] shadow-lg"
        />
        <p 
          className="absolute top-4 left-4 text-[36px] font-[700] leading-[48.6px] text-black bg-opacity-50 px-3 py-1 rounded-[10px] font-[Satoshi]"
        >
          Gym
        </p>
      </div>
    </div>
  </div>


</div>
<div className="flex justify-center items-center w-full bg-white py-16">
  <div className="relative w-full max-w-screen-lg">
    <h2 className="text-center text-[36px] font-[700] mt-20 sm:mt-40">Our Happy Customers</h2>

    <div className="flex justify-between items-center mt-8">
      {/* Left Arrow */}
      <button className="text-gray-600 bg-gray-200 p-2 rounded-full shadow-lg">
        &lt;
      </button>

      {/* Reviews Wrapper with Horizontal Scrolling */}
      <div className="flex overflow-x-auto gap-4 py-4 px-2 sm:px-0">
        {/* Review Box 1 */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
          {/* Star icons at the top */}
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

          {/* Customer Name and Verified Tick */}
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[18px] font-[700] text-left">John Doe</p>
            <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-600 text-left">This is an amazing product! I loved it and will buy again!</p>
        </div>

        {/* Repeat for the other review boxes */}
        <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
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
            <p className="text-[18px] font-[700] text-left">Jane Smith</p>
            <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <p className="text-gray-600 text-left">Great quality, would definitely recommend it to my friends!</p>
        </div>
          {/* Review Box 1 */}
          <div className="relative w-[300px] sm:w-[350px] md:w-[400px] h-[240px] p-8 border border-gray-300 rounded-tl-[20px] border-t-0 bg-white">
          {/* Star icons at the top */}
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

          {/* Customer Name and Verified Tick */}
          <div className="flex items-center gap-2 mb-2">
            <p className="text-[18px] font-[700] text-left">John Doe</p>
            <div className="w-5 h-5 rounded-full bg-green-500 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                className="w-3 h-3"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 11l3 3L22 4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-600 text-left">This is an amazing product! I loved it and will buy again!</p>
        </div>

        {/* Add more review boxes here as needed */}
      </div>

      {/* Right Arrow */}
      <button className="text-gray-600 bg-gray-200 p-2 rounded-full shadow-lg">
        &gt;
      </button>
    </div>
  </div>

      </div> </div>



)}
