import React, { FunctionComponent } from "react";
import styled from "styled-components/native";
import { colors } from "../colors";

import { BalanceCardProps } from "./types";
import RegularText from "../Texts/RegularText";
import SmallText from "../Texts/SmallText";
import { View } from "react-native";

import card_bg from "./../../assets/bgs/background_transparent.png";

const CardBackground = styled.ImageBackground`
  height: 75%;
  width: 100%;
 // resize: cover;
  background-color: ${colors.accent};
  border-radius: 25px;

  overflow: hidden;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Logo = styled.Image`
  width: 100%;
  height: 80%;
 
  flex: 1;
`;

const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  flex: 1;
`;

const BalanceCard: FunctionComponent<BalanceCardProps> = (props) => {
  return (
    <CardBackground resizeMode="cover" source={card_bg}>
        <TouchableView>
          <CardRow>
            <RegularText textStyles={{ color: colors.white }}>
              ******{props?.accountNo?.slice(6, 10)}
            </RegularText>
          </CardRow>
          <CardRow>
            <View style={{ flex: 3 }}>
              <SmallText
                textStyles={{ marginBottom: 5, color: colors.graylight }}
              >
                Total Balance
              </SmallText>
              <RegularText textStyles={{ fontSize: 19 }}>
                ${props.balance}
              </RegularText>
            </View>
            <Logo resizeMode="contain" source={props.logo} />
          </CardRow>
        </TouchableView>
    </CardBackground>
  );
};

export default BalanceCard;
