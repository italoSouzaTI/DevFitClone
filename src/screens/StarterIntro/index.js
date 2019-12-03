import React from 'react';
import Boneco from '../../assets/boneco.png';
import DefaultButton from '../../components/DefaultButton';

import {
  Container,
  WelcomeText,
  WelcomeImage,
  WelcomeLogo,
  BeginConfigArea,
  BtnText,
} from './styles';

const PageIntro = props => {
  const start = () => {
    props.navigation.navigate('StarterName');
  };

  return (
    <Container>
      <WelcomeText>Bem vindo(a) ao DevFit</WelcomeText>
      <WelcomeImage>
        <WelcomeLogo source={Boneco} />
      </WelcomeImage>
      <BeginConfigArea>
        <DefaultButton
          width="100%"
          btnColor="#0072c0"
          heigth="50px"
          underlayColor="#0b7ac6"
          onPress={start}>
          <BtnText txtColor="#FFF">Iniciar Configuração</BtnText>
        </DefaultButton>
      </BeginConfigArea>
    </Container>
  );
};
PageIntro.navigationOptions = {
  header: null,
};

export default PageIntro;
