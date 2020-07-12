import { useTheme } from 'hooks/useTheme'
import { Summary } from 'components/summary'

export const ContentSection = ({ list, title }) => {
  const { fontSizes, fontWeights, mediaQueries, sizes, viewport } = useTheme()

  return (
    <>
      <section>
        <h2>{title}</h2>
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <Summary
                category={item.category}
                date={item.date}
                href={item.href}
                title={item.title}
              />
            </li>
          ))}
        </ul>
      </section>
      <style jsx>
        {`
          section {
            margin: auto;
            margin-bottom: ${sizes.extraLarge};
            max-width: ${viewport.maxWidth};
          }

          h2 {
            font-size: ${fontSizes.small};
            font-weight: ${fontWeights.bold};
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

          @media screen and (min-width: ${mediaQueries.medium}) {
            li {
              width: 48%;
            }

            li:nth-child(odd) {
              margin-right: 4%;
            }
          }
        `}
      </style>
    </>
  )
}
