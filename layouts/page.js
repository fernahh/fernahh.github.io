import { Fragment } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Meta } from '../components/meta'

export const Page = ({ children }) => {
  const { sizes } = useTheme()

  return (
    <Fragment>
      <Meta />
      <div>
        {children}
        <ul>
          <li>🌿</li>
          <li>🦉</li>
        </ul>
      </div>
      <style jsx global>
        {`
          body {
            margin: 0;
            font-family: 'Assistant', sans-serif;
          }
        `}
      </style>
      <style jsx>
        {`
          div {
            margin-left: ${sizes.small};
            margin-right: ${sizes.small};
          }

          ul {
            position: fixed;
            right: ${sizes.small};
            bottom: ${sizes.small};
            list-style-type: none;
            display: flex;
            margin: 0;
          }

          li:first-child {
            margin-right: ${sizes.extraSmall};
          }
        `}
      </style>
    </Fragment>
  )
}
