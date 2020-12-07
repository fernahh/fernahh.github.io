import React from 'react'
import styles from './form-control.module.css'

export const FormControl = ({ children }) => {
  return <div className={styles['form-control']}>{children}</div>
}
