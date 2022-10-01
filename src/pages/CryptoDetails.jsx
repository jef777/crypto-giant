import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import { useNavigate, useParams } from 'react-router-dom';
import millify from 'millify';
import moment from 'moment/moment';

import {
  CurrencyDollarIcon,
  StarIcon,
  BoltIcon,
  Square3Stack3DIcon,
  ArrowTrendingUpIcon,
  InboxStackIcon,
  VariableIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';
import { ArrowLeftOnRectangleIcon } from '@heroicons/react/24/solid';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from '../services/cryptoApi';

import Loader from '../components/Loader';
import Simple_card from '../components/UI/cards/Simple_card';
import Select_period from '../components/Select_period';

import Error from './errors/Error';

const CryptoDetails = () => {
  const navigate = useNavigate();
  const { coinId } = useParams();
  const [timeperiod, setTimeperiod] = useState({
    title: '7 Days',
    param: '7d',
  });
  const { data, isFetching, isError, error } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });
  const cryptoDetails = data?.data?.coin;

  if (isFetching) return <Loader />;
  if (isError) return <Error error_msg={error} />;

  const stats = [
    {
      id: 1,
      title: 'Rank',
      value: cryptoDetails?.rank,
      icon: StarIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 2,
      title: 'Price to USD',
      value: `$ ${
        cryptoDetails?.price && millify(cryptoDetails?.price, { precision: 6 })
      }`,
      icon: CurrencyDollarIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 3,
      title: '24h Volume',
      value: `$ ${cryptoDetails?.volume && millify(cryptoDetails?.volume)}`,
      icon: BoltIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 4,
      title: 'All-time-high(daily avg.)',
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price, { precision: 6 })
      }`,
      icon: ArrowTrendingUpIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 5,
      title: 'Market Cap',
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: Square3Stack3DIcon,
      bgColor: 'bg-indigo-200',
    },
  ];

  const genericStats = [
    {
      id: 1,
      title: 'Total Supply',
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: CurrencyDollarIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 2,
      title: 'Aprroved Supply',
      value: cryptoDetails?.supply?.confirmed ? 'Yes' : 'No',
      icon: CheckBadgeIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 3,
      title: 'Circulating Supply',
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: CurrencyDollarIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 4,
      title: 'Number Of Markets',
      value: cryptoDetails?.numberOfMarkets,
      icon: InboxStackIcon,
      bgColor: 'bg-indigo-200',
    },
    {
      id: 5,
      title: 'Number Of Exchanges',
      value: cryptoDetails?.numberOfExchanges,
      icon: VariableIcon,
      bgColor: 'bg-indigo-200',
    },
  ];

  const formatCryptoHistoryData = coinHistory?.data?.history.map((t) => {
    let data = {
      price: t.price,
      timestamp: moment(t.timestamp).format('DD-MM-YY'),
    };
    return data;
  });

  return (
    <div className="h-full mb-8">
      <div className="flex bg-white bg-opacity-60 backdrop-filter py-4 px-4 mb-3 rounded-md items-center">
        <span className=" mr-4">
          <span className="cursor-pointer" onClick={() => navigate(-1)}>
            <ArrowLeftOnRectangleIcon
              className={
                'h-12 w-12, text-rose-500 animate-pulse hover:animate-none'
              }
              aria-hidden="true"
            />
          </span>
        </span>
        <h2 className="flex-1 text-3xl font-bold text-slate-500">
          {cryptoDetails.name} Statistical Breakdown
        </h2>
      </div>
      <div className="bg-white bg-opacity-60 backdrop-filter px-6 py-8 rounded-lg mb-4">
        <h2 className="text-xl font-medium text-gray-500">
          {cryptoDetails.name} Value Statistics
        </h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 md:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <Simple_card stat={stat} key={i} />
          ))}
        </ul>
        <div className="mt-8 bg-white py-6 px-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-medium text-gray-500 place-self-end  ml-16 pb-2">
              <span className=" text-teal-600 font-bold text-2xl">
                {timeperiod.title}
              </span>{' '}
              {cryptoDetails.name} Trend Chart
            </h2>
            <Select_period changePeriod={setTimeperiod} />
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              width={500}
              height={200}
              data={formatCryptoHistoryData}
              syncId="anyId"
              margin={{
                top: 0,
                right: 0,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis
                dataKey="price"
                domain={['dataMin', 'dataMax']}
                tickFormatter={(tickItem) =>
                  millify(tickItem, { precision: 2 })
                }
              />

              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#82ca9d"
                fill="#82ca9d"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="mb-8 mt-8 bg-white bg-opacity-60 backdrop-filter px-6 py-8 rounded-lg">
        <h2 className="text-xl font-medium text-gray-500">
          Other {cryptoDetails.name} Statistics
        </h2>
        <ul
          role="list"
          className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 md:gap-8 md:grid-cols-3"
        >
          {genericStats.map((stat, i) => (
            <Simple_card stat={stat} key={i} />
          ))}
        </ul>
      </div>

      <div className="bg-white p-8 rounded-md">
        <h2 className="text-xl font-medium text-gray-500 mb-6">
          More on {cryptoDetails.name}
        </h2>
        <p level={3} className="coin-details-heading">
          What is {cryptoDetails.name}?
        </p>
        <span>{HTMLReactParser(cryptoDetails.description)}</span>
      </div>
    </div>
  );
};

export default CryptoDetails;
