import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import createGoal from '../screens/createGoal';
import goals from '../screens/goals';
import graphs from '../screens/graphs';
import Home from '../screens/home';
import login from '../screens/login';
import stats from '../screens/stats';


const screens = {
    createGoal: {
        screen: createGoal
    },
}

const HomeStack = createStackNavigator(screens);