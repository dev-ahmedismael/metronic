import React from 'react'
import styles from '@/styles/status_btns.module.css'

const InProgressBtn = ({children}) => {
  return <div className={`${styles.inProgress} rounded p-1`}>{children}</div>;
}

export default InProgressBtn