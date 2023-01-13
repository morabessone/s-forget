import { Button } from '../../components'

const Landing = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="font-montserrat text-5xl text-white">WELCOME TO</h1>
      <h1 className="text-8xl font-extrabold leading-tight text-regal-green">
        CURRENCY FX
      </h1>
      <Button to="/currencies" className="mt-6">
        START
      </Button>
    </div>
  )
}

export default Landing
