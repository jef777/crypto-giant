import { useState, useEffect } from 'react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Combobox } from '@headlessui/react';
import { useGetCryptosQuery } from '../services/cryptoApi';

import usePrevious from '../Hooks/usePrevious';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Filter_news({ newsCategory, setNewsCategory }) {
  const [options, setOptions] = useState([]);

  const { data, isSuccess } = useGetCryptosQuery(100);

  const [query, setQuery] = useState('');
  const [selectedOption, setSelectedOption] = useState('Cryptocurrency');

  const prevOption = usePrevious(selectedOption);
  useEffect(() => {
    if (isSuccess == true) {
      let option_data = data?.data?.coins.map((option) => option.name);
      option_data.unshift('Cryptocurrency');
      setOptions(option_data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (prevOption && prevOption != selectedOption) {
      setNewsCategory(selectedOption);
    }
  }, [selectedOption]);

  const filteredOption =
    isSuccess && query === ''
      ? options
      : options.filter((option) => {
          return option.toLowerCase().includes(query.toLowerCase());
        });

  return (
    isSuccess && (
      <Combobox as="div" value={selectedOption} onChange={setSelectedOption}>
        <Combobox.Label className="block  font-bold text-slate-500 mt-4">
          Select Coin To Filter News
        </Combobox.Label>
        <div className="relative w-6/12">
          <Combobox.Button
            className="h-full w-full py-4 pl-10 pr-5 text-base bg-white text-gray-900 placeholder-gray-400 focus:border-white focus:placeholder-gray-200 focus:outline-none focus:ring-0 rounded-lg shadow-md"
            onChange={(event) => setQuery(event.target.value)}
            aria-hidden="true"
          >
            {selectedOption}
          </Combobox.Button>

          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
            <ChevronUpDownIcon
              className="h-6 w-6 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>

          {filteredOption.length > 0 && (
            <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {options.map((option) => (
                <Combobox.Option
                  key={option}
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
                        {option}
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
    )
  );
}
