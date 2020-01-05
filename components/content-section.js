import { Fragment } from 'react'
import { useTheme } from '../hooks/useTheme'
import { Summary } from './summary'

export const ContentSection = ({ title, list }) => {
  const { colors } = useTheme()

  return (
    <Fragment>
      <section>
        <h2>{title}</h2>
        <ul>
          {list.map(list => (
            <li key={list.id}>
              <Summary
                category={list.category}
                date={list.date}
                title={list.title}
              />
            </li>
          ))}
        </ul>
      </section>
      <style jsx>
        {`
          section {
            margin: auto;
            max-width: 970px;
          }

          h2 {
            color: ${colors.primary};
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 0.01em;
            text-transform: uppercase;
          }

          ul {
            display: flex;
            flex-wrap: wrap;
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          @media screen and (min-width: 768px) {
            li {
              width: 50%;
            }
          }
        `}
      </style>
    </Fragment>
  )
}
