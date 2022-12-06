import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

import Loader from './Loader';
import Error from '../pages/errors/Error';
import News_card from './UI/cards/News_card';
import NoData from '../pages/errors/NoData';

const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ count, newsCategory }) => {
  const {
    data: cryptoNews,
    isLoading,
    isSuccess,
    isFetching,
    isError,
    error,
  } = useGetCryptoNewsQuery({
    newsCategory,
    count,
  });

  if (isFetching) return <Loader />;
  if (isError) return <Error errors={error} />;
  if (isSuccess && cryptoNews.value.length < 1) return <NoData />;

  return (
    <>
      <div className="rounded-lg">
        <dl className="py-3 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          {cryptoNews.value.map((news, i) => (
            <News_card
              key={i}
              image={news?.image?.thumbnail?.contentUrl || demoImage}
              title={news.name}
              content={news.description}
              size={'l'}
              news_source={{
                image:
                  news.provider[0]?.image?.thumbnail?.contentUrl || demoImage,
                name: news.provider[0]?.name,
                publish_time: moment(news.datePublished)
                  .startOf('ss')
                  .fromNow(),
              }}
            />
          ))}
        </dl>
      </div>
    </>
  );
};

export default News;
