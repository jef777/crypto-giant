import React from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';

export default function Simple_card({ stat }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <li key={stat.title} className="col-span-1 flex rounded-md shadow-sm">
      <div
        className={classNames(
          stat.bgColor,
          'flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md'
        )}
      >
        <stat.icon
          className={classNames('h-6 w-6, text-indigo-500')}
          aria-hidden="true"
        />
      </div>
      <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
        <div className="flex-1 truncate px-4 py-2 text-sm">
          <a className=" font-normal text-sm text-gray-600 hover:text-gray-600">
            {stat.title}
          </a>
          <p className="text-gray-500 text-xl font-bold">{stat.value}</p>
        </div>
        <div className="flex-shrink-0 pr-2">
          <button
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Open options</span>
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </li>
  );
}
