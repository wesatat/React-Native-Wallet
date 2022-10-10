import styled from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import React, { FunctionComponent } from "react";
import { Container } from "../components/shared";
import { colors } from "../components/colors";
import CardSection from "../components/Cards/CardSection";
import TransactionSection from "../components/Transactions/TransactionSection";
import logo1 from "./../assets/cards/visa_white.png";
import logo2 from "./../assets/cards/mc.png";
import SendMoneySection from "../components/SendMoney/SendMoneySection";
import portrait1 from "./../assets/portraits/1.jpg";
import portrait2 from "./../assets/portraits/2.jpg";
import portrait3 from "./../assets/portraits/3.jpg";

import { RootStackParamList } from "../navigators/RootStack";
import { StackScreenProps } from "@react-navigation/stack";
export type Props = StackScreenProps<RootStackParamList,"Home">;


const HomeContainer = styled(Container)`
  background-color: ${colors.graylight};
  width: 100%;
  flex: 1;
`;

const Home: FunctionComponent<Props> = () => {
  const cardsData = [
    {
      id: 1,
      accountNo: "3845757774",
      balance: 2000.15,
      alias: "Work Debit",
      logo: logo1,
    },
    {
      id: 2,
      accountNo: "6945754324",
      balance: 3010.76,
      alias: "Personal Prepaid",
      logo: logo2,
    },
    {
      id: 3,
      accountNo: "6342757114",
      balance: 101.5,
      alias: "School Prepaid",
      logo: logo1,
    },
  ];

  const transactionData = [
    {
      id: 1,
      title: "Taxi",
      subtitle: "Uber Car",
      amount: "-$86.00",
      date: "14th Sep 2020",
      art: {
        icon: "car",
        background: colors.primary,
      },
    },
    {
      id: 2,
      title: "Shoes",
      subtitle: "Clothing",
      amount: "-$275.00",
      date: "18th Sep 2020",
      art: {
        icon: "cart",
        background: colors.primary,
      },
    },
    {
      id: 3,
      title: "Travel",
      subtitle: "Emirates",
      amount: "-$312.00",
      date: "19th Sep 2020",
      art: {
        icon: "airplane",
        background: colors.primary,
      },
    },
  ];

  const SendMoneyData = [
    {
      id: 1,
      name: "Jason Carey",
      amount: "256.07",
      background: colors.tertiary,
      img: portrait1,
    },
    {
      id: 2,
      name: "Alex Mair",
      amount: "128.56",
      background: colors.primary,
      img: portrait2,
    },
    {
      id: 3,
      name: "George  Stoff",
      amount: "341.80",
      background: colors.accent,
      img: portrait3,
    },
  ];

  return (
    <HomeContainer>
      <StatusBar style="dark" />
      <CardSection data={cardsData} />
      <TransactionSection data={transactionData} />
      <SendMoneySection data={SendMoneyData} />
    </HomeContainer>
  );
};

export default Home;
