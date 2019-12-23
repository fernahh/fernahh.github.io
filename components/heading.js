import { Fragment } from 'react'
import { useTheme } from '../hooks/useTheme'

export const H1 = ({ children }) => {
  const { sizes } = useTheme()
  return (
    <Fragment>
      <h1>
        {children}

        <style jsx>{`
          h1 {
            margin-top: ${sizes.medium};
            margin-bottom: ${sizes.medium};
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
