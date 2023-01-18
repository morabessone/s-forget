import PropTypes from 'prop-types'

const Spinner = ({ msg }) => {
  return (
    <>
      <div className="fixed top-0 right-0 z-50 flex h-screen w-screen flex-col items-center justify-center">
        <div className="h-32 w-32 animate-spin rounded-full border-t-2 border-b-2 border-regal-green"></div>
        <br />
        {msg && <p className="text-white">{msg}</p>}
        <p className="text-white">Please, wait a moment. This may take a few seconds.</p>
      </div>
    </>
  )
}

Spinner.propTypes = {
  msg: PropTypes.string,
}

export default Spinner
