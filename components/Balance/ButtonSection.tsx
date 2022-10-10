import React,{ FunctionComponent } from 'react'
import styled from 'styled-components/native'

import RegularButton from '../Buttons/RegularButton'
import { colors } from '../colors'
import { Ionicons } from '@expo/vector-icons';

const ButtonSectionBackground = styled.View`
    width:100%;
    align-items:center;
    flex:1;
`

const ButtonSection:FunctionComponent = () => {
  return (
  <ButtonSectionBackground>
    <RegularButton btnStyles={{width:"50%"}} onPress={()=>{}}>
        Cancel <Ionicons color={colors.white} size={17} name="card"/>
    </RegularButton>
  </ButtonSectionBackground>
  )
}

export default ButtonSection