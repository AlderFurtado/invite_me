import React from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";

import styled from "styled-components/native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const SelectTypeScreen = ({ navigation }: any): JSX.Element => {
  return (
    <Container>
      <Text>Você está aqui por que?</Text>
      <TouchableOpacity>
        <Text>Fui convidado para um evento</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text>Vou fazer um evento</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default SelectTypeScreen;
