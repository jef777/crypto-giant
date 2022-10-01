import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Tooltip, AreaChart, Area, ResponsiveContainer } from 'recharts';
function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Icon_card_analytics({
  id,
  name,
  stat,
  icon,
  change,
  color,
  sparkline,
  link,
}) {
  const hex2rgba = (hex, alpha = 1) => {
    if (hex) {
      const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
      return `rgba(${r},${g},${b},${alpha})`;
    } else {
      return '#ffff';
    }
  };

  const formatSparkline = (sparkline) => {
    const avg =
      sparkline.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) /
      sparkline.length;
    const mapSparkline = sparkline.map((s) => {
      let c = { sp: parseFloat(s) - avg, org_value: parseFloat(s) };
      return c;
    });
    return mapSparkline;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className={`font-bold`}>
          <div>
            <p className="px-4">
              $
              {millify(payload[0].payload.org_value, {
                precision: 6,
              })}
            </p>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div key={id} className="bg-white  drop-shadow-lg rounded-lg ">
      <Link to={link}>
        <div
          className="relative overflow-hidden bg-white px-4 pt-5 pb-12 drop-shadow-md sm:px-6 sm:pt-6 rounded-lg"
          style={{ backgroundColor: hex2rgba(color, 0.4) }}
        >
          <dt>
            <div
              className={`absolute rounded-md p-3`}
              style={{ backgroundColor: hex2rgba(color, 0.01) }}
            >
              <img
                src={icon}
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
            <p className="text-2xl font-semibold text-slate-600">{stat}</p>
            <p
              className={classNames(
                change > 0 ? 'text-green-600' : 'text-red-600',
                'ml-2 flex items-baseline text-sm font-semibold'
              )}
            >
              {change > 0 ? (
                <ArrowUpIcon
                  className="h-5 w-5 flex-shrink-0 self-center text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ArrowDownIcon
                  className="h-5 w-5 flex-shrink-0 self-center text-red-500"
                  aria-hidden="true"
                />
              )}

              <span className="sr-only">
                {' '}
                {change > 0 ? 'Increased' : 'Decreased'} by{' '}
              </span>
              {change}
            </p>
            <div className="absolute inset-x-0 bottom-0  ">
              <ResponsiveContainer width="100%" height={50}>
                <AreaChart
                  width={500}
                  height={200}
                  data={formatSparkline(sparkline)}
                  //   syncId="anyId"
                  margin={{
                    top: 2,
                    right: 4,
                    left: 4,
                    bottom: 2,
                  }}
                >
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="sp"
                    stroke={color}
                    fill={hex2rgba(color, 0.3)}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </dd>
        </div>
      </Link>
    </div>
  );
}
