import React from 'react';
import {connect} from 'react-redux';
import DefaultButton from '../../components/DefaultButton';
import {Container, HeaderText, NextButton, HeaderTextSub} from './styles';

const NivelPage = props => {
  return (
    <Container>
      <HeaderText>...</HeaderText>
      <HeaderTextSub>Qual seu nivel hoje?</HeaderTextSub>
    </Container>
  );
};
NivelPage.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (
      !navigation.state.params ||
      !navigation.state.params.workoutDays.length
    ) {
      alert('Você precisa treinar pelo menos 1 dia!');
      return;
    }
    navigation.navigate('StarterNivel');
  };

  return {
    title: '',
    headerRight: <NextButton title="Próximo" onPress={nextAction} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};

const mapStateToProps = state => {
  return {
    workoutDays: state.userReducer.workoutDays,
    level: state.userReducer.level,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NivelPage);
