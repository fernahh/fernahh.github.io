import React from 'react'
import { H1 } from 'components/heading'
import { P } from 'components/paragraph'
import styles from './page-header.module.css'

export const PageHeader = ({ title, description }) => (
  <header className={styles['page-header']}>
    <H1>{title}</H1>
    <P>{description}</P>
  </header>
)
