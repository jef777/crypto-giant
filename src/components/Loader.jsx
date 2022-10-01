import React from 'react';

const Loader = () => (
  <div className="flex h-[85vh] justify-center items-center bg-white bg-opacity-60 backdrop-filter w-full mb-8  px-6 py-8 rounded-lg ">
    <span>
      <svg
        className="animate-spin -ml-1 mr-3 h-20 w-20 "
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="12"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
      </svg>
      <p className="mt-2 font-medium text-center text-slate-500">Loading...</p>
    </span>
  </div>
);

export default Loader;
