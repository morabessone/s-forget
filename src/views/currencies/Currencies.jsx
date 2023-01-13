import { Fragment, useEffect, useState } from 'react'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

import { Button, Spinner } from '../../components'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Currencies = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currencies, setCurrencies] = useState([])
  const [selected, setSelected] = useState()

  const handleFetch = () => {
    fetch(
      'https://script.google.com/macros/s/AKfycbwtO1FhMxE_ajmNTsYTf2euPF4ZgLB1E_OlUeHXHFqr3LkqeFtb0AfYCaua_WazvF24/exec?endpoint=deals/currency&api_token=pat-na1-bef1be8f-9a4f-46db-bfd4-35889d271526'
    )
      .then(response => response.json())
      .then(response => {
        setCurrencies(response.data)
        setSelected(response.data[0])
        setIsLoading(false)
      })
      .catch(() => {
        // setErrorMessage('Unable to fetch currencies')
        setIsLoading(false)
      })
  }

  useEffect(() => {
    handleFetch()
  }, [])

  if (isLoading)
    return (
      <Spinner msg="We are fetching the list of currencies from your Hubspot account." />
    )

  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="w-80">
        <Listbox value={selected} onChange={setSelected}>
          {({ open }) => (
            <>
              <Listbox.Label className="block text-lg font-medium text-white">
                Select a currency
              </Listbox.Label>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                  <span className="block truncate">{selected}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {currencies.map(item => (
                      <Listbox.Option
                        key={item}
                        className={({ active }) =>
                          classNames(
                            active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? 'font-semibold' : 'font-normal',
                                'block truncate'
                              )}
                            >
                              {item}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        <Button to={`/table?currency=${selected}`} className="mt-8">
          Run
        </Button>
      </div>
    </div>
  )
}

export default Currencies
