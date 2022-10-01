import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/cryto-giant-squ.png';

export default function error404() {
  return (
    <div className="flex h-screen flex-col bg-slate-200 pt-16 pb-12 items-center">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Crypto-Giant</span>
            <img className="h-24 w-auto" src={Logo} alt="" />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-3xl font-semibold text-rose-400">404</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-500 sm:text-5xl">
              Page unavailable...
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                Go back home
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <footer className="mx-auto w-full max-w-7xl flex-shrink-0 px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-center space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Contact Support
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Status
          </a>
          <span
            className="inline-block border-l border-gray-300"
            aria-hidden="true"
          />
          <a
            href="#"
            className="text-sm font-medium text-gray-500 hover:text-gray-600"
          >
            Twitter
          </a>
        </nav>
      </footer>
    </div>
  );
}
