import React from 'react'
import styles from '@/styles/buttons.module.css'

const DarkButton = ({children}) => {
  return (
    <div className={`${styles.darkButton} p-2 rounded`}>
      {children}
    </div>
  )
}

export default DarkButton
