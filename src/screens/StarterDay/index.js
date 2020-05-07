import React from 'react';
import {connect} from 'react-redux';
import ListWeek from '../../ListWeek';
import DefaultButton from '../../components/DefaultButton';
import {
  Container,
  HeaderText,
  NextButton,
  HeaderTextSub,
  BtnText,
  DaysArea,
} from './styles';

const PageDay = props => {
  let firstName = props.name.split(' ')[0]; //Passando nome na 1 posição

  const toggleDay = d => {
    let newWorkoutDays = [...props.workoutDays];
    if (!props.workoutDays.includes(d)) {
      newWorkoutDays.push(d);
    } else {
      newWorkoutDays = newWorkoutDays.filter(i => i != d);
    }
    props.setWorkoutDays(newWorkoutDays);
    props.navigation.setParams({workoutDays: newWorkoutDays});
  };

  return (
    <Container>
      <HeaderText>
        Opa, <BtnText>{firstName}</BtnText>,Tudo bem?{' '}
      </HeaderText>
      <HeaderTextSub>
        Quais <BtnText>dias da semena</BtnText> você pretende treinar{' '}
      </HeaderTextSub>
      <DaysArea>
        {ListWeek.map(days => (
          <DefaultButton
            btnColor={props.workoutDays.includes(days.opt) ? '#A5E8BC' : false}
            width={100}
            heigth={30}
            marginBottom={20}
            key={days.key}
            onPress={() => toggleDay(days.opt)}
            underlayColor="#CCC">
            <BtnText
              txtColor={props.workoutDays.includes(days.opt) ? '#fff' : false}>
              {days.day}
            </BtnText>
          </DefaultButton>
        ))}
      </DaysArea>
    </Container>
  );
};
PageDay.navigationOptions = ({navigation}) => {
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
    name: state.userReducer.name,
    workoutDays: state.userReducer.workoutDays,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setName: name => dispatch({type: 'SET_NAME', payload: {name}}),
    setWorkoutDays: workoutDays =>
      dispatch({type: 'SET_WORKOUTDAYS', payload: {workoutDays}}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageDay);
