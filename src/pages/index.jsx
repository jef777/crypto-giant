import React from 'react';
import millify from 'millify';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptos from '../components/Cryptos';
import Plain_headline_analytics from '../components/UI/cards/Plain_headline_analytics';
import Loader from '../components/Loader';
import Error from './errors/Error';

const Homepage = () => {
  const { data, isFetching, isError, error } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;
  if (isError) return <Error errors={error} />;

  return (
    <div className="h-full mb-8">
      <p className="text-3xl text-slate-500 font-bold mb-5 bg-white bg-opacity-50 backdrop-filter py-4 px-4 rounded-lg">
        Cryptocurrency stats
      </p>
      <main className="md:flex md:flex-1 h-full">
        <aside className=" lg:order-first lg:block lg:flex-shrink-0 md:flex md:justify-center md:items-center h-[90%]">
          <div className="relative flex h-full md:w-64 flex-col">
            <dl className=" grid gap-5  grid-flow-dense sm:grid-cols-1 md:grid-cols-1 bg-white bg-opacity-50 backdrop-filter py-4 px-6 h-full rounded-lg">
              <Plain_headline_analytics
                title="Total Cryptocurrencies"
                value={millify(globalStats.total)}
              />
              <Plain_headline_analytics
                title="Total Exchanges"
                value={millify(globalStats.totalExchanges)}
              />
              <Plain_headline_analytics
                title="Total Market Cap"
                value={`$${millify(globalStats.totalMarketCap)}`}
              />
              <Plain_headline_analytics
                title="Total 24h Volume"
                value={`$${millify(globalStats.total24hVolume)}`}
              />
              <Plain_headline_analytics
                title="Total Markets"
                value={millify(globalStats.totalMarkets)}
              />
            </dl>
          </div>
        </aside>

        <div className=" w-full mt-10 md:mt-0 md:ml-8 h-[90%]">
          <div className="w-full md:h-full">
            <div className="bg-white bg-opacity-50 backdrop-filter py-4 px-6 rounded-md">
              <h3 className="text-2xl text-slate-500 font-bold py-3">
                World's Top 10 Cryptos
              </h3>
              <Cryptos count={10} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
