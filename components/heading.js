import { Fragment } from 'react'

export const H1 = ({ children }) => {
  return (
    <Fragment>
      <h1>
        {children}

        <style jsx>{`
          h1 {
            margin: 0;
            font-weight: 700;
            font-size: 52px;
            letter-spacing: -0.025em;
            line-height: 1.125em;
          }

          @media screen and (min-width: 768px) {
            h1 {
              font-size: 64px;
            }
          }
        `}</style>
      </h1>
    </Fragment>
  )
}

export const H3 = ({ children }) => {
  return (
    <Fragment>
      <h3>
        {children}

        <style jsx>{`
          h3 {
            margin: 0;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: -0.025em;
            line-height: 1.125em;
          }
        `}</style>
      </h3>
    </Fragment>
  )
}
