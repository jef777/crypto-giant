import React, { useState } from 'react';
import News from '../components/News';
import Filter_news from '../components/Filter_news';

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const CryptoNews = ({ simplified }) => {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  return (
    <div className="bg-white h-full py-4 px-6 mb-8 bg-opacity-50 backdrop-filter rounded-md min-h-[88vh]">
      <h3 className="text-2xl text-slate-500 font-bold py-3">
        Top Crypto News
      </h3>

      <Filter_news
        setNewsCategory={setNewsCategory}
        newsCategory={newsCategory}
      />
      <News count={100} newsCategory={newsCategory} />
    </div>
  );
};

export default CryptoNews;
