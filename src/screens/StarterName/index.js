import React from 'react';
import {connect} from 'react-redux';
import DefaultButton from '../../components/DefaultButton';
import {Container, HeaderText, NameInput, NextButton} from './styles';

const PageName = props => {
  const nextAction = () => {
    if (!props.name) {
      alert('Você precisa de um nome!');
    }
    props.navigation.navigate('StarterDay');
  };
  const handleChangeName = t => {
    props.setName(t);
    props.navigation.setParams({name: t});
  } ;

  return (
    <Container>
      <HeaderText>Qual é o seu Nome? </HeaderText>
      <NameInput
        value={props.name}
        onChangeText={handleChangeName}
        autoFocus={true}
        autoCapitalize="words"
        onSubmitEditing={nextAction}
      />
    </Container>
  );
};
PageName.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.name) {
      alert('Você precisa de um nome!');
      return ;
    }
    navigation.navigate('StarterDay');
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
    name: state.userReducer.name,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageName);
