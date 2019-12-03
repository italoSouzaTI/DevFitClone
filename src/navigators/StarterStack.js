import {createStackNavigator} from 'react-navigation-stack';

import StarterIntro from '../screens/StarterIntro';
import StarterName from '../screens/StarterName';
import StarterDay from '../screens/StarterDay';
import StarterNivel from '../screens/StarterNivel/index';

export default createStackNavigator({
  StarterIntro,
  StarterName,
  StarterDay,
  StarterNivel,
});
