import React, { FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { BalanceCardProps } from './types'
import BalanceCard from './BalanceCard'

const BalanceCardSectionBackground=styled.View`
  flex:2;
  width:100%;
  align-items:center;
`

const BalanceCardSection:FunctionComponent<BalanceCardProps> = (props) => {
  return (
   <BalanceCardSectionBackground>
    <BalanceCard
    {...props}/>
   </BalanceCardSectionBackground>
  )
}

export default BalanceCardSection