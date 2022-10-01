import { useState, useEffect } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import usePrevious from '../Hooks/usePrevious';

const options = [
  { title: '3 Hours', param: '3h' },
  { title: '24 Hours', param: '24h' },
  { title: '7 Days', param: '7d' },
  { title: '30 Days', param: '30d' },
  { title: '3 Months', param: '3m' },
  { title: '3 Years', param: '3y' },
  { title: '5 Years', param: '5y' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Simple_select({ changePeriod }) {
  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState({
    title: '7 Days',
    param: '7d',
  });

  const prevOption = usePrevious(selectedOption);
  useEffect(() => {
    if (prevOption?.param != selectedOption && prevOption?.param) {
      changePeriod(selectedOption);
    }
  }, [selectedOption]);

  const filteredOption =
    query === ''
      ? options
      : options.filter((option) => {
          return option.title.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as="div" value={selectedOption} onChange={setSelectedOption}>
      <Combobox.Label className="block text-sm font-medium text-gray-700">
        Period
      </Combobox.Label>
      <div className="relative mt-1">
        <Combobox.Button
          className=" w-36 rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
          onChange={(event) => setQuery(event.target.value)}
          aria-hidden="true"
        >
          {selectedOption?.title}
        </Combobox.Button>

        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          <ChevronUpDownIcon
            className="h-6 w-6 text-gray-400"
            aria-hidden="true"
          />
        </Combobox.Button>

        {filteredOption.length > 0 && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredOption.map((option) => (
              <Combobox.Option
                key={option.param}
                value={option}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-3 pr-9',
                    active ? 'bg-indigo-600 text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span
                      className={classNames(
                        'block truncate',
                        selected && 'font-semibold'
                      )}
                    >
                      {option.title}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
