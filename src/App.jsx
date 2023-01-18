import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Steps } from './components'
import { Currencies, Landing, Table as DataTable } from './views'

function App() {
  return (
    <BrowserRouter>
    <Steps />
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/currencies" element={<Currencies />} />
        <Route exact path="/table" element={<DataTable />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
