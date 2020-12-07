import React from 'react'
import styles from './button.module.css'

export const Button = ({ type, children, disabled, onClick }) => {
  return (
    <button
      className={styles['button']}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}
