import { useTheme } from '../hooks/useTheme'

export const P = ({ children }) => {
  const { colors, fontSizes } = useTheme()

  return (
    <p>
      {children}

      <style jsx>{`
        p {
          color: ${colors.grey};
          font-size: ${fontSizes.base};
          line-height: 1.5em;
        }
      `}</style>
    </p>
  )
}
