import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

const screens = {
    Home: {
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens);