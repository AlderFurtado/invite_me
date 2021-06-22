import React from "react";
import {
  FlatList,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";

import styled from "styled-components/native";

export const Container = styled.View``;

const { width } = Dimensions.get("screen");

export const FirstHalf = styled.View`
  background-color: #fc356a;
  height: 55%;
  align-items: flex-start;
`;

export const ContainerCard = styled.View`
  height: 300;
  justify-content: flex-end;
  align-items: center;
`;

export const Card = styled.View`
  width: 270;
  height: 250;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 20;
`;

export const Title = styled.Text`
  color: white;
  font-size: 32;
  font-weight: bold;
  margin-top: 50;
  padding-left: 16;
  padding-right: 16;
`;

export const Subtitle = styled.Text`
  color: #f4e5e7;
  font-size: 20px;
  padding-left: 16px;
  padding-right: 16px;
`;

export const SecondHalf = styled.View`
  justify-content: flex-end;
  align-items: center;
  height: 45%;
`;

export const BtnLogin = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background-color: #fc356a;
  margin-bottom: 32px;
`;

export const BtnTextLogin = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
const LoginScreen = ({ navigation }) => {
  return (
    <Container>
      <FirstHalf>
        <Title>Invite Me</Title>
        <Subtitle>
          O app convida{"\n"}Nós administramos{"\n"}Você se diverte
        </Subtitle>
        <FlatList
          data={[1, 2, 3, 4]}
          keyExtractor={(item) => item}
          style={{
            position: "absolute",
            bottom: -120,
          }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <ContainerCard style={{ width: width }}>
                <Card
                  style={{
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.89,

                    elevation: 5,
                  }}
                />
              </ContainerCard>
            );
          }}
        />
      </FirstHalf>
      <SecondHalf>
        <BtnLogin onPress={() => navigation.navigate("SelectType")}>
          <BtnTextLogin>Começar a festa</BtnTextLogin>
        </BtnLogin>
      </SecondHalf>
    </Container>
  );
};

export default LoginScreen;
