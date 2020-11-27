import React from 'react'
import { Link } from 'components/link'
import styles from './logo.module.css'

export const Logo = () => (
  <div className={styles.logo}>
    <Link href="/">
      <h1>
        fernando<span>rodrigues</span>
      </h1>
    </Link>
  </div>
)
