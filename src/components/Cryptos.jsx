import React, { useEffect, useState } from 'react';
import millify from 'millify';
import Icon_card_analytics from './UI/cards/Icon_card_analytics';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';
import Error from '../pages/errors/Error';
import NoData from '../pages/errors/NoData';

const Cryptos = ({ count, searchTerm }) => {
  const coin_count = count ? count : 10;
  const coin_searchTerm = searchTerm ? searchTerm : '';
  const {
    data: cryptosList,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCryptosQuery(coin_count);
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    if (cryptosList) {
      setCryptos(cryptosList?.data?.coins);
    }

    const filteredData = cryptosList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(coin_searchTerm)
    );

    setCryptos(filteredData);
  }, [cryptosList, coin_searchTerm]);

  if (isFetching) return <Loader />;
  if (isError) return <Error errors={error} />;
  if (isSuccess && cryptos?.length < 1) return <NoData />;

  return (
    <>
      <div className="rounded-lg">
        <dl className="py-3 grid grid-cols-1 gap-6 md:gap-5 sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {cryptos?.map((currency, i) => (
            <Icon_card_analytics
              key={i}
              link={`/cryptocurrency/${currency.uuid}`}
              id={currency.uuid}
              name={currency.name}
              stat={millify(currency.price, { precision: 5 })}
              icon={currency.iconUrl}
              change={currency.change}
              color={currency.color}
              rank={currency.rank}
              sparkline={currency.sparkline}
              symbol={currency.symbol}
            />
          ))}
        </dl>
      </div>
    </>
  );
};

export default Cryptos;
