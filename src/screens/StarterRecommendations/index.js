import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {
  Container,
  HeaderText,
  NextButton,
  HeaderTextSub,
  WorkoutList,
} from './styles';
import workoutJson from '../../presetWorkouts.json';
// import { Container } from './styles';

const PageRecomendation = props => {
  useEffect(() => {
    props.navigation.setParams({myWorkouts: props.myWorkouts});
  }, [props.myWorkouts]);

  return (
    <Container>
      <HeaderText>
        Opções de treino pré-criados com base no seu nivel
      </HeaderText>
      <HeaderTextSub>
        Você selecionou {props.myWorkouts.length} treinos
      </HeaderTextSub>
      <WorkoutList
        data={workoutJson}
        renderItem={({item}) => <Text>{item.name}</Text>}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};
PageRecomendation.navigationOptions = ({navigation}) => {
  let btnNext =
    navigation.state.params && navigation.state.params.myWorkouts.length > 0
      ? 'Concluir'
      : 'Ignorar';

  // const nextAction = () => {
  //   if (!navigation.state.params || !navigation.state.params.name) {
  //     alert('Você precisa escolher uma opção');
  //     return;
  //   }
  //   navigation.navigate('StarterRecommendations');
  // };

  return {
    title: '',
    headerRight: <NextButton title={btnNext} onPress={() => {}} />,
    headerRightContainerStyle: {
      marginRight: 10,
    },
  };
};
const mapStateToProps = state => {
  return {
    myWorkouts: state.userReducer.myWorkouts,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setLevel: level => dispatch({type: 'SET_LEVEL', payload: {level}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageRecomendation);
