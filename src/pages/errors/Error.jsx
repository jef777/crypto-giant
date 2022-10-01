import {
  ArrowDownCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function error({ errors }) {
  const [errorMsg, setErrorMsg] = useState('Something went wrong...');
  const [errorCode, setErrorCode] = useState(null);

  useEffect(() => {
    setErrorMsg(errors?.data?.message);
    setErrorCode(errors?.status);
  }, [errors]);
  return (
    <div className="flex h-[90%] flex-col bg-slate-200 pt-16 pb-12 items-center rounded-lg">
      <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Crypto-Giant</span>
            <img
              className="h-24 w-auto"
              src="/images/cryto-giant-squ.png"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            {errorCode && (
              <p className="text-xl font-semibold text-rose-400">{errorCode}</p>
            )}
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-500 sm:text-5xl">
              Error occurred...
            </h1>
            {errorMsg && (
              <p className="mt-2 text-base text-gray-500">{errorMsg}</p>
            )}
            <div className="flex mt-6 justify-center">
              <Link
                reloadDocument
                className=" text-base font-medium text-indigo-600 hover:text-indigo-500"
              >
                <span className="flex text-lg">
                  Retry
                  <ArrowPathIcon className="h-8 w-8 text-center ml-2" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
