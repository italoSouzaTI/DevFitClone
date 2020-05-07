import React from 'react';
import {connect} from 'react-redux';
import DefaultButton from '../../components/DefaultButton';
import {
  Container,
  HeaderText,
  NextButton,
  HeaderTextSub,
  LevelArea,
  BtnText,
} from './styles';

// import { Container } from './styles';

const PageNivel = props => {
  let funnyPhrase = '';
  switch (props.workoutDays.length) {
    case 1:
      funnyPhrase = 'Só 1 dia não vai adiantar muito, mas...';
      break;
    case 2:
      funnyPhrase = '2 dias eu acho pouco, mas quem sou eu pra te julgar?';
      break;
    case 3:
      funnyPhrase = 'Legal, 3 dias dá pro gasto...';
      break;
    case 4:
      funnyPhrase = 'Legal, 4 dias vai ser TOP!';
      break;
    case 5:
      funnyPhrase = 'É isso ai, 5 dias é o mínimo, lets Go!';
      break;
    case 6:
      funnyPhrase = 'É, 6 dias não é pra todo mundo...';
      break;
    case 7:
      funnyPhrase = 'Wooow! Todo dia?! WTF';
      break;

    default:
      break;
  }

  const setMyLevel = l => {
    props.setLevel(l);
    props.navigation.setParams({level: l});
  };
  return (
    <Container>
      <HeaderText>{funnyPhrase}</HeaderText>
      <HeaderTextSub>Qual seu nível hoje?</HeaderTextSub>

      <LevelArea>
        <DefaultButton
          btnColor={props.level == 'beginner' ? '#A5E8BC' : false}
          heigth={30}
          marginBottom={20}
          onPress={() => setMyLevel('beginner')}
          underlayColor="#CCC">
          <BtnText txtColor={props.level == 'beginner' ? '#fff' : false}>
            Iniciante/ Um frango
          </BtnText>
        </DefaultButton>

        <DefaultButton
          btnColor={props.level == 'intermediate' ? '#A5E8BC' : false}
          heigth={30}
          marginBottom={20}
          onPress={() => setMyLevel('intermediate')}
          underlayColor="#CCC">
          <BtnText txtColor={props.level == 'intermediate' ? '#fff' : false}>
            Intermediário/ Me viro bem
          </BtnText>
        </DefaultButton>

        <DefaultButton
          btnColor={props.level == 'advanced' ? '#A5E8BC' : false}
          heigth={30}
          marginBottom={20}
          onPress={() => setMyLevel('advanced')}
          underlayColor="#CCC">
          <BtnText txtColor={props.level == 'advanced' ? '#fff' : false}>
            Avançado/ Primo do The Rock
          </BtnText>
        </DefaultButton>
      </LevelArea>
    </Container>
  );
};
PageNivel.navigationOptions = ({navigation}) => {
  const nextAction = () => {
    if (!navigation.state.params || !navigation.state.params.level) {
      alert('Você precisa escolher uma opção');
      return;
    }
    navigation.navigate('StarterRecommendations');
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
    level: state.userReducer.level,
    workoutDays: state.userReducer.workoutDays,
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
)(PageNivel);
