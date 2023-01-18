/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { supabase } from '../../supabase'
import { TOKEN, URL } from '../../utils'

const inProgressMockData = {
  id: 0,
  email: 'Waiting for data',
  timestamp: new Date().toISOString(),
  currency: 'Waiting for data',
  info: {
    gbpSuccess: 'Waiting for data',
    usdSuccess: 'Waiting for data',
    error: 'Waiting for data',
  },
  status: 'Running...',

}

const Table = () => {
  const [searchParams] = useSearchParams()
  const currency = searchParams.get('currency')
  const [historyList, setHistoryList] = useState([])
  // const [isLoading, setIsLoading] = useState(true)
  // const [isLoadingCurrency, setIsLoadingCurrency] = useState(true)

  const getRunHistory = async () => {
    const res = await supabase.from('runhistory').select().eq('currency', currency)
    if (!res.data.length) {
      setHistoryList([inProgressMockData])
    } else {
      setHistoryList([inProgressMockData, ...res.data])
    }
  }

  const handleFetch = async () => {
    try {
      const timestamp = new Date().toISOString()

      let res = await fetch(
        `${URL}?endpoint=deals/update&currency=${currency}&api_token=${TOKEN}`
      )
      res = await res.json()
      const { data } = res
      const element = {
        email: 'milton@setandforget.io',
        timestamp,
        currency,
        info: {
          gbpSuccess: data['GBP success'],
          usdSuccess: data['USD success'],
          error: data['NO DEAL CURRENCY '],
        },
      }

      const supabeResponse = await supabase.from('runhistory').insert(element)
      if (supabeResponse.error) throw new Error(supabeResponse.error.message)
      const getListResponse = await supabase
        .from('runhistory')
        .select()
        .eq('currency', currency)
      if (getListResponse.error) throw new Error(getListResponse.error.message)
      setHistoryList(getListResponse.data)
    } catch (error) {
      console.log('Error: ', error)
    }
  }

  const runFunctions = async () => {
    await getRunHistory()
    await handleFetch()
  }

  useEffect(() => {
    runFunctions()
  }, [])


  return (
    <div>
      <div className="flex items-center justify-start ml-48 my-5">
      <p className="font-montserrat text-5xl text-white">Deals</p>
      </div>
      <br></br>
      <div className="mx-auto mt-8 max-w-7xl px-4 lg:px-8 sm:px-6">
        <div className="flex items-center justify-between text-white font-semibold space-x-72 ml-28 mr-60 my-5"> 
          <p>MAIL</p>
          <p>TIMESTAMP</p>
          <p>CURRENCY</p>
          <p>STATUS</p>
        </div>
      <div className="w-full divide-y divide-gray-200 rounded-sm border bg-zinc-800 border-gray-300 lg:w-96 sm:w-1/2">
        {historyList.map(item => (
          <Item data={item} key={item.id} />
        ))}
      </div>
      </div>
    </div>
  )
}

const Item = ({ data }) => (
  <details>
    <summary className="question flex w-full cursor-pointer select-none text-white border-gray-300 items-center justify-between py-3 px-4">
      <p>&#128231; {data.email}</p>
      <p>&#9201; {data.timestamp}</p>
      <p>&#128177; {data.currency}</p>
      <p>
        {data.status ? <>&#11093;</> : <> &#9989;</>} {data.status || 'Complete'}
      </p>
    </summary>
    <div className="px-12 pt-1 pb-3">
      <ul className="max-w-md list-inside list-disc space-y-1 text-white">
        <li>GBP to USD: {data.info.gbpSuccess}</li>
        <li>USD to USD: {data.info.usdSuccess}</li>
        <li>Error: {data.info.error}</li>
      </ul>
    </div>
  </details>
)

export default Table
