import { CheckIcon } from '@heroicons/react/20/solid'
import { useLocation } from 'react-router-dom'

const steps = [
  { id: 'Step 1', name: 'Start', href: '#', status: 'current' },
  { id: 'Step 2', name: 'Select Currencies', href: '#', status: 'upcoming' },
  { id: 'Step 3', name: 'Analize results', href: '#', status: 'upcoming' },
]

const steps2 = [
  { id: 'Step 1', name: 'Start', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Select Currencies', href: '#', status: 'current' },
  { id: 'Step 3', name: 'Analize results', href: '#', status: 'upcoming' },
]

const steps3 = [
  { id: 'Step 1', name: 'Start', href: '#', status: 'complete' },
  { id: 'Step 2', name: 'Select Currencies', href: '#', status: 'complete' },
  { id: 'Step 3', name: 'Analize results', href: '#', status: 'current' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const buildSteps = location => {
  switch (location) {
    case '/currencies':
      return steps2
    case '/table':
      return steps3
    default:
      return steps
  }
}

export default function Example() {
  const location = useLocation()
  return (
    <div className="mt-8 flex justify-center">
      <nav aria-label="Progress">
        <ol role="list" className="flex items-center">
          {buildSteps(location.pathname).map((step, stepIdx) => (
            <li
              key={step.name}
              className={classNames(
                stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                'relative'
              )}
            >
              {step.status === 'complete' ? (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-regal-green" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full bg-regal-green hover:bg-regal-green-hover"
                  >
                    <CheckIcon className="h-5 w-5 text-white" aria-hidden="true" />
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              ) : step.status === 'current' ? (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-regal-green bg-white"
                    aria-current="step"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-regal-green"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              ) : (
                <>
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                  >
                    <span
                      className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                      aria-hidden="true"
                    />
                    <span className="sr-only">{step.name}</span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  )
}
