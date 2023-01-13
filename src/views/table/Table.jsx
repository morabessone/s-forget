/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const initialPeople = [
  {
    email: 'lindsay.walton@example.com',
    timestamp: new Date('2023-01-13T18:12:21.126Z'),
    data: {
      gbp: 56,
      ndc: 0,
      usd: 14,
      error: 962,
    },
    status: 'completed',
  },
  {
    email: 'lindsay.walton@example.com',
    timestamp: new Date('2023-01-12T18:10:21.126Z'),
    data: {
      gbp: 54,
      ndc: 0,
      usd: 11,
      error: 960,
    },
    status: 'completed',
  },
]

const newItem = {
  email: 'lindsay.walton@example.com',
  timestamp: new Date(Date.now()),
  data: {
    gbp: 56 + 1,
    ndc: 0 + 1,
    usd: 14,
    error: 962,
  },
  status: 'completed',
}

const dataParser = data => {
  const newModel = data.map(item => ({
    email: item[0] || 'milton@setandforget.io',
    timestamp: item[1],
    status: 'completed',
    data: JSON.parse(JSON.stringify(item[3])),
  }))

  return newModel
}

// localStorage.setItem('items', JSON.stringify(items));

const Table = () => {
  const [searchParams] = useSearchParams()
  const currency = searchParams.get('currency')

  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(initialPeople)

  // const handleFetch = async () => {
  //   try {
  //     const resp = await axios.get(
  //       `https://script.google.com/macros/s/AKfycbxDD5rvQoAqzoqKZusVNuY6q4t3mrW3hOWLD1VnEWQAj8Ex3GV1grbOJrG6TUb0qXgI/exec?selectedCurrency=${currency}`
  //     )
  //     console.log('data: ', resp.data.data)
  //     const newData = new Array(...resp.data.data)
  //     console.log('NewData: ', newData)
  //     const dataParsed = dataParser(newData.slice(1))
  //     console.log('DataParsed: ', dataParsed)
  //   } catch (error) {
  //     console.log('Error: ', error)
  //   }
  // }

  const handleFetch = () => {}

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(oldData => [newItem, ...oldData])
      setIsLoading(false)
    }, 30000)
    return () => clearTimeout(timer)
  }, [])

  // if (isLoading) return <Spinner />

  return (
    <div className="mx-auto max-w-7xl px-4 lg:px-8 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="px-4 lg:px-8 sm:px-6">
          {/* <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-xl font-semibold text-gray-900">Users</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name, title, email
                and role.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
              >
                Add user
              </button>
            </div>
          </div> */}
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto lg:-mx-8 sm:-mx-6">
              <div className="inline-block min-w-full py-2 align-middle lg:px-8 md:px-6">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-regal-green">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Currency
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Timestamp
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Status
                        </th>
                        {/* <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Role
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Edit</span>
                        </th> */}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {isLoading && (
                        <tr>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            ...waiting for data
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {currency}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            ...waiting for data
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            ...running
                          </td>
                        </tr>
                      )}
                      {data.map(person => (
                        <tr key={person.timestamp}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {person.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {currency}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.timestamp.getFullYear()}/
                            {person.timestamp.getMonth() + 1}/{person.timestamp.getDate()}
                            /{` `}
                            {person.timestamp.getMinutes()}:{person.timestamp.getHours()}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.status}
                          </td>
                          {/* <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.role}
                          </td> */}
                          {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                              Edit<span className="sr-only">, {person.name}</span>
                            </a>
                          </td> */}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
