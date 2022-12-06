import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

import Logo from '../../assets/images/cryto-giant-squ.png';

export default function NoData() {
  return (
    <div className="flex h-[65vh] flex-col bg-slate-200 pt-16 pb-12 items-center rounded-lg">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Crypto-Giant</span>
            <img className="h-24 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-500 sm:text-5xl">
              No data...
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
