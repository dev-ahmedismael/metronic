import React from 'react'

const RoundedCard = ({children}) => {
  return (
    <div className='rounded whiteBg py-3 px-4 mb-5' style={{height:'100%'}}>
      {children}
    </div>
  )
}

export default RoundedCard
