import React, { useEffect, useState } from 'react';
import millify from 'millify';
import Icon_card_analytics from './UI/cards/Icon_card_analytics';
import { useGetCryptosQuery } from '../services/cryptoApi';

import Loader from './Loader';
import Error from '../pages/errors/Error';

const Cryptos = ({ count }) => {
  const coin_count = count ? count : 10;
  const {
    data: cryptosList,
    isFetching,
    isError,
    error,
  } = useGetCryptosQuery(coin_count);
  const [cryptos, setCryptos] = useState();

  useEffect(() => {
    setCryptos(cryptosList?.data?.coins);
  }, [cryptosList]);

  if (isFetching) return <Loader />;
  if (isError) return <Error errors={error} />;

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
