import { Fragment } from 'react'

export const Page = ({ children }) => (
  <Fragment>
    {children}
    <style jsx global>
      {`
        body {
          font-family: 'Assistant', sans-serif;
        }
      `}
    </style>
  </Fragment>
)
