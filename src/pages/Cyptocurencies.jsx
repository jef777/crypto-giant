import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Cryptos from '../components/Cryptos';

const Cryptocurrencies = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white h-full py-4 px-6 mb-8 bg-opacity-50 backdrop-filter rounded-md min-h-[88vh]">
      <h3 className="text-2xl text-slate-500 font-bold py-3">
        Top 100 Crypto Currencies
      </h3>

      <div className="flex flex-1 py-3 w-1/2">
        <div className="relative w-full text-gray-400 focus-within:text-gray-600">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            />
          </div>
          <input
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            name="search-field"
            id="search-field"
            className="h-full w-full border-transparent py-4 pl-10 pr-5 text-base text-gray-900 placeholder-gray-400 focus:border-transparent focus:placeholder-gray-200 focus:outline-none focus:ring-0 rounded-lg shadow-md"
            placeholder="Search Crypto"
            type="search"
          />
        </div>
      </div>
      <Cryptos count={100} searchTerm={searchTerm} />
    </div>
  );
};

export default Cryptocurrencies;
