import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import createGoal from '../screens/createGoal';
import goals from '../screens/goals';
import graphs from '../screens/graphs';
import home from '../screens/home';
import login from '../screens/login';
import stats from '../screens/stats';
import signup from '../screens/signUp';

const screens = {
    login: {
        screen: login
    },
    home: {
        screen: home
    },
    stats: {
        screen: stats
    },
    graphs: {
        screen: graphs
    },
    goals: {
        screen: goals
    },
    createGoal: {
        screen: createGoal
    },
    signup: {
        screen: signup
    }
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(homeStack);