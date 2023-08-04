import React from 'react'
import styles from '@/styles/status_btns.module.css'

const OnHoldBtn = ({children}) => {
  return <div className={`${styles.onHold} rounded p-1`}>{children}</div>;
}

export default OnHoldBtn
