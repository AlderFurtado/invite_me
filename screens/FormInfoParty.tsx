import React, { useEffect, useState } from "react";
import { View, TextInput, Text, TouchableOpacity } from "react-native";
import axios from "axios";

import styled from "styled-components/native";
export const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 5%;
  padding-vertical: 12%;
  margin-top: 24px;
  height: 100%;
`;

export const ContainerStep = styled.View``;

export const Title = styled.Text`
  font-size: 32;
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  font-size: 18;
  font-weight: normal;
  color: gray;
`;

export const TextInputBox = styled.TextInput`
  margin-top: 16px;
  background-color: #e0dfdf;
  padding-vertical: 10px;
`;

export const BtnNext = styled.TouchableOpacity`
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

const FormInfoParty = (): JSX.Element => {
  const [step, setStep] = useState<number>(0);
  const [cep, setCep] = useState<string>("");
  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return StepName();
      case 1:
        return StepDate();
      case 2:
        return StepAdress(cep, setCep);
      case 3:
        return StepMessage();
      case 4:
        return StepObs();
      default:
        break;
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  return (
    <Container>
      {renderStep(step)}
      <View>
        <BtnNext onPress={nextStep}>
          <BtnTextLogin>Continuar</BtnTextLogin>
        </BtnNext>
        <TouchableOpacity onPress={previousStep}>
          <Text>Voltar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

const StepName = (): JSX.Element => {
  return (
    <ContainerStep>
      <Title>Nome da festa</Title>
      <Subtitle>
        Use aquele nome memoravel para as pessoas não esquecerem
      </Subtitle>
      <TextInputBox placeholder="Nome da festa" textAlign={"center"} />
    </ContainerStep>
  );
};

const StepDate = (): JSX.Element => {
  return (
    <View>
      <Title>Data do evento</Title>
      <Subtitle>
        Marque aquela data que nós lembraremos os seus convidados
      </Subtitle>
      <TextInputBox
        placeholder="Data da festa"
        keyboardType={"number-pad"}
        textAlign={"center"}
      />
    </View>
  );
};

const StepAdress = (cep: string, setCep: Function): JSX.Element => {
  const getAndressByCEP = async (cep: string) => {
    const { data: address } = await axios.get(
      `https://viacep.com.br/ws/${cep}/json/`
    );
    console.log("address", address);
  };

  return (
    <View>
      <Title>Endereço do local</Title>
      <Subtitle>Deixe o local onde a diversão vai acontecer</Subtitle>
      <TextInputBox
        value={cep}
        onChangeText={(text) => setCep(text)}
        placeholder="CEP do local da festa"
        keyboardType={"number-pad"}
        onSubmitEditing={() => getAndressByCEP(cep)}
        textAlign={"center"}
      />
    </View>
  );
};

const StepMessage = (): JSX.Element => {
  return (
    <View>
      <Title>Messagem</Title>
      <Subtitle>
        Faça um convite especial para seus amigos e familiares
      </Subtitle>
      <TextInputBox placeholder="Mensagem" textAlign={"center"} />
    </View>
  );
};

const StepObs = (): JSX.Element => {
  return (
    <View>
      <Title>Observação</Title>
      <Subtitle>Caso queira deixar algum detalhe importe</Subtitle>
      <TextInputBox placeholder="Observação" textAlign={"center"} />
    </View>
  );
};

export default FormInfoParty;
