import React from 'react'
import styles from './input.module.css'

export const Input = ({
  id,
  name,
  type,
  placeholder,
  required,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.input}
      id={id}
      name={name}
      placeholder={placeholder}
      required={required}
      type={type}
      onChange={onChange}
      value={value}
    />
  )
}
