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

      <Cryptos count={100} />
    </div>
  );
};

export default Cryptocurrencies;
