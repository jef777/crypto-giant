import React from 'react';

export default function News_card({
  id,
  title,
  content,
  image,
  size,
  news_source,
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center">
        <img
          src={image}
          className="rounded-xl object-cover object-center shadow-md"
        />
        <div className="ml-4">
          <div className="flex items-baseline">
            <span className="bg-rose-200 text-rose-600 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
              New
            </span>
            <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
              {news_source.publish_time}
            </div>
          </div>

          <h4 className="mt-1 text-md font-semibold uppercase">{title}</h4>
          <div className="mt-4">
            <span className="text-sm text-gray-600">{content}</span>
          </div>
          <div className="flex mt-3 text-gray-600 text-xs font-semibold">
            {/* <span>
              <img
                className=" min-w-[20%] max-w-[35%]"
                src={news_source.image}
                alt=""
              />
            </span> */}
            <span className=" mr-2">Source:</span>

            <span className="px-1 bg-teal-200 text-teal-700 rounded-lg">
              {' '}
              {news_source.name}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
