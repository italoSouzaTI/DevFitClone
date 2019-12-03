const initialState = {
  name: '',
  level: '', // beginner, intermediate, advanced
  workoutDays: [], //1-0
  myWorkouts: [],
  lastWorkout: '', //ID
  dailyProgress: ['2019-11-28', '2019-11-29'],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {...state, name: action.payload.name};
      break;
    case 'SET_WORKOUTDAYS':
      return {...state, workoutDays: action.payload.workoutDays};
      break;
    case 'SET_LEVEL':
      return {...state, level: action.payload.level};
      break;
  }
  return state;
};
