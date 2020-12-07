import React from 'react'
import { ScreenReaderOnly } from 'components/screen-reader-only'
import styles from './label.module.css'

export const Label = ({ children, text }) => (
  <div className={styles.label}>
    <ScreenReaderOnly>
      <label htmlFor="#" className={styles['label-text']}>
        {text}
      </label>
    </ScreenReaderOnly>
    <div>{children}</div>
  </div>
)
