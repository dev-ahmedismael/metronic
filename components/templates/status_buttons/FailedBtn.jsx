import React from 'react'
import styles from '@/styles/status_btns.module.css'

const FailedBtn = ({children}) => {
  return <div className={`${styles.failed}  rounded p-1`}>{children}</div>;
}

export default FailedBtn
