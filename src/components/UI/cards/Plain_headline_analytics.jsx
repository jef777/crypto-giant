import React from 'react';

export default function Plain_headline_analytics({ key, title, value, size }) {
  return (
    <div
      key={key}
      className={`overflow-hidden rounded-lg bg-white px-4 py-5 sm:p-6  h-${size} flex items-center text-center shadow-neutral-200 shadow-lg `}
    >
      <span className="w-full">
        <dt className="truncate text-sm font-medium text-gray-500">{title}</dt>
        <dd className="mt-1 text-3xl font-semibold tracking-tight text-slate-600">
          {value}
        </dd>
      </span>
    </div>
  );
}
